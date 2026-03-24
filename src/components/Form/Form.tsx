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
    <form onSubmit={handleSubmit}>
      <Box>
        <Box sx={{ width: "100%" }}>{children}</Box>
        <Stack direction="row" justifyContent="flex-end" sx={{ mt: "18px" }}>
          <Stack direction="row" spacing={2}>
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
