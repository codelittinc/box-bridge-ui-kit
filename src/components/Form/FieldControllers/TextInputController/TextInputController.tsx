import { useId } from "react";
import { Box, TextField, Typography, TextFieldProps } from "@mui/material";
import useForkRef from "@mui/utils/useForkRef";
import { Control, FieldValues, Path, useController, UseControllerProps } from "react-hook-form";
import styles from "./styles.module.css";

export type TextInputControllerProps<T extends FieldValues> = {
  control: Control<T>;
  fieldTitle?: string;
  name: Path<T>;
  rules?: UseControllerProps<T>["rules"];
} & Omit<TextFieldProps, "name" | "defaultValue">;

const TextInputController = <T extends FieldValues>({
  control, fieldTitle, name, required, rules, id: suppliedId,
  inputRef, onChange, onBlur, error: suppliedError, helperText, slotProps, ...rest
}: TextInputControllerProps<T>) => {
  const generatedId = useId();
  const id = suppliedId ?? generatedId;
  const { field, fieldState: { error } } = useController({
    name, control, rules: { required: required && "This field is required", ...rules },
  });
  const ref = useForkRef(field.ref, inputRef);
  const description = error?.message ?? helperText;

  return (
    <Box className={styles.container}>
      {fieldTitle && (
        <Typography component="label" htmlFor={id} className={styles.title} variant="body2">
          {fieldTitle}
        </Typography>
      )}
      <TextField
        fullWidth
        variant="outlined"
        size="medium"
        {...rest}
        id={id}
        name={field.name}
        inputRef={ref}
        value={field.value ?? ""}
        required={required}
        error={!!error || suppliedError}
        helperText={description}
        onChange={(event) => { field.onChange(event); onChange?.(event); }}
        onBlur={(event) => { field.onBlur(); onBlur?.(event); }}
        slotProps={{
          ...slotProps,
          htmlInput: (ownerState) => {
            const inputProps = typeof slotProps?.htmlInput === "function"
              ? slotProps.htmlInput(ownerState) : slotProps?.htmlInput;
            return {
              ...inputProps,
              "aria-describedby": [inputProps?.["aria-describedby"], description ? `${id}-helper-text` : undefined]
                .filter(Boolean).join(" ") || undefined,
            };
          },
        }}
      />
    </Box>
  );
};

export default TextInputController;
