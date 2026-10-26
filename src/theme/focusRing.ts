import { decomposeColor, getContrastRatio } from "@mui/material/styles";
import { deepMerge } from "./deepMerge";

// WCAG 2.2 SC 1.4.11: a focus indicator needs 3:1 against adjacent colours.
const MIN_CONTRAST = 3;
// Must match the selected-row tint in DataTable/styles.module.scss.
const SELECTED_TINT = 0.12;

type CssVars = Record<string, string | undefined>;

// Same result as CSS `color-mix(in srgb, overlay weight, base)`.
const mix = (base: string, overlay: string, weight: number): string => {
  const [br, bg, bb] = decomposeColor(base).values;
  const [or, og, ob] = decomposeColor(overlay).values;
  const channel = (b: number, o: number) => Math.round(o * weight + b * (1 - weight));
  return `rgb(${channel(br, or)}, ${channel(bg, og)}, ${channel(bb, ob)})`;
};

const isRgb = (color: string) => decomposeColor(color).type.startsWith("rgb");

/**
 * The org primary colour when it reads at 3:1 on both the row surface
 * (`--gray-6`) and the selected-row tint, otherwise the theme text colour.
 * Org admins can pick any primary, so it cannot be assumed to pass.
 */
export function computeFocusRing(vars: CssVars): string | undefined {
  const primary = vars["--primary-main"];
  const surface = vars["--gray-6"];
  const text = vars["--common-black"];
  if (!primary || !surface) return text;

  try {
    if (!isRgb(primary) || !isRgb(surface)) return text;
    const tint = mix(surface, primary, SELECTED_TINT);
    const passes =
      getContrastRatio(primary, surface) >= MIN_CONTRAST &&
      getContrastRatio(primary, tint) >= MIN_CONTRAST;
    return passes ? primary : text;
  } catch {
    return text;
  }
}

type ThemeConfig = Record<string, unknown>;

/** Adds `--focus-ring` to the theme's `:root` CSS variables. */
export function withFocusRing(config: ThemeConfig): ThemeConfig {
  const components = config.components as ThemeConfig | undefined;
  const baseline = components?.MuiCssBaseline as ThemeConfig | undefined;
  const overrides = baseline?.styleOverrides as ThemeConfig | undefined;
  const rootVars = overrides?.[":root"] as CssVars | undefined;
  const focusRing = rootVars && computeFocusRing(rootVars);
  if (!focusRing) return config;

  return deepMerge(config, {
    components: {
      MuiCssBaseline: { styleOverrides: { ":root": { "--focus-ring": focusRing } } },
    },
  });
}
