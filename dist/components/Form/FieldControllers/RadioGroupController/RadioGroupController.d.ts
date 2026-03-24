import { Control, FieldValues, Path } from 'react-hook-form';
export type RadioGroupControllerProps<T extends FieldValues> = {
    control: Control<T>;
    name: Path<T>;
    fieldTitle?: string;
    options: Array<{
        value: string;
        label: string;
    }>;
    onValueChange?: (value: string) => void;
};
declare const RadioGroupController: <T extends FieldValues>({ name, control, fieldTitle, options, onValueChange, }: RadioGroupControllerProps<T>) => import("react/jsx-runtime").JSX.Element;
export default RadioGroupController;
