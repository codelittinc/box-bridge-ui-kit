import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import RadioButton from "./RadioButton";

const meta: Meta<typeof RadioButton> = {
  title: "Components/RadioButton",
  component: RadioButton,
};
export default meta;

type Story = StoryObj<typeof RadioButton>;

export const Default: Story = {
  args: { label: "Option A", name: "radio", checked: false },
};

export const Checked: Story = {
  args: { label: "Option A", name: "radio", checked: true },
};

export const Interactive: Story = {
  render: () => {
    const [selected, setSelected] = useState("a");
    return (
      <div>
        <RadioButton label="Option A" name="group" checked={selected === "a"} onChange={() => setSelected("a")} />
        <RadioButton label="Option B" name="group" checked={selected === "b"} onChange={() => setSelected("b")} />
      </div>
    );
  },
};
