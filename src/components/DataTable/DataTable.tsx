import React, { useLayoutEffect, useRef } from "react";
import classNames from "classnames";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Paper,
} from "@mui/material";
import { visuallyHidden } from "@mui/utils";
import DataTablePagination from "./DataTablePagination";
import { LoadingContent } from "../LoadingContent";
import { EmptyContent } from "../EmptyContent";
import styles from "./styles.module.scss";
import "./pagination.css";

export type ItemsPagination<T> = {
  entries: T[];
  totalCount: number;
  limit?: number;
};

const compose =
  <E,>(...handlers: (((event: E) => void) | undefined)[]) =>
  (event: E) =>
    handlers.forEach((handler) => handler?.(event));

export type ColumnConfiguration<T> = {
  header: string;
  icon?: React.ReactNode;
  justify?: "start" | "center" | "end";
  name: keyof T | string;
  render?: (value: T[keyof T], row: T) => React.ReactNode | string;
};

export type DataTableRowState = {
  isActive: boolean;
  isSelected: boolean;
};

export type DataTableRowProps = React.HTMLAttributes<HTMLTableRowElement> &
  Record<`data-${string}`, string | undefined>;

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
  onPageChange?: (event: { selected: number }) => void;
  onRowHover?: (row: T | undefined) => void;
  /** Already localized, e.g. "Page 2 of 5". Announced politely when it changes. */
  pageStatusLabel?: string;
  pagination: ItemsPagination<T>;
  selectedPage?: number;
  selectedRows?: string[];
  title?: string;
};

const DataTable = <T extends Record<string, unknown>>({
  activeRowIndex,
  "aria-label": ariaLabel,
  columns,
  emptyTableMessage = "No data available",
  getRowId,
  getRowProps,
  isLoading = false,
  onActiveRowChange,
  onPageChange,
  onRowHover,
  pageStatusLabel,
  pagination,
  selectedPage = 0,
  selectedRows,
  title,
}: DataTableProps<T>) => {
  const tableRef = useRef<HTMLTableElement>(null);
  const previousActiveRowIndexRef = useRef(activeRowIndex);
  // The row whose focus already reported this pointer interaction, so the
  // click that follows it does not report the same row again.
  const reportedOnFocusRef = useRef<number | null>(null);
  const entries = pagination?.entries || [];
  const pageCount = pagination?.limit
    ? Math.ceil(pagination.totalCount / pagination.limit)
    : 1;
  const hasRovingFocus = activeRowIndex !== undefined;
  const tableName = ariaLabel ?? title;
  // The active row is the Tab stop; with none, or one past the end of this
  // page, the first row is.
  const tabStopIndex =
    activeRowIndex != null && activeRowIndex >= 0 && activeRowIndex < entries.length
      ? activeRowIndex
      : 0;
  const activeRow = activeRowIndex == null ? undefined : entries[activeRowIndex];
  const activeRowId =
    activeRow && activeRowIndex != null ? getRowId?.(activeRow, activeRowIndex) : undefined;

  // Move DOM focus with the active row when focus is already in the table, or
  // when nothing has focus and the app moved the active row (e.g. `j` pressed
  // on the page). Mounting, loading and refetches that only change the row id
  // never take focus or scroll; neither does anything while a field, a menu or
  // a control inside the active row has focus.
  useLayoutEffect(() => {
    const indexChanged = previousActiveRowIndexRef.current !== activeRowIndex;
    if (isLoading) return;
    previousActiveRowIndexRef.current = activeRowIndex;
    if (activeRowIndex == null) return;
    const table = tableRef.current;
    const row = table?.tBodies[0]?.rows[activeRowIndex];
    if (!table || !row) return;

    const focused = document.activeElement;
    const focusIsFree = !focused || focused === document.body;
    const focusIsInAnotherRow = !!focused && table.contains(focused) && !row.contains(focused);
    if (!focusIsInAnotherRow && !(focusIsFree && indexChanged)) return;

    row.focus({ preventScroll: true });
    row.scrollIntoView({ block: "nearest" });
  }, [activeRowIndex, activeRowId, isLoading]);

  // Rendered at the same position in every state so the live region survives
  // the loading state between pages and the change is announced.
  const pageStatus = pageStatusLabel !== undefined && (
    <Box
      aria-live="polite"
      sx={visuallyHidden}
      data-testid="data-table-page-status"
    >
      {pageStatusLabel}
    </Box>
  );

  if (isLoading) {
    return (
      <>
        {pageStatus}
        <LoadingContent />
      </>
    );
  } else if (pagination?.totalCount === 0) {
    return (
      <>
        {pageStatus}
        <EmptyContent isVisible message={emptyTableMessage} />
      </>
    );
  }

  const renderCell = (column: ColumnConfiguration<T>, row: T) => {
    if (column.render) {
      return (
        <div className={styles["cell-content"]}>
          {column.render(row[column.name as keyof T], row)}
        </div>
      );
    }

    return (
      <Typography variant="body2" sx={{
        color: "text.secondary"
      }}>
        {String(row[column.name as keyof T])}
      </Typography>
    );
  };

  const getAlign = (justify?: string) => {
    if (justify === "end") return "right" as const;
    if (justify === "center") return "center" as const;
    return "left" as const;
  };

  return (
    <>
      {pageStatus}
      <Box className={styles.container}>
        <Box className={styles.table}>
          {title && <Typography className={styles.title}>{title}</Typography>}

          <TableContainer
            component={Paper}
            elevation={0}
            className={styles["table-container"]}
            // A focusable scroll region for keyboard scrolling. In roving mode
            // the rows are the table's single Tab stop instead.
            tabIndex={hasRovingFocus ? undefined : 0}
            role="region"
            aria-label={tableName ? `${tableName} table` : "Data table"}
          >
            <Table ref={tableRef} aria-label={tableName ?? "data table"} size="medium">
              <TableHead>
                <TableRow>
                  {columns.map((column, index) => (
                    <TableCell
                      key={index}
                      align={getAlign(column.justify)}
                      className={styles["header-cell"]}
                    >
                      <Box className={styles["header-item"]}>
                        {column.header}
                        {column.icon && column.icon}
                      </Box>
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {entries.map((row, rowIndex) => {
                  const rowId = getRowId?.(row, rowIndex);
                  const isSelected = !!selectedRows?.includes(
                    rowId ?? (row as unknown as { id: string }).id
                  );
                  const isActive = rowIndex === activeRowIndex;
                  const {
                    className: rowClassName,
                    onClick: onRowClick,
                    onFocus: onRowFocus,
                    onMouseLeave: onRowMouseLeave,
                    onMouseOver: onRowMouseOver,
                    onPointerDown: onRowPointerDown,
                    ...rowProps
                  } = getRowProps?.(row, rowIndex, { isActive, isSelected }) ?? {};
                  const isTabStop = rowIndex === tabStopIndex;

                  const columnStatus = (name: string, rowData: T) => {
                    if (name === "status") {
                      const status = (rowData as unknown as { status?: string })
                        .status?.toLowerCase();
                      return status || "default";
                    }
                    return "default";
                  };

                  return (
                    <TableRow
                      {...rowProps}
                      key={rowId ?? rowIndex}
                      tabIndex={hasRovingFocus ? (isTabStop ? 0 : -1) : undefined}
                      aria-current={isActive ? "true" : undefined}
                      onPointerDown={compose(onRowPointerDown, () => {
                        reportedOnFocusRef.current = null;
                      })}
                      onFocus={compose(onRowFocus, (event) => {
                        if (event.target !== event.currentTarget) return;
                        reportedOnFocusRef.current = rowIndex;
                        onActiveRowChange?.(rowIndex);
                      })}
                      onClick={compose(onRowClick, () => {
                        const alreadyReported = reportedOnFocusRef.current === rowIndex;
                        reportedOnFocusRef.current = null;
                        if (!alreadyReported) onActiveRowChange?.(rowIndex);
                      })}
                      onMouseOver={compose(onRowMouseOver, () => onRowHover?.(row))}
                      onMouseLeave={compose(onRowMouseLeave, () => onRowHover?.(undefined))}
                      className={classNames(styles["table-row"], rowClassName, {
                        [styles["table-row-selected"]]: isSelected,
                        [styles["table-row-current"]]: isActive,
                      })}
                    >
                      {columns.map((column, colIndex) => (
                        <TableCell
                          align={getAlign(column.justify)}
                          key={colIndex}
                        >
                          <Box
                            className={
                              styles[
                                `body-item-${columnStatus(column.name as string, row)}`
                              ]
                            }
                          >
                            {renderCell(column, row as T)}
                          </Box>
                        </TableCell>
                      ))}
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
          {pageCount > 1 && (
            <DataTablePagination
              onPageChange={onPageChange}
              selectedPage={selectedPage}
              pageCount={pageCount}
            />
          )}
        </Box>
      </Box>
    </>
  );
};

export default DataTable;
