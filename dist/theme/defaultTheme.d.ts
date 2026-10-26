declare const defaultTheme: {
    palette: {
        primary: {
            main: string;
        };
        error: {
            main: string;
        };
        success: {
            main: string;
        };
        warning: {
            main: string;
        };
        background: {
            default: string;
        };
        common: {
            white: string;
            black: string;
        };
    };
    components: {
        MuiTypography: {
            styleOverrides: {
                root: {
                    overflowWrap: string;
                    minWidth: number;
                };
            };
        };
        MuiFormControl: {
            styleOverrides: {
                root: {
                    minWidth: number;
                    maxWidth: string;
                };
            };
        };
        MuiFormControlLabel: {
            styleOverrides: {
                root: {
                    minWidth: number;
                };
                label: {
                    minWidth: number;
                    overflowWrap: string;
                };
            };
        };
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    whiteSpace: string;
                    overflowWrap: string;
                };
            };
        };
        MuiInputBase: {
            styleOverrides: {
                root: {
                    minWidth: number;
                    maxWidth: string;
                };
                input: {
                    "@media (max-width: 599.95px)": {
                        fontSize: string;
                    };
                };
            };
        };
        MuiCssBaseline: {
            styleOverrides: {
                ":root": {
                    "--primary-main": string;
                    "--primary-text": string;
                    "--error-main": string;
                    "--success-main": string;
                    "--warning-main": string;
                    "--common-white": string;
                    "--common-black": string;
                    "--gray-1": string;
                    "--gray-2": string;
                    "--gray-3": string;
                    "--gray-4": string;
                    "--gray-5": string;
                    "--gray-6": string;
                };
            };
        };
    };
    typography: {
        fontFamily: string;
    };
};
export default defaultTheme;
