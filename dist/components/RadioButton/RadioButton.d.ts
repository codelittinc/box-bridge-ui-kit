export type RadioButtonProps = {
    label: string;
    checked: boolean;
    name: string;
    onChange: () => void;
};
declare const RadioButton: ({ label, name, checked, onChange }: RadioButtonProps) => import('react').JSX.Element;
export default RadioButton;
