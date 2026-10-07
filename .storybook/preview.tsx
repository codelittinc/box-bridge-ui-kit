import React from "react";
import type { Preview } from "@storybook/react-vite";
import { BoxBridgeThemeProvider } from "../src/theme";
import { themePresets } from "../src/theme/presets";

const preview: Preview = {
  globalTypes: {
    theme: {
      description: "Theme preset",
      toolbar: {
        title: "Theme",
        icon: "paintbrush",
        items: [
          { value: "default", title: "Default Blue" },
          { value: "dark", title: "Dark" },
          { value: "teal", title: "Teal" },
          { value: "orange", title: "Orange" },
          { value: "navyEstate", title: "Navy Estate" },
          { value: "glacierTeal", title: "Glacier Teal" },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    theme: "default",
  },
  decorators: [
    (Story, context) => {
      const themeKey = context.globals.theme || "default";
      const themeConfig = themePresets[themeKey as keyof typeof themePresets];
      return (
        <BoxBridgeThemeProvider themeConfig={themeConfig}>
          <Story />
        </BoxBridgeThemeProvider>
      );
    },
  ],
};

export default preview;
