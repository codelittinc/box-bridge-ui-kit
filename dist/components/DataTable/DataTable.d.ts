import { default as React } from 'react';
export type ItemsPagination<T> = {
    entries: T[];
    totalCount: number;
    limit?: number;
};
export type ColumnConfiguration<T> = {
    header: string;
    icon?: React.ReactNode;
    justify?: "start" | "center" | "end";
    name: keyof T | string;
    render?: (value: T[keyof T], row: T) => React.ReactNode | string;
};
export type DataTableProps<T> = {
    columns: ColumnConfiguration<T>[];
    emptyTableMessage?: string;
    isLoading?: boolean;
    onPageChange?: (event: {
        selected: number;
    }) => void;
    onRowHover?: (row: T | undefined) => void;
    pagination: ItemsPagination<T>;
    selectedPage?: number;
    selectedRows?: string[];
    title?: string;
};
declare const DataTable: <T extends Record<string, unknown>>({ columns, emptyTableMessage, isLoading, onPageChange, onRowHover, pagination, selectedPage, selectedRows, title, }: DataTableProps<T>) => import("react/jsx-runtime").JSX.Element;
export default DataTable;
