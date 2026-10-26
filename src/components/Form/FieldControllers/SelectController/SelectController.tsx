import { useId, ReactNode } from "react";
import { Control, FieldValues, Path, useController, UseControllerProps } from "react-hook-form";
import { Stack, Typography, FormControl, Select, MenuItem, FormHelperText, SelectProps } from "@mui/material";
import useForkRef from "@mui/utils/useForkRef";

export type SelectControllerProps<T extends FieldValues> = {
  control: Control<T>;
  name: Path<T>;
  fieldTitle?: string;
  placeholder?: string;
  helperText?: ReactNode;
  rules?: UseControllerProps<T>["rules"];
  options: Array<{ value: string; label: string }>;
} & Omit<SelectProps<string>, "name" | "value" | "defaultValue" | "onChange">;

const SelectController = <T extends FieldValues>({
  control, name, fieldTitle, placeholder, required, options, helperText, rules,
  id: suppliedId, inputRef, onBlur, disabled, error: suppliedError, ...rest
}: SelectControllerProps<T>) => {
  const generatedId = useId();
  const id = suppliedId ?? generatedId;
  const label = fieldTitle ?? placeholder;
  const { field, fieldState: { error } } = useController({
    name, control, rules: { required: required && "This field is required", ...rules },
  });
  const ref = useForkRef(field.ref, inputRef);
  const description = error?.message ?? helperText;

  return (
    <Stack direction="column" sx={{ width: "100%", minWidth: 0, overflowWrap: "anywhere" }}>
      {label && (
        <Typography component="label" id={`${id}-label`}
          sx={{ color: "text.secondary", fontSize: "14px", fontWeight: 700, mb: "8px", mt: "4px" }}>
          {label}
        </Typography>
      )}
      <FormControl fullWidth required={required} disabled={disabled} error={!!error || suppliedError}>
        <Select
          displayEmpty
          renderValue={!field.value ? () => placeholder ?? "Select..." : undefined}
          {...rest}
          id={id}
          labelId={label ? `${id}-label` : undefined}
          name={field.name}
          inputRef={ref}
          value={field.value ?? ""}
          onChange={field.onChange}
          onBlur={(event) => { field.onBlur(); onBlur?.(event); }}
          aria-describedby={[rest["aria-describedby"], description ? `${id}-helper-text` : undefined].filter(Boolean).join(" ") || undefined}
        >
          {options.map((option) => <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>)}
        </Select>
        {description && <FormHelperText id={`${id}-helper-text`}>{description}</FormHelperText>}
      </FormControl>
    </Stack>
  );
};

export default SelectController;
