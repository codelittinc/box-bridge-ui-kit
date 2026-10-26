import { ReactNode } from 'react';
import { Control, FieldValues, Path, UseControllerProps } from 'react-hook-form';
import { SelectProps } from '@mui/material';
export type SelectControllerProps<T extends FieldValues> = {
    control: Control<T>;
    name: Path<T>;
    fieldTitle?: string;
    placeholder?: string;
    helperText?: ReactNode;
    rules?: UseControllerProps<T>["rules"];
    options: Array<{
        value: string;
        label: string;
    }>;
} & Omit<SelectProps<string>, "name" | "value" | "defaultValue" | "onChange">;
declare const SelectController: <T extends FieldValues>({ control, name, fieldTitle, placeholder, required, options, helperText, rules, id: suppliedId, inputRef, onBlur, disabled, error: suppliedError, ...rest }: SelectControllerProps<T>) => import('react').JSX.Element;
export default SelectController;
