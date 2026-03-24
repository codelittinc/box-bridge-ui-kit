import { PropsWithChildren } from 'react';
export type DrawerProps = PropsWithChildren & {
    isOpen: boolean;
    onClose: () => void;
    onCancel?: () => void;
    onSave: () => void;
    saveLabel?: string;
    headerTitle?: string;
    cancelLabel?: string;
};
declare const Drawer: ({ isOpen, headerTitle, onClose, onSave, saveLabel, children, onCancel, cancelLabel, }: DrawerProps) => import("react/jsx-runtime").JSX.Element;
export default Drawer;
