import { Control, FieldValues, Path } from 'react-hook-form';
export type SelectControllerProps<T extends FieldValues> = {
    control: Control<T>;
    name: Path<T>;
    fieldTitle?: string;
    placeholder?: string;
    required?: boolean;
    options: Array<{
        value: string;
        label: string;
    }>;
};
declare const SelectController: <T extends FieldValues>({ control, name, fieldTitle, placeholder, required, options, }: SelectControllerProps<T>) => import('react').JSX.Element;
export default SelectController;
