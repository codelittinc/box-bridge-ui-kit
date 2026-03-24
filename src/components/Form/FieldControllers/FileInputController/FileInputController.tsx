import { Stack, Typography } from "@mui/material";
import { Control, Controller, FieldValues, Path } from "react-hook-form";

export type FileInputControllerProps<T extends FieldValues> = {
  control: Control<T>;
  name: Path<T>;
  required?: boolean;
  fieldTitle?: string;
  accept?: string;
  existingFileName?: string;
};

const FileInputController = <T extends FieldValues>({
  name,
  control,
  required,
  fieldTitle,
  accept,
  existingFileName,
}: FileInputControllerProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={{
        required: required && !existingFileName && "This field is required",
      }}
      render={({ field: { onChange }, fieldState: { error } }) => (
        <Stack
          direction="column"
          alignItems="flex-start"
          sx={{ width: "100%" }}
        >
          {fieldTitle && (
            <Typography
              color="text.secondary"
              sx={{
                fontSize: "14px",
                fontWeight: 700,
                mb: "8px",
                mt: "4px",
              }}
            >
              {fieldTitle}
            </Typography>
          )}
          <input
            type="file"
            onChange={(e) => {
              const file = e.target.files?.[0] || null;
              onChange(file);
            }}
            accept={accept}
            style={{
              display: "block",
              padding: "8px",
              border: "1px solid #ddd",
              borderRadius: "4px",
              background: "#f9f9f9",
              cursor: "pointer",
            }}
          />
          {existingFileName && (
            <Typography
              color="text.secondary"
              sx={{ fontSize: "12px", mt: "4px" }}
            >
              Selected file: {existingFileName}
            </Typography>
          )}
          {error && (
            <Typography color="error" sx={{ fontSize: "12px", mt: "4px" }}>
              {error.message}
            </Typography>
          )}
        </Stack>
      )}
    />
  );
};

export default FileInputController;
