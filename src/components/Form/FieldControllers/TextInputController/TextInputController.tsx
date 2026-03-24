import { Box, TextField, Typography, TextFieldProps } from "@mui/material";
import { Control, Controller, FieldValues, Path } from "react-hook-form";
import styles from "./styles.module.css";

export type TextInputControllerProps<T extends FieldValues> = {
  control: Control<T>;
  disabled?: boolean;
  fieldTitle?: string;
  name: Path<T>;
  placeholder?: string;
  required?: boolean;
  type?: string;
} & Omit<TextFieldProps, "name">;

const TextInputController = <T extends FieldValues>({
  control,
  disabled,
  fieldTitle,
  name,
  placeholder,
  required,
  type,
  ...rest
}: TextInputControllerProps<T>) => (
  <Controller
    name={name}
    control={control}
    rules={{
      required: required && "This field is required",
    }}
    render={({ field: { onChange, value } }) => {
      return (
        <Box className={styles["container"]}>
          {fieldTitle && (
            <Typography className={styles["title"]} variant="body2">
              {fieldTitle}
            </Typography>
          )}
          <TextField
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            required={required}
            disabled={disabled}
            fullWidth
            variant="outlined"
            size="medium"
            type={type}
            {...rest}
          />
        </Box>
      );
    }}
  />
);

export default TextInputController;
