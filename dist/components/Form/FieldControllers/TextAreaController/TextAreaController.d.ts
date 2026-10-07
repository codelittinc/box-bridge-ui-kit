import { Control, FieldValues, Path } from 'react-hook-form';
export type TextAreaControllerProps<T extends FieldValues> = {
    control: Control<T>;
    name: Path<T>;
    required?: boolean;
    fieldTitle?: string;
    placeholder?: string;
};
declare const TextAreaController: <T extends FieldValues>({ name, control, required, fieldTitle, placeholder, ...rest }: TextAreaControllerProps<T>) => import('react').JSX.Element;
export default TextAreaController;
