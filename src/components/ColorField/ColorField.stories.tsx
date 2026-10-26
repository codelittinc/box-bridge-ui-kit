import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import ColorField from "./ColorField";

const meta: Meta<typeof ColorField> = {
  title: "Components/ColorField",
  component: ColorField,
};
export default meta;

type Story = StoryObj<typeof ColorField>;

export const Default: Story = {
  args: { label: "Primary", value: "#2463eb" },
};

export const Disabled: Story = {
  args: { label: "Primary", value: "#2463eb", disabled: true },
};

export const Interactive: Story = {
  render: () => {
    const [value, setValue] = useState("#2463eb");
    return <ColorField label="Primary" value={value} onChange={(event) => setValue(event.target.value)} />;
  },
};
