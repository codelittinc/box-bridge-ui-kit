import type { Meta, StoryObj } from "@storybook/react-vite";
import Breadcrumb from "./Breadcrumb";

const meta: Meta<typeof Breadcrumb> = {
  title: "Components/Data/Breadcrumb",
  component: Breadcrumb,
};
export default meta;

type Story = StoryObj<typeof Breadcrumb>;

export const Default: Story = {
  args: {
    breadcrumbs: [
      { id: "1", name: "Home" },
      { id: "2", name: "Documents" },
      { id: "3", name: "Reports" },
    ],
    onBreadcrumbClick: (id, index) => console.log("Clicked:", id, index),
  },
};

export const Single: Story = {
  args: {
    breadcrumbs: [{ id: "1", name: "Home" }],
    onBreadcrumbClick: () => {},
  },
};
