import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from "@mui/material";
import React, { forwardRef } from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";

export enum ButtonCategory {
  outlined = "outlined",
  primary = "primary",
  secondary = "secondary",
  text = "text",
}

export enum ButtonHeight {
  small = "small",
  medium = "medium",
  large = "large",
}

export type ButtonProps = MuiButtonProps & {
  category?: ButtonCategory;
  className?: string;
  height?: ButtonHeight;
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      category = ButtonCategory.primary,
      className,
      height = ButtonHeight.large,
      ...otherProps
    },
    ref
  ) => {
    let variant: "contained" | "outlined" | "text" = "contained";
    if (category === ButtonCategory.outlined) variant = "outlined";
    if (category === ButtonCategory.text) variant = "text";

    return (
      // variant/disableRipple come before the spread so they act as defaults
      // derived from `category`: a caller passing either explicitly overrides
      // them rather than having them silently discarded. className stays after
      // the spread because it is merged, not replaced.
      <MuiButton
        variant={variant}
        disableRipple={category === ButtonCategory.text}
        {...otherProps}
        ref={ref}
        className={classNames(
          styles[`button-${category}`],
          styles[`button-${height}`],
          styles["button"],
          className
        )}
      />
    );
  }
);

Button.displayName = "Button";

export default Button;
