import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import Drawer from "./Drawer";
import Button from "../Button/Button";

const meta: Meta<typeof Drawer> = {
  title: "Components/Feedback/Drawer",
  component: Drawer,
};
export default meta;

type Story = StoryObj<typeof Drawer>;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <div>
        <Button onClick={() => setOpen(true)}>Open Drawer</Button>
        <Drawer
          isOpen={open}
          onClose={() => setOpen(false)}
          onSave={() => { alert("Saved!"); setOpen(false); }}
          onCancel={() => setOpen(false)}
          headerTitle="Edit Item"
          saveLabel="Save Changes"
          cancelLabel="Discard"
        >
          <p>Drawer content goes here.</p>
        </Drawer>
      </div>
    );
  },
};
