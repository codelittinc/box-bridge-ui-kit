import React from "react";
import usePagination from "@mui/material/usePagination";
import classNames from "classnames";

type Props = {
  pageCount: number;
  selectedPage: number;
  onPageChange?: (event: { selected: number }) => void;
};

const DataTablePagination = ({ pageCount, selectedPage, onPageChange }: Props) => {
  const { items } = usePagination({
    count: pageCount,
    // DataTable's public API uses zero-based page indexes.
    page: selectedPage + 1,
    onChange: (_, page) => onPageChange?.({ selected: page - 1 }),
  });

  return (
    <nav aria-label="Pagination">
      <ul className="box-bridge-pagination" role="list">
        {items.map(({ type, page, selected, ...buttonProps }) => {
          const isBreak = type === "start-ellipsis" || type === "end-ellipsis";
          const label = type === "previous"
            ? "Previous page"
            : type === "next" ? "Next page" : `Page ${page}`;

          return (
            <li
              key={`${type}-${page}`}
              className={classNames(type, {
                selected,
                disabled: buttonProps.disabled,
                break: isBreak,
              })}
              aria-hidden={isBreak ? true : undefined}
            >
              {isBreak ? (
                <span>…</span>
              ) : (
                <button
                  {...buttonProps}
                  type="button"
                  aria-label={label}
                  aria-current={selected ? "page" : undefined}
                >
                  {type === "previous" ? "< previous" : type === "next" ? "next >" : page}
                </button>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default DataTablePagination;
