import type { Meta, StoryObj } from "@storybook/react-vite";
import Form from "./Form";

const meta: Meta<typeof Form> = {
  title: "Components/Form/Form",
  component: Form,
};
export default meta;

type Story = StoryObj<typeof Form>;

export const Default: Story = {
  args: {
    children: <div style={{ padding: "16px 0" }}>Form fields go here</div>,
    onSave: () => alert("Saved!"),
    onCancel: () => alert("Cancelled!"),
  },
};

export const CustomLabels: Story = {
  args: {
    children: <div style={{ padding: "16px 0" }}>Form fields go here</div>,
    customSaveButtonText: "Submit",
    onCancelText: "Discard",
    onSave: () => alert("Submitted!"),
    onCancel: () => alert("Discarded!"),
  },
};

export const Disabled: Story = {
  args: {
    children: <div style={{ padding: "16px 0" }}>Form fields go here</div>,
    disabled: true,
    onSave: () => {},
  },
};
