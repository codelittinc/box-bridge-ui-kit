import {
  Typography as MuiTypography,
  TypographyProps as MuiTypographyProps,
} from "@mui/material";
import React from "react";
import styles from "./styles.module.scss";

export type TypographyVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "subtitle1"
  | "subtitle2"
  | "body1"
  | "body2"
  | "caption"
  | "button"
  | "overline";

export type CustomTypographyProps = MuiTypographyProps & {
  bold?: boolean;
  state?: "error" | "success" | "warning";
};

const Typography: React.FC<CustomTypographyProps> = ({
  variant = "body1",
  bold = false,
  state,
  children,
  ...otherProps
}) => {
  const className = [
    styles.typography,
    bold ? styles.bold : "",
    state ? styles[state] : "",
    otherProps.className || "",
  ].join(" ");

  return (
    <MuiTypography variant={variant} {...otherProps} className={className}>
      {children}
    </MuiTypography>
  );
};

export default Typography;
