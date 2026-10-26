import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import Modal from "./Modal";
import { Button, ButtonCategory } from "../Button";
import { Form } from "../Form";
import { TextField } from "../TextField";

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

export const WithActions: Story = {
  render: () => {
    const [open, setOpen] = useState(true);
    return (
      <div>
        <Button onClick={() => setOpen(true)}>Open Modal</Button>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          title="Keyboard shortcuts"
          maxWidth="560px"
          data-testid="shortcuts-help-modal"
          actions={
            <Button category={ButtonCategory.outlined} onClick={() => setOpen(false)}>
              Close
            </Button>
          }
        >
          <p>Press ? at any time to show this list.</p>
        </Modal>
      </div>
    );
  },
};

export const WithForm: Story = {
  render: () => {
    const [open, setOpen] = useState(true);
    return (
      <div>
        <Button onClick={() => setOpen(true)}>Open Modal</Button>
        <Modal open={open} onClose={() => setOpen(false)} title="Create folder">
          <Form onSave={() => setOpen(false)} onCancel={() => setOpen(false)}>
            <TextField label="Folder name" defaultValue="Quarterly reports" fullWidth />
          </Form>
        </Modal>
      </div>
    );
  },
};
