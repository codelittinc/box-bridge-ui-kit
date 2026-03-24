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
    matches: {
        label: string;
        value: number | string;
    }[];
    open: boolean;
    setOpen: (value: boolean) => void;
    searchValue: string;
    setSearchValue: (value: string) => void;
    selectedLabel: string | undefined;
};
declare const useAutoCompleteController: ({ options, value, onChange, ref, }: Props) => Response;
export default useAutoCompleteController;
