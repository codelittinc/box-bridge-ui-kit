import { TypographyProps as MuiTypographyProps } from '@mui/material';
import { default as React } from 'react';
export type TypographyVariant = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "subtitle1" | "subtitle2" | "body1" | "body2" | "caption" | "button" | "overline";
export type CustomTypographyProps = MuiTypographyProps & {
    bold?: boolean;
    state?: "error" | "success" | "warning";
};
declare const Typography: React.FC<CustomTypographyProps>;
export default Typography;
