import { Control, Controller, FieldValues, Path } from "react-hook-form";
import {
  Stack,
  Typography,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  FormHelperText,
} from "@mui/material";

export type SelectControllerProps<T extends FieldValues> = {
  control: Control<T>;
  name: Path<T>;
  fieldTitle?: string;
  placeholder?: string;
  required?: boolean;
  options: Array<{ value: string; label: string }>;
};

const SelectController = <T extends FieldValues>({
  control,
  name,
  fieldTitle,
  placeholder,
  required,
  options,
}: SelectControllerProps<T>) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={{ required: required && "This field is required" }}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
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
          <FormControl fullWidth error={!!error}>
            {placeholder && <InputLabel>{placeholder}</InputLabel>}
            <Select
              value={value || ""}
              onChange={onChange}
              displayEmpty={!placeholder}
              renderValue={
                !value && !placeholder ? () => "Select..." : undefined
              }
            >
              {options.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
            {error && <FormHelperText error>{error.message}</FormHelperText>}
          </FormControl>
        </Stack>
      )}
    />
  );
};

export default SelectController;
