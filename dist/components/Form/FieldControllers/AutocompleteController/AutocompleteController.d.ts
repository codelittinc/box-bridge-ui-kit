import { Control, FieldValues, Path } from 'react-hook-form';
export type AutocompleteControllerProps<T extends FieldValues> = {
    [key: string]: any;
    control: Control<T>;
    label: string;
    name: Path<T>;
    options: {
        label: string;
        value: number | string;
    }[];
    required?: boolean;
    withObjectValue?: boolean;
};
declare const AutocompleteController: <T extends FieldValues>({ name, control, required, options, withObjectValue, ...rest }: AutocompleteControllerProps<T>) => import('react').JSX.Element;
export default AutocompleteController;
