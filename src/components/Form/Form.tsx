import React from "react";
import { Box, Stack } from "@mui/material";
import Button, { ButtonCategory, ButtonHeight } from "../Button/Button";

export type FormProps = {
  children?: React.ReactNode;
  customSaveButtonText?: string;
  disabled?: boolean;
  onCancel?: () => void;
  onCancelText?: string;
  onSave?: (e: React.FormEvent) => void;
};

function Form({
  children,
  customSaveButtonText,
  disabled,
  onCancel,
  onCancelText,
  onSave,
}: FormProps): React.ReactElement {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSave) {
      onSave(e);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ width: "100%", minWidth: 0 }}>
      <Box>
        <Box sx={{ width: "100%", minWidth: 0 }}>{children}</Box>
        <Stack direction="row" sx={{ justifyContent: "flex-end", mt: "18px" }}>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            sx={{ width: { xs: "100%", sm: "auto" }, "& .MuiButton-root": { width: { xs: "100%", sm: "auto" } } }}
          >
            {onCancel ? (
              <Button
                height={ButtonHeight.medium}
                category={ButtonCategory.secondary}
                onClick={onCancel}
              >
                {onCancelText || "Cancel"}
              </Button>
            ) : null}
            <Box>
              <Button
                type="submit"
                height={ButtonHeight.medium}
                disabled={disabled}
              >
                {customSaveButtonText ?? "Save"}
              </Button>
            </Box>
          </Stack>
        </Stack>
      </Box>
    </form>
  );
}

export default Form;
