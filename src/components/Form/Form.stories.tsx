import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import Form from "./Form";
import { TextField } from "../TextField";
import { Modal } from "../Modal";

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

// ⌘/Ctrl+Enter in any field submits. The save is held "pending" for 1.5s and
// the form is disabled meanwhile, so repeat presses do nothing.
const ModEnterSubmitDemo = () => {
  const [saves, setSaves] = useState(0);
  const [isPending, setIsPending] = useState(false);

  return (
    <Form
      disabled={isPending}
      onSave={() => {
        setSaves((count) => count + 1);
        setIsPending(true);
        setTimeout(() => setIsPending(false), 1500);
      }}
    >
      <TextField
        label="Folder name"
        required
        fullWidth
        slotProps={{ htmlInput: { "data-testid": "form-name-input" } }}
      />
      <TextField label="Notes" multiline minRows={2} fullWidth sx={{ mt: 2 }} />
      <p data-testid="form-save-count">Saved {saves} times{isPending ? " (pending)" : ""}</p>
    </Form>
  );
};

export const ModEnterSubmit: Story = {
  render: () => <ModEnterSubmitDemo />,
};

// A Modal rendered inside a Form's children is portaled out of the <form>.
// ⌘/Ctrl+Enter in its field must not submit the outer Form.
const ModalInsideFormDemo = () => {
  const [saves, setSaves] = useState(0);

  return (
    <Form onSave={() => setSaves((count) => count + 1)}>
      <TextField label="Outer field" fullWidth />
      <p data-testid="form-save-count">Saved {saves} times</p>
      <Modal open onClose={() => {}} title="Nested dialog">
        <TextField
          label="Dialog field"
          fullWidth
          slotProps={{ htmlInput: { "data-testid": "nested-dialog-input" } }}
        />
      </Modal>
    </Form>
  );
};

export const ModalInsideForm: Story = {
  render: () => <ModalInsideFormDemo />,
};
