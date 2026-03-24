import { Control, FieldValues, Path } from 'react-hook-form';
export type FileInputControllerProps<T extends FieldValues> = {
    control: Control<T>;
    name: Path<T>;
    required?: boolean;
    fieldTitle?: string;
    accept?: string;
    existingFileName?: string;
};
declare const FileInputController: <T extends FieldValues>({ name, control, required, fieldTitle, accept, existingFileName, }: FileInputControllerProps<T>) => import("react/jsx-runtime").JSX.Element;
export default FileInputController;
