import defaultTheme from "./defaultTheme";

const darkTheme = {
  palette: {
    primary: {
      main: "#90caf9",
    },
    error: {
      main: "#f44336",
    },
    success: {
      main: "#66bb6a",
    },
    warning: {
      main: "#ffa726",
    },
    background: {
      default: "#121212",
    },
    common: {
      white: "#ffffff",
      black: "#000000",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ":root": {
          "--primary-main": "#90caf9",
          "--primary-text": "#121212",
          "--error-main": "#f44336",
          "--success-main": "#66bb6a",
          "--warning-main": "#ffa726",
          "--common-white": "#1e1e1e",
          "--common-black": "#ffffff",
          "--gray-1": "#b0b0b0",
          "--gray-2": "#333333",
          "--gray-3": "#2a2a2a",
          "--gray-4": "#555555",
          "--gray-5": "#444444",
          "--gray-6": "#1a1a1a",
        },
      },
    },
  },
  typography: {
    fontFamily: '"Inter", sans-serif',
  },
};

const tealTheme = {
  palette: {
    primary: {
      main: "#009688",
    },
    error: {
      main: "#d32f2f",
    },
    success: {
      main: "#2e7d32",
    },
    warning: {
      main: "#ed6c02",
    },
    background: {
      default: "#ffffff",
    },
    common: {
      white: "#ffffff",
      black: "#000000",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ":root": {
          "--primary-main": "#009688",
          "--primary-text": "white",
          "--error-main": "#d32f2f",
          "--success-main": "#2e7d32",
          "--warning-main": "#ed6c02",
          "--common-white": "#ffffff",
          "--common-black": "#000000",
          "--gray-1": "#505050",
          "--gray-2": "#e8e8e8",
          "--gray-3": "#f0f0f0",
          "--gray-4": "#cacaca",
          "--gray-5": "#eaeaea",
          "--gray-6": "#f9f9f9",
        },
      },
    },
  },
  typography: {
    fontFamily: '"Inter", sans-serif',
  },
};

const orangeTheme = {
  palette: {
    primary: {
      main: "#e65100",
    },
    error: {
      main: "#d32f2f",
    },
    success: {
      main: "#2e7d32",
    },
    warning: {
      main: "#ed6c02",
    },
    background: {
      default: "#fff8f0",
    },
    common: {
      white: "#ffffff",
      black: "#000000",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ":root": {
          "--primary-main": "#e65100",
          "--primary-text": "white",
          "--error-main": "#d32f2f",
          "--success-main": "#2e7d32",
          "--warning-main": "#ed6c02",
          "--common-white": "#ffffff",
          "--common-black": "#000000",
          "--gray-1": "#505050",
          "--gray-2": "#e8e8e8",
          "--gray-3": "#f0f0f0",
          "--gray-4": "#cacaca",
          "--gray-5": "#eaeaea",
          "--gray-6": "#f9f9f9",
        },
      },
    },
  },
  typography: {
    fontFamily: '"Inter", sans-serif',
  },
};

const navyEstateTheme = {
  palette: {
    primary: {
      main: "#003e69",
    },
    error: {
      main: "#d32f2f",
    },
    success: {
      main: "#2e7d32",
    },
    warning: {
      main: "#ed6c02",
    },
    background: {
      default: "#ffffff",
    },
    common: {
      white: "#ffffff",
      black: "#000000",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ":root": {
          "--primary-main": "#003e69",
          "--primary-text": "white",
          "--error-main": "#d32f2f",
          "--success-main": "#2e7d32",
          "--warning-main": "#ed6c02",
          "--common-white": "#ffffff",
          "--common-black": "#000000",
          "--gray-1": "#313131",
          "--gray-2": "#eeeeee",
          "--gray-3": "#f5f5f5",
          "--gray-4": "#cccccc",
          "--gray-5": "#e0e0e0",
          "--gray-6": "#fafafa",
        },
      },
    },
  },
  typography: {
    fontFamily: '"Inter", sans-serif',
  },
};

const glacierTealTheme = {
  palette: {
    primary: {
      main: "#09779e",
    },
    error: {
      main: "#b0133a",
    },
    success: {
      main: "#077f4e",
    },
    warning: {
      main: "#c14701",
    },
    background: {
      default: "#ffffff",
    },
    common: {
      white: "#ffffff",
      black: "#000000",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ":root": {
          "--primary-main": "#09779e",
          "--primary-text": "white",
          "--error-main": "#b0133a",
          "--success-main": "#077f4e",
          "--warning-main": "#c14701",
          "--common-white": "#ffffff",
          "--common-black": "#01151d",
          "--gray-1": "#56656b",
          "--gray-2": "#eaeff1",
          "--gray-3": "#f6f9fa",
          "--gray-4": "#ced5d8",
          "--gray-5": "#dfe5e8",
          "--gray-6": "#f6f9fa",
        },
      },
    },
  },
  typography: {
    fontFamily: '"Inter", sans-serif',
  },
};

export const themePresets = {
  default: defaultTheme,
  dark: darkTheme,
  teal: tealTheme,
  orange: orangeTheme,
  navyEstate: navyEstateTheme,
  glacierTeal: glacierTealTheme,
} as const;
