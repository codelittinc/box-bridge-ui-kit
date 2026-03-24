import React from "react";
import {
  Box,
  Menu as MuiMenu,
  MenuItem as MuiMenuItem,
  Typography,
  MenuProps as MuiMenuProps,
} from "@mui/material";
import styles from "./styles.module.scss";

export type MenuItemConfig = {
  label: string;
  onClick: () => void;
};

export type MenuProps = Omit<MuiMenuProps, "open"> & {
  anchorEl?: HTMLElement | null;
  children?: React.ReactNode;
  menuItems?: MenuItemConfig[];
  onClose: () => void;
};

const Menu = ({
  anchorEl,
  children,
  menuItems,
  onClose,
  ...otherProps
}: MenuProps) => {
  return (
    <MuiMenu
      {...otherProps}
      open={Boolean(anchorEl)}
      className={styles["menu"]}
      anchorEl={anchorEl}
      onClose={onClose}
    >
      <Box className={styles["menu-container"]}>
        {menuItems?.map((item, index) => (
          <MuiMenuItem
            key={index}
            className={styles["menu-item"]}
            onClick={() => {
              item.onClick();
              onClose();
            }}
          >
            <Typography>{item.label}</Typography>
          </MuiMenuItem>
        ))}
        {children}
      </Box>
    </MuiMenu>
  );
};

export default Menu;
