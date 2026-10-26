type CssVars = Record<string, string | undefined>;
/**
 * The org primary colour when it reads at 3:1 on every background an active
 * row can have: the row surface (`--gray-6`), the hover background
 * (`--gray-3`) and the selected-row tint. Otherwise the theme text colour.
 * Org admins can pick any primary, so it cannot be assumed to pass.
 */
export declare function computeFocusRing(vars: CssVars): string | undefined;
type ThemeConfig = Record<string, unknown>;
/**
 * Adds `--focus-ring` to the theme's `:root` CSS variables, unless the theme
 * already sets one.
 */
export declare function withFocusRing(config: ThemeConfig): ThemeConfig;
export {};
