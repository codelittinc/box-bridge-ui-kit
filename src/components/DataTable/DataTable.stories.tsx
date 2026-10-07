import type { Meta, StoryObj } from "@storybook/react-vite";
import DataTable from "./DataTable";

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
