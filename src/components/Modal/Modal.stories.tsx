import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import Modal from "./Modal";
import { Button, ButtonCategory } from "../Button";

const meta: Meta<typeof Modal> = {
  title: "Components/Feedback/Modal",
  component: Modal,
};
export default meta;

type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <div>
        <Button onClick={() => setOpen(true)}>Open Modal</Button>
        <Modal open={open} onClose={() => setOpen(false)} title="Confirm Action">
          <p>Are you sure you want to proceed with this action?</p>
          <div style={{ display: "flex", gap: 8, justifyContent: "flex-end", marginTop: 16 }}>
            <Button category={ButtonCategory.outlined} onClick={() => setOpen(false)}>Cancel</Button>
            <Button onClick={() => setOpen(false)}>Confirm</Button>
          </div>
        </Modal>
      </div>
    );
  },
};
