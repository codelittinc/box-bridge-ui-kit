import { default as React } from 'react';
export type ToastProps = {
    open: boolean;
    title?: string;
    message?: string;
    severity?: "info" | "success" | "warning" | "error";
    onClose: () => void;
    autoHideDuration?: number;
};
declare function Toast({ open, title, message, severity, onClose, autoHideDuration, }: ToastProps): React.ReactElement;
export default Toast;
