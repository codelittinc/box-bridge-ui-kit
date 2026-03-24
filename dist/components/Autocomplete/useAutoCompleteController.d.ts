type Props = {
    options: {
        label: string;
        value: number | string;
    }[];
    value?: any;
    onChange: (value: any) => void;
    ref: any;
};
type Response = {
    matches: any;
    open: boolean;
    setOpen: (value: boolean) => void;
    handleChange: (value: any) => void;
    setSearchValue: (value: string) => void;
};
declare const useAutoCompleteController: ({ options, value, onChange, ref, }: Props) => Response;
export default useAutoCompleteController;
