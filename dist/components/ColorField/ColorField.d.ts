import { ComponentPropsWithoutRef } from 'react';
export type ColorFieldProps = Omit<ComponentPropsWithoutRef<"input">, "type" | "children" | "value" | "defaultValue"> & {
    label: string;
    value: string;
};
declare const ColorField: import('react').ForwardRefExoticComponent<Omit<Omit<import('react').DetailedHTMLProps<import('react').InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "ref">, "children" | "defaultValue" | "type" | "value"> & {
    label: string;
    value: string;
} & import('react').RefAttributes<HTMLInputElement>>;
export default ColorField;
