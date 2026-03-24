import { default as React } from 'react';
import { MenuProps as MuiMenuProps } from '@mui/material';
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
declare const Menu: ({ anchorEl, children, menuItems, onClose, ...otherProps }: MenuProps) => import("react/jsx-runtime").JSX.Element;
export default Menu;
