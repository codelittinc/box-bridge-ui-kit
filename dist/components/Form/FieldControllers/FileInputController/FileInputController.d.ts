import { InputHTMLAttributes, Ref } from 'react';
import { Control, FieldValues, Path, UseControllerProps } from 'react-hook-form';
export type FileInputControllerProps<T extends FieldValues> = {
    control: Control<T>;
    name: Path<T>;
    fieldTitle?: string;
    existingFileName?: string;
    inputRef?: Ref<HTMLInputElement>;
    rules?: UseControllerProps<T>["rules"];
} & Omit<InputHTMLAttributes<HTMLInputElement>, "name" | "value" | "defaultValue" | "type">;
declare const FileInputController: <T extends FieldValues>({ name, control, required, fieldTitle, existingFileName, rules, id: suppliedId, inputRef, onChange, onBlur, ...rest }: FileInputControllerProps<T>) => import('react').JSX.Element;
export default FileInputController;
