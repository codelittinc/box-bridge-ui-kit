import React from "react";
import { Box, Dialog, DialogTitle, DialogContent } from "@mui/material";
import styles from "./styles.module.css";

export type ModalProps = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title: string;
  maxWidth?: string;
};

function Modal({ open, onClose, children, title, maxWidth = "420px" }: ModalProps) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      slotProps={{
        paper: {
          sx: {
            maxWidth,
            width: "100%",
          },
          className: styles["modal"],
        },
      }}
    >
      <DialogTitle className={styles["modal-title"]}>{title}</DialogTitle>
      <DialogContent>
        <Box className={styles["modal-content"]}>{children}</Box>
      </DialogContent>
    </Dialog>
  );
}

export default Modal;
