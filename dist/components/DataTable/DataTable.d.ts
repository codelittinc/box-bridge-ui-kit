import { default as React } from 'react';
export type ItemsPagination<T> = {
    entries: T[];
    totalCount: number;
    limit?: number;
};
export type ColumnConfiguration<T> = {
    header: string;
    /** The consumer sorts the full result set before paginating. */
    onSort?: () => void;
    /** Only the currently sorted column has a direction. */
    sortDirection?: "asc" | "desc";
    icon?: React.ReactNode;
    justify?: "start" | "center" | "end";
    name: keyof T | string;
    render?: (value: T[keyof T], row: T) => React.ReactNode | string;
};
export type DataTableRowState = {
    isActive: boolean;
    isSelected: boolean;
};
export type DataTableRowProps = React.HTMLAttributes<HTMLTableRowElement> & Record<`data-${string}`, string | undefined>;
export type DataTableProps<T> = {
    /**
     * The keyboard-current row on this page. Passing it (even `null`) turns on
     * roving focus: the table becomes one Tab stop and the active row gets the
     * focus ring and DOM focus.
     */
    activeRowIndex?: number | null;
    "aria-label"?: string;
    columns: ColumnConfiguration<T>[];
    emptyTableMessage?: string;
    /**
     * Stable row identity, used as the React key and matched against
     * `selectedRows`. Without it rows are keyed by index and selected by `row.id`.
     */
    getRowId?: (row: T, index: number) => string;
    /** Extra attributes for a body row. Kit-managed attributes take precedence. */
    getRowProps?: (row: T, index: number, state: DataTableRowState) => DataTableRowProps;
    isLoading?: boolean;
    /** A row was focused (Tab into the table) or clicked. */
    onActiveRowChange?: (index: number | null) => void;
    onPageChange?: (event: {
        selected: number;
    }) => void;
    onRowHover?: (row: T | undefined) => void;
    /** Already localized, e.g. "Page 2 of 5". Announced politely when it changes. */
    pageStatusLabel?: string;
    pagination: ItemsPagination<T>;
    selectedPage?: number;
    selectedRows?: string[];
    title?: string;
};
declare const DataTable: <T extends Record<string, unknown>>({ activeRowIndex, "aria-label": ariaLabel, columns, emptyTableMessage, getRowId, getRowProps, isLoading, onActiveRowChange, onPageChange, onRowHover, pageStatusLabel, pagination, selectedPage, selectedRows, title, }: DataTableProps<T>) => React.JSX.Element;
export default DataTable;
