import React, { useRef } from "react";
import { Box, Stack } from "@mui/material";
import Button, { ButtonCategory, ButtonHeight } from "../Button/Button";

export type FormProps = {
  children?: React.ReactNode;
  customSaveButtonText?: string;
  disabled?: boolean;
  onCancel?: () => void;
  onCancelText?: string;
  onSave?: (e: React.FormEvent) => void;
  /**
   * ⌘/Ctrl+Enter submits through the same path as the Save button. Ignored
   * while `disabled` (pass it while a submit is pending) and during IME
   * composition. Defaults to true.
   */
  submitOnModEnter?: boolean;
};

function Form({
  children,
  customSaveButtonText,
  disabled,
  onCancel,
  onCancelText,
  onSave,
  submitOnModEnter = true,
}: FormProps): React.ReactElement {
  const formRef = useRef<HTMLFormElement>(null);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLFormElement>) => {
    const isModEnter = e.key === "Enter" && (e.metaKey || e.ctrlKey);
    const isComposing = e.nativeEvent.isComposing || e.keyCode === 229;
    if (!submitOnModEnter || !isModEnter || isComposing) return;

    // Handled even when ignored, so the browser's implicit submit and app-level
    // shortcuts never act on it.
    e.preventDefault();
    e.stopPropagation();
    if (disabled || e.repeat) return;
    formRef.current?.requestSubmit();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSave) {
      onSave(e);
    }
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      onKeyDown={handleKeyDown}
      style={{ width: "100%", minWidth: 0 }}
    >
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
