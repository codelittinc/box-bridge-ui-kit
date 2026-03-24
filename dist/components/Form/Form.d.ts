import { default as React } from 'react';
export type FormProps = {
    children?: React.ReactNode;
    customSaveButtonText?: string;
    disabled?: boolean;
    onCancel?: () => void;
    onCancelText?: string;
    onSave?: (e: React.FormEvent) => void;
};
declare function Form({ children, customSaveButtonText, disabled, onCancel, onCancelText, onSave, }: FormProps): React.ReactElement;
export default Form;
