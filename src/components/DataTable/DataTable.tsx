import React from "react";
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
import ReactPaginate from "react-paginate";
import { LoadingContent } from "../LoadingContent";
import { EmptyContent } from "../EmptyContent";
import styles from "./styles.module.scss";
import "./pagination.css";

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
  onPageChange?: (event: { selected: number }) => void;
  onRowHover?: (row: T | undefined) => void;
  pagination: ItemsPagination<T>;
  selectedPage?: number;
  selectedRows?: string[];
  title?: string;
};

const DataTable = <T extends Record<string, unknown>>({
  columns,
  emptyTableMessage = "No data available",
  isLoading = false,
  onPageChange,
  onRowHover,
  pagination,
  selectedPage = 0,
  selectedRows,
  title,
}: DataTableProps<T>) => {
  const entries = pagination?.entries || [];
  const pageCount = pagination?.limit
    ? Math.ceil(pagination.totalCount / pagination.limit)
    : 1;

  if (isLoading) {
    return <LoadingContent />;
  } else if (pagination?.totalCount === 0) {
    return <EmptyContent isVisible message={emptyTableMessage} />;
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
      <Typography color="text.secondary" variant="body2">
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
    <Box className={styles.container}>
      <Box className={styles.table}>
        {title && <Typography className={styles.title}>{title}</Typography>}

        <TableContainer
          component={Paper}
          elevation={0}
          className={styles["table-container"]}
        >
          <Table aria-label="data table" size="medium">
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
                const isRowActive = selectedRows?.includes(
                  (row as unknown as { id: string }).id
                );

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
                    key={rowIndex}
                    onMouseOver={() => onRowHover?.(row)}
                    onMouseLeave={() => onRowHover?.(undefined)}
                    className={isRowActive ? styles["table-row-active"] : ""}
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
          <ReactPaginate
            breakLabel="..."
            nextLabel="next >"
            onPageChange={onPageChange}
            forcePage={selectedPage}
            disableInitialCallback={true}
            pageCount={pageCount}
            previousLabel="< previous"
          />
        )}
      </Box>
    </Box>
  );
};

export default DataTable;
