import { default as React } from 'react';
export type ToastProps = {
    open: boolean;
    title?: string;
    message?: string;
    severity?: "info" | "success" | "warning" | "error";
    onClose: () => void;
    autoHideDuration?: number;
    /** Set on the alert surface (the element with role="alert"). */
    "data-testid"?: string;
};
declare function Toast({ open, title, message, severity, onClose, autoHideDuration, "data-testid": dataTestId, }: ToastProps): React.ReactElement;
export default Toast;
