import React from "react";
import { Snackbar, Alert, AlertTitle, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import styles from "./Toast.module.css";

export type ToastProps = {
  open: boolean;
  title?: string;
  message?: string;
  severity?: "info" | "success" | "warning" | "error";
  onClose: () => void;
  autoHideDuration?: number;
};

function Toast({
  open,
  title,
  message,
  severity = "info",
  onClose,
  autoHideDuration = 3000,
}: ToastProps): React.ReactElement {
  return (
    <Snackbar
      open={open}
      autoHideDuration={autoHideDuration}
      onClose={onClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      className={styles.ToastViewport}
    >
      <Alert
        severity={severity}
        className={styles.ToastRoot}
        action={
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={onClose}
            className={styles.ToastClose}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        }
      >
        {title && <AlertTitle className={styles.ToastTitle}>{title}</AlertTitle>}
        {message && <div className={styles.ToastDescription}>{message}</div>}
      </Alert>
    </Snackbar>
  );
}

export default Toast;
