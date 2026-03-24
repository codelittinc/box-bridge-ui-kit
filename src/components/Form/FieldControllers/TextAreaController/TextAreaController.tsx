import { Box, Typography, TextField } from "@mui/material";
import { Control, Controller, FieldValues, Path } from "react-hook-form";

export type TextAreaControllerProps<T extends FieldValues> = {
  control: Control<T>;
  name: Path<T>;
  required?: boolean;
  fieldTitle?: string;
  placeholder?: string;
};

const TextAreaController = <T extends FieldValues>({
  name,
  control,
  required,
  fieldTitle,
  placeholder,
  ...rest
}: TextAreaControllerProps<T>) => (
  <Controller
    name={name}
    control={control}
    rules={{
      required: required && "This field is required",
    }}
    render={({ field: { onChange, value } }) => (
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "baseline",
          flexDirection: "column",
          width: "100%",
        }}
      >
        {fieldTitle && (
          <Typography
            color="text.secondary"
            sx={{
              fontSize: "14px",
              fontWeight: 700,
              marginBottom: "8px",
              marginTop: "4px",
            }}
          >
            {fieldTitle}
          </Typography>
        )}
        <TextField
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          required={required}
          multiline
          rows={4}
          fullWidth
          sx={{
            width: "100%",
            "& .MuiInputBase-root": {
              minHeight: "100px",
            },
          }}
          {...rest}
        />
      </Box>
    )}
  />
);

export default TextAreaController;
