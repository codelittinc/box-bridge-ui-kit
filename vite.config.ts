import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { resolve } from "path";

export default defineConfig({
  plugins: [react(), dts({ insertTypesEntry: true })],
  css: {
    preprocessorOptions: {
      scss: {},
    },
  },
  build: {
    lib: {
      entry: resolve(import.meta.dirname, "src/index.ts"),
      formats: ["es", "cjs"],
      fileName: (format) => `index.${format === "es" ? "js" : "cjs"}`,
    },
    rolldownOptions: {
      external: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        /^@mui\//,
        /^@emotion\//,
        "react-hook-form",
        /^@radix-ui\//,
        /^@ariakit\//,
        "classnames",
        "match-sorter",
        "react-paginate",
      ],
      output: {
        // Every component here wraps MUI, which is client-only. Without this
        // directive a React Server Component importing the kit pulls the whole
        // bundle (incl. react-hook-form) into the server graph and fails to
        // link. MUI ships the same directive for the same reason.
        banner: '"use client";',
      },
    },
    cssCodeSplit: false,
  },
  resolve: {
    alias: {
      "@": resolve(import.meta.dirname, "src"),
    },
  },
});
