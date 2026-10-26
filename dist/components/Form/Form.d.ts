import { default as React } from 'react';
export type FormProps = {
    children?: React.ReactNode;
    customSaveButtonText?: string;
    disabled?: boolean;
    onCancel?: () => void;
    onCancelText?: string;
    onSave?: (e: React.FormEvent) => void;
    /**
     * ⌘/Ctrl+Enter submits through the same path as the Save button. Ignored
     * while `disabled` (pass it while a submit is pending) and during IME
     * composition. Defaults to true.
     */
    submitOnModEnter?: boolean;
};
declare function Form({ children, customSaveButtonText, disabled, onCancel, onCancelText, onSave, submitOnModEnter, }: FormProps): React.ReactElement;
export default Form;
