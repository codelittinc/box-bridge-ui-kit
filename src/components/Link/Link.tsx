import { Link as MuiLink, LinkProps as MuiLinkProps } from "@mui/material";
import React from "react";

export type LinkProps = MuiLinkProps;

const Link: React.FC<LinkProps> = ({ children, sx, ...otherProps }) => {
  return (
    // Styling defaults the caller can override. Resolved with ?? rather than by
    // ordering: a JSX spread writes the key even when the value is undefined,
    // so placing these before the spread would let `underline={undefined}` fall
    // through to MUI's own default ('always') instead of ours. The caller's sx
    // comes after the default font size so it wins.
    <MuiLink
      {...otherProps}
      sx={[{ fontSize: "12px" }, ...(Array.isArray(sx) ? sx : [sx])]}
      underline={otherProps.underline ?? "hover"}
      color={otherProps.color ?? "primary"}
    >
      {children}
    </MuiLink>
  );
};

export default Link;
