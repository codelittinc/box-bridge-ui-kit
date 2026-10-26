import { default as React } from 'react';
export type ModalProps = {
    open: boolean;
    onClose: () => void;
    children: React.ReactNode;
    title: string;
    maxWidth?: string;
    /** Footer content, e.g. a Close button. Rendered right-aligned. */
    actions?: React.ReactNode;
    /** Set on the dialog surface (the element with role="dialog"). */
    "data-testid"?: string;
};
declare function Modal({ open, onClose, children, title, maxWidth, actions, "data-testid": dataTestId, }: ModalProps): React.JSX.Element;
export default Modal;
