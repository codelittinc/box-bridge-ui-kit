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
   * ⌘/Ctrl+Enter submits through the same path as the Save button. The key
   * passes through untouched while `disabled` (pass it while a submit is
   * pending), without `onSave`, on auto-repeat and during IME composition.
   * Defaults to true.
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
    const form = formRef.current;
    const isModEnter = e.key === "Enter" && (e.metaKey || e.ctrlKey);
    const isComposing = e.nativeEvent.isComposing || e.keyCode === 229;
    if (!submitOnModEnter || !isModEnter || isComposing || e.repeat) return;
    if (disabled || !onSave || !form) return;
    // React bubbles events through portals, so a Modal or Drawer rendered
    // inside this Form's children must not submit it.
    if (!(e.target instanceof Node) || !form.contains(e.target)) return;

    e.preventDefault();
    e.stopPropagation();
    form.requestSubmit();
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
