import { default as React } from 'react';
export type ModalProps = {
    open: boolean;
    onClose: () => void;
    children: React.ReactNode;
    title: string;
    maxWidth?: string;
};
declare function Modal({ open, onClose, children, title, maxWidth }: ModalProps): import("react/jsx-runtime").JSX.Element;
export default Modal;
