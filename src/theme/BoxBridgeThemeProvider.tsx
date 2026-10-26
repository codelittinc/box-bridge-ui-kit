import React, { useMemo } from "react";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import defaultTheme from "./defaultTheme";
import { deepMerge } from "./deepMerge";
import { withFocusRing } from "./focusRing";

type BoxBridgeThemeProviderProps = {
  children: React.ReactNode;
  themeConfig?: Record<string, unknown>;
};

export function BoxBridgeThemeProvider({
  children,
  themeConfig,
}: BoxBridgeThemeProviderProps) {
  const theme = useMemo(() => {
    const mergedConfig = themeConfig
      ? deepMerge(defaultTheme as Record<string, unknown>, themeConfig)
      : defaultTheme;

    return createTheme(withFocusRing(mergedConfig) as any);
  }, [themeConfig]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
