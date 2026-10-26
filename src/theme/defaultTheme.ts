const defaultTheme = {
  palette: {
    primary: {
      main: "#006CB7",
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
    MuiTypography: {
      styleOverrides: { root: { overflowWrap: "anywhere", minWidth: 0 } },
    },
    MuiFormControl: {
      styleOverrides: { root: { minWidth: 0, maxWidth: "100%" } },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: { minWidth: 0 },
        label: { minWidth: 0, overflowWrap: "anywhere" },
      },
    },
    MuiMenuItem: {
      styleOverrides: { root: { whiteSpace: "normal", overflowWrap: "anywhere" } },
    },
    MuiInputBase: {
      styleOverrides: {
        root: { minWidth: 0, maxWidth: "100%" },
        input: { "@media (max-width: 599.95px)": { fontSize: "16px" } },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        ":root": {
          "--primary-main": "#016bb6",
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

export default defaultTheme;
