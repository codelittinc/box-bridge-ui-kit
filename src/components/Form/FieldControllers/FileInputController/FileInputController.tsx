import { InputHTMLAttributes, useId, Ref } from "react";
import { Stack, Typography } from "@mui/material";
import useForkRef from "@mui/utils/useForkRef";
import { Control, FieldValues, Path, useController, UseControllerProps } from "react-hook-form";

export type FileInputControllerProps<T extends FieldValues> = {
  control: Control<T>;
  name: Path<T>;
  fieldTitle?: string;
  existingFileName?: string;
  inputRef?: Ref<HTMLInputElement>;
  rules?: UseControllerProps<T>["rules"];
} & Omit<InputHTMLAttributes<HTMLInputElement>, "name" | "value" | "defaultValue" | "type">;

const FileInputController = <T extends FieldValues>({
  name, control, required, fieldTitle, existingFileName, rules,
  id: suppliedId, inputRef, onChange, onBlur, ...rest
}: FileInputControllerProps<T>) => {
  const generatedId = useId();
  const id = suppliedId ?? generatedId;
  const { field, fieldState: { error } } = useController({
    name, control, rules: { required: required && !existingFileName && "This field is required", ...rules },
  });
  const ref = useForkRef(field.ref, inputRef);
  const selectedName = field.value?.name ?? existingFileName;
  return (
    <Stack direction="column" sx={{ alignItems: "flex-start", width: "100%", minWidth: 0, overflowWrap: "anywhere" }}>
      {fieldTitle && (
        <Typography component="label" htmlFor={id}
          sx={{ color: "text.secondary", fontSize: "14px", fontWeight: 700, mb: "8px", mt: "4px" }}>
          {fieldTitle}
        </Typography>
      )}
      <input
        {...rest}
        id={id}
        type="file"
        name={field.name}
        ref={ref}
        required={required && !existingFileName}
        aria-invalid={!!error || rest["aria-invalid"]}
        aria-describedby={[rest["aria-describedby"], selectedName ? `${id}-filename` : undefined, error ? `${id}-error` : undefined].filter(Boolean).join(" ") || undefined}
        onBlur={(event) => { field.onBlur(); onBlur?.(event); }}
        onChange={(event) => { field.onChange(event.target.files?.[0] ?? null); onChange?.(event); }}
        style={{ display: "block", boxSizing: "border-box", width: "100%", minWidth: 0, maxWidth: "100%", padding: "8px", border: "1px solid #ddd", borderRadius: "4px", background: "#f9f9f9", ...rest.style }}
      />
      {selectedName && <Typography id={`${id}-filename`} sx={{ color: "text.secondary", fontSize: "12px", mt: "4px" }}>Selected file: {selectedName}</Typography>}
      {error && <Typography id={`${id}-error`} sx={{ color: "error.main", fontSize: "12px", mt: "4px" }}>{error.message}</Typography>}
    </Stack>
  );
};

export default FileInputController;
