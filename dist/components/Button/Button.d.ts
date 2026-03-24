import { ButtonProps as MuiButtonProps } from '@mui/material';
import { default as React } from 'react';
export declare enum ButtonCategory {
    outlined = "outlined",
    primary = "primary",
    secondary = "secondary",
    text = "text"
}
export declare enum ButtonHeight {
    small = "small",
    medium = "medium",
    large = "large"
}
export type ButtonProps = MuiButtonProps & {
    category?: ButtonCategory;
    className?: string;
    height?: ButtonHeight;
};
declare const Button: React.ForwardRefExoticComponent<Omit<ButtonProps, "ref"> & React.RefAttributes<HTMLButtonElement>>;
export default Button;
