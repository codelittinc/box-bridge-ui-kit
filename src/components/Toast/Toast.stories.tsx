import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import Toast from "./Toast";
import Button from "../Button/Button";

const meta: Meta<typeof Toast> = {
  title: "Components/Feedback/Toast",
  component: Toast,
};
export default meta;

type Story = StoryObj<typeof Toast>;

export const Info: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <div>
        <Button onClick={() => setOpen(true)}>Show Info Toast</Button>
        <Toast open={open} onClose={() => setOpen(false)} title="Info" message="This is an informational message." severity="info" />
      </div>
    );
  },
};

export const Success: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <div>
        <Button onClick={() => setOpen(true)}>Show Success Toast</Button>
        <Toast open={open} onClose={() => setOpen(false)} title="Success" message="Operation completed successfully." severity="success" />
      </div>
    );
  },
};

export const Error: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <div>
        <Button onClick={() => setOpen(true)}>Show Error Toast</Button>
        <Toast open={open} onClose={() => setOpen(false)} title="Error" message="Something went wrong." severity="error" />
      </div>
    );
  },
};

export const Warning: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <div>
        <Button onClick={() => setOpen(true)}>Show Warning Toast</Button>
        <Toast open={open} onClose={() => setOpen(false)} title="Warning" message="Please review your input." severity="warning" />
      </div>
    );
  },
};
