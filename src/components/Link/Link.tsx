import { Link as MuiLink, LinkProps as MuiLinkProps } from "@mui/material";
import React from "react";

export type LinkProps = MuiLinkProps;

const Link: React.FC<LinkProps> = ({ children, ...otherProps }) => {
  return (
    <MuiLink
      {...otherProps}
      fontSize={"12px"}
      className={`${otherProps.className || ""}`}
      underline="hover"
      color="primary"
    >
      {children}
    </MuiLink>
  );
};

export default Link;
