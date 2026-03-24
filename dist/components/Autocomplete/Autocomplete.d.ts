export interface AutocompleteProps {
    multiple?: boolean;
    onChange: (value: any) => void;
    options: {
        label: string;
        value: number | string;
    }[];
    placeholder?: string;
    value?: any;
}
declare const Autocomplete: import('react').ForwardRefExoticComponent<AutocompleteProps & import('react').RefAttributes<HTMLDivElement>>;
export default Autocomplete;
