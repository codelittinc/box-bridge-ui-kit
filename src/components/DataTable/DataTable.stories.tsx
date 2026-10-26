import type { Meta, StoryObj } from "@storybook/react-vite";
import { useEffect, useState } from "react";
import DataTable from "./DataTable";
import { MuiCheckbox } from "../MuiCheckbox";
import { IconButton } from "../IconButton";
import { MoreHorizIcon } from "../icons";

const meta: Meta<typeof DataTable> = {
  title: "Components/Data/DataTable",
  component: DataTable,
};
export default meta;

type Story = StoryObj<typeof DataTable>;

type SampleRow = {
  id: string;
  name: string;
  email: string;
  status: string;
};

const sampleData: SampleRow[] = [
  { id: "1", name: "Alice", email: "alice@example.com", status: "Approved" },
  { id: "2", name: "Bob", email: "bob@example.com", status: "Pending" },
  { id: "3", name: "Charlie", email: "charlie@example.com", status: "Declined" },
  { id: "4", name: "Diana", email: "diana@example.com", status: "Approved" },
  { id: "5", name: "Eve", email: "eve@example.com", status: "Pending" },
];

export const Default: Story = {
  args: {
    title: "Users",
    columns: [
      { header: "Name", name: "name" },
      { header: "Email", name: "email" },
      { header: "Status", name: "status" },
    ],
    pagination: { entries: sampleData, totalCount: 5, limit: 10 },
  },
};

export const Loading: Story = {
  args: {
    columns: [{ header: "Name", name: "name" }],
    pagination: { entries: [], totalCount: 0 },
    isLoading: true,
  },
};

export const Empty: Story = {
  args: {
    columns: [{ header: "Name", name: "name" }],
    pagination: { entries: [], totalCount: 0 },
    emptyTableMessage: "No users found",
  },
};

export const WithSelectedRows: Story = {
  args: {
    columns: [
      { header: "Name", name: "name" },
      { header: "Email", name: "email" },
    ],
    pagination: { entries: sampleData, totalCount: 5, limit: 10 },
    selectedRows: ["1", "3"],
  },
};

export const WithPagination: Story = {
  args: {
    columns: [
      { header: "Name", name: "name" },
      { header: "Email", name: "email" },
    ],
    pagination: { entries: sampleData.slice(0, 2), totalCount: 5, limit: 2 },
    onPageChange: (e) => console.log("Page:", e.selected),
  },
};

const PAGE_SIZE = 3;

// The kit does not listen for keys; the app owns them. This story wires j/k,
// x and [ ] locally to show the controlled active row.
const ActiveRowDemo = () => {
  const [page, setPage] = useState(0);
  const [activeRowIndex, setActiveRowIndex] = useState<number | null>(null);
  const [selected, setSelected] = useState<string[]>([]);
  const entries = sampleData.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE);
  const pageCount = Math.ceil(sampleData.length / PAGE_SIZE);

  const toggle = (id: string) =>
    setSelected((ids) => (ids.includes(id) ? ids.filter((i) => i !== id) : [...ids, id]));

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const last = entries.length - 1;
      if (event.key === "j") setActiveRowIndex((i) => (i == null ? 0 : Math.min(i + 1, last)));
      if (event.key === "k") setActiveRowIndex((i) => (i == null ? 0 : Math.max(i - 1, 0)));
      if (event.key === "x" && activeRowIndex != null) toggle(entries[activeRowIndex].id);
      const nextPage = event.key === "]" ? page + 1 : event.key === "[" ? page - 1 : page;
      if (nextPage !== page && nextPage >= 0 && nextPage < pageCount) {
        setPage(nextPage);
        if (activeRowIndex != null) setActiveRowIndex(0);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeRowIndex, entries, page, pageCount]);

  return (
    <DataTable<SampleRow>
      title="Users"
      columns={[
        {
          header: "",
          name: "id",
          render: (_, row) => (
            <MuiCheckbox
              checked={selected.includes(row.id)}
              onChange={() => toggle(row.id)}
              slotProps={{ input: { "aria-label": `Select ${row.name}` } }}
            />
          ),
        },
        { header: "Name", name: "name" },
        { header: "Email", name: "email" },
        {
          header: "",
          name: "actions",
          justify: "end",
          render: (_, row) => (
            <IconButton aria-label={`Actions for ${row.name}`} size="small">
              <MoreHorizIcon fontSize="small" />
            </IconButton>
          ),
        },
      ]}
      pagination={{ entries, totalCount: sampleData.length, limit: PAGE_SIZE }}
      selectedPage={page}
      onPageChange={({ selected: next }) => setPage(next)}
      activeRowIndex={activeRowIndex}
      onActiveRowChange={setActiveRowIndex}
      getRowId={(row) => row.id}
      getRowProps={(_, __, { isActive }) => ({
        "data-testid": isActive ? "data-table-active-row" : undefined,
      })}
      selectedRows={selected}
      pageStatusLabel={`Page ${page + 1} of ${pageCount}`}
    />
  );
};

export const ActiveRow: Story = {
  render: () => <ActiveRowDemo />,
};

export const ActiveAndSelectedRows: Story = {
  args: {
    title: "Users",
    columns: [
      { header: "Name", name: "name" },
      { header: "Email", name: "email" },
    ],
    pagination: { entries: sampleData, totalCount: 5, limit: 10 },
    activeRowIndex: 1,
    selectedRows: ["2", "3"],
  },
};
