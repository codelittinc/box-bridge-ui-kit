import { default as React } from 'react';
type Props = {
    pageCount: number;
    selectedPage: number;
    onPageChange?: (event: {
        selected: number;
    }) => void;
};
declare const DataTablePagination: ({ pageCount, selectedPage, onPageChange }: Props) => React.JSX.Element;
export default DataTablePagination;
