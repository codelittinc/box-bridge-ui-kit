// Serves the static Storybook build (storybook-static/) on Heroku.
import { createServer } from "node:http";
import { createReadStream } from "node:fs";
import { readFile, readdir, stat } from "node:fs/promises";
import { extname, join, normalize, sep } from "node:path";
import { promisify } from "node:util";
import { brotliCompress, gzip, constants } from "node:zlib";

const root = join(import.meta.dirname, "..", "storybook-static");
const port = Number(process.env.PORT) || 6006;

const types = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".map": "application/json; charset=utf-8",
};

const compressible = /^(text\/|application\/json|image\/svg)/;
const encoders = {
  br: (buf) =>
    promisify(brotliCompress)(buf, {
      params: { [constants.BROTLI_PARAM_QUALITY]: 9 },
    }),
  gzip: (buf) => promisify(gzip)(buf, { level: 9 }),
};

// The build is immutable for the dyno's lifetime, so compress each file once.
const compressed = new Map();
function getCompressed(file, encoding) {
  const key = `${encoding}:${file}`;
  if (!compressed.has(key)) {
    compressed.set(key, readFile(file).then(encoders[encoding]));
  }
  return compressed.get(key);
}

function pickEncoding(acceptEncoding = "") {
  if (/\bbr\b/.test(acceptEncoding)) return "br";
  if (/\bgzip\b/.test(acceptEncoding)) return "gzip";
  return null;
}

async function resolveFile(urlPath) {
  const file = normalize(join(root, decodeURIComponent(urlPath)));
  if (file !== root && !file.startsWith(root + sep)) return null;
  const info = await stat(file).catch(() => null);
  if (info?.isDirectory()) return resolveFile(join(urlPath, "index.html"));
  return info?.isFile() ? file : null;
}

createServer(async (req, res) => {
  const { pathname } = new URL(req.url, "http://localhost");
  const file = await resolveFile(pathname).catch(() => null);
  if (!file) {
    res.writeHead(404, { "Content-Type": "text/plain" }).end("Not found");
    return;
  }
  const isHashedAsset = pathname.startsWith("/assets/");
  const contentType = types[extname(file)] ?? "application/octet-stream";
  const headers = {
    "Content-Type": contentType,
    "Cache-Control": isHashedAsset ? "public, max-age=31536000, immutable" : "no-cache",
    Vary: "Accept-Encoding",
  };
  const encoding = compressible.test(contentType)
    ? pickEncoding(req.headers["accept-encoding"])
    : null;
  if (encoding) {
    const body = await getCompressed(file, encoding);
    res.writeHead(200, { ...headers, "Content-Encoding": encoding }).end(body);
    return;
  }
  res.writeHead(200, headers);
  createReadStream(file).pipe(res);
}).listen(port, () => {
  console.log(`Storybook listening on ${port}`);
  warmCache();
});

// Compress every text file up front so the first visitor doesn't pay for it.
async function warmCache() {
  const entries = await readdir(root, { recursive: true, withFileTypes: true });
  for (const entry of entries) {
    const contentType = types[extname(entry.name)];
    if (!entry.isFile() || !compressible.test(contentType ?? "")) continue;
    const file = join(entry.parentPath, entry.name);
    await Promise.all(Object.keys(encoders).map((enc) => getCompressed(file, enc)));
  }
  console.log("Compression cache warmed");
}
