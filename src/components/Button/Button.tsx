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
      // variant/disableRipple are defaults derived from `category` that the
      // caller can override. Resolved with ?? rather than by ordering: a JSX
      // spread writes the key even when the value is undefined, so putting the
      // defaults before the spread would let `variant={undefined}` fall through
      // to MUI's own default ('text') instead of ours.
      //
      // className is merged rather than replaced. Note this only concatenates
      // classes — kit rules are written as `[class*=MuiButton-root]`
      // (specificity 0,2,0), so a caller's plain class still loses to them.
      <MuiButton
        {...otherProps}
        variant={otherProps.variant ?? variant}
        disableRipple={
          otherProps.disableRipple ?? (category === ButtonCategory.text)
        }
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
