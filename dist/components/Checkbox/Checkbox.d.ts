import { IconKey } from '../Icon';
export type CheckboxProps = {
    label: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
    iconKey?: IconKey;
};
declare const Checkbox: ({ label, checked, onChange, iconKey }: CheckboxProps) => import("react/jsx-runtime").JSX.Element;
export default Checkbox;
