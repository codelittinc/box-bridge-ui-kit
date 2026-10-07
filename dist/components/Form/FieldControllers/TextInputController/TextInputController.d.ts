import { TextFieldProps } from '@mui/material';
import { Control, FieldValues, Path } from 'react-hook-form';
export type TextInputControllerProps<T extends FieldValues> = {
    control: Control<T>;
    disabled?: boolean;
    fieldTitle?: string;
    name: Path<T>;
    placeholder?: string;
    required?: boolean;
    type?: string;
} & Omit<TextFieldProps, "name">;
declare const TextInputController: <T extends FieldValues>({ control, disabled, fieldTitle, name, placeholder, required, type, ...rest }: TextInputControllerProps<T>) => import('react').JSX.Element;
export default TextInputController;
