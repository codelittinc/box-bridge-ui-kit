import React from "react";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import defaultTheme from "./defaultTheme";
import { deepMerge } from "./deepMerge";

type BoxBridgeThemeProviderProps = {
  children: React.ReactNode;
  themeConfig?: Record<string, unknown>;
};

export function BoxBridgeThemeProvider({
  children,
  themeConfig,
}: BoxBridgeThemeProviderProps) {
  const mergedConfig = themeConfig
    ? deepMerge(defaultTheme as Record<string, unknown>, themeConfig)
    : defaultTheme;

  const theme = createTheme(mergedConfig as any);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
