import React, { useId } from "react";
import {
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  PaperProps,
} from "@mui/material";
import styles from "./styles.module.css";

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

function Modal({
  open,
  onClose,
  children,
  title,
  maxWidth = "420px",
  actions,
  "data-testid": dataTestId,
}: ModalProps) {
  const titleId = useId();
  const paperProps: PaperProps & { "data-testid"?: string } = {
    sx: {
      maxWidth,
      width: "calc(100% - 32px)",
      m: "16px",
      maxHeight: "calc(100dvh - 32px)",
      boxSizing: "border-box",
      minWidth: 0,
    },
    className: styles["modal"],
    "data-testid": dataTestId,
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby={titleId}
      slotProps={{ paper: paperProps }}
    >
      <DialogTitle id={titleId} className={styles["modal-title"]}>
        {title}
      </DialogTitle>
      <DialogContent>
        <Box className={styles["modal-content"]}>{children}</Box>
      </DialogContent>
      {actions && <DialogActions className={styles["modal-actions"]}>{actions}</DialogActions>}
    </Dialog>
  );
}

export default Modal;
