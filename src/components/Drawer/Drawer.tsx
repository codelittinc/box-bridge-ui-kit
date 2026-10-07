import {
  Stack,
  IconButton,
  Drawer as MuiDrawer,
  Typography,
  Box,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { PropsWithChildren } from "react";
import Button, { ButtonCategory, ButtonHeight } from "../Button/Button";
import styles from "./styles.module.scss";

export type DrawerProps = PropsWithChildren & {
  isOpen: boolean;
  onClose: () => void;
  onCancel?: () => void;
  onSave: () => void;
  saveLabel?: string;
  headerTitle?: string;
  cancelLabel?: string;
};

const Drawer = ({
  isOpen,
  headerTitle,
  onClose,
  onSave,
  saveLabel,
  children,
  onCancel,
  cancelLabel,
}: DrawerProps) => {
  return (
    <MuiDrawer
      anchor="right"
      open={isOpen}
      onClose={onClose}
      classes={{
        paper: styles.drawer,
      }}
    >
      <Stack direction="column">
        <Stack
          direction="row"
          sx={{ justifyContent: "space-between", alignItems: "center" }}
          className={styles.drawerHeader}
        >
          <Typography variant="h6" className={styles.title}>
            {headerTitle}
          </Typography>
          <IconButton
            size="small"
            onClick={onClose}
            className={styles.closeButton}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </Stack>
        <Box className={styles.drawerContent}>{children}</Box>
        <Stack
          direction="row"
          spacing={1}
          sx={{ justifyContent: "flex-end" }}
          className={styles.drawerFooter}
        >
          {onCancel && (
            <Button
              category={ButtonCategory.outlined}
              height={ButtonHeight.small}
              onClick={onCancel}
            >
              {cancelLabel || "Cancel"}
            </Button>
          )}
          <Button height={ButtonHeight.small} onClick={onSave}>
            {saveLabel || "Save"}
          </Button>
        </Stack>
      </Stack>
    </MuiDrawer>
  );
};

export default Drawer;
