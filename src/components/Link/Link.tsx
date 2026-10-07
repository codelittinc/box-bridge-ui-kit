import { Link as MuiLink, LinkProps as MuiLinkProps } from "@mui/material";
import React from "react";

export type LinkProps = MuiLinkProps;

const Link: React.FC<LinkProps> = ({ children, sx, ...otherProps }) => {
  return (
    <MuiLink
      {...otherProps}
      sx={[{ fontSize: "12px" }, ...(Array.isArray(sx) ? sx : [sx])]}
      className={`${otherProps.className || ""}`}
      underline="hover"
      color="primary"
    >
      {children}
    </MuiLink>
  );
};

export default Link;
