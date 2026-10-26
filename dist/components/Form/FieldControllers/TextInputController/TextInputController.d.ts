import { TextFieldProps } from '@mui/material';
import { Control, FieldValues, Path, UseControllerProps } from 'react-hook-form';
export type TextInputControllerProps<T extends FieldValues> = {
    control: Control<T>;
    fieldTitle?: string;
    name: Path<T>;
    rules?: UseControllerProps<T>["rules"];
} & Omit<TextFieldProps, "name" | "defaultValue">;
declare const TextInputController: <T extends FieldValues>({ control, fieldTitle, name, required, rules, id: suppliedId, inputRef, onChange, onBlur, error: suppliedError, helperText, slotProps, ...rest }: TextInputControllerProps<T>) => import('react').JSX.Element;
export default TextInputController;
