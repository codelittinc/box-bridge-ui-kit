import type { Meta, StoryObj } from "@storybook/react-vite";
import Kbd from "./Kbd";

const meta: Meta<typeof Kbd> = {
  title: "Components/Kbd/Kbd",
  component: Kbd,
  argTypes: {
    size: { control: "select", options: ["small", "medium"] },
    tone: { control: "select", options: ["default", "inverse"] },
  },
};
export default meta;

type Story = StoryObj<typeof Kbd>;

export const Glyph: Story = { args: { children: "⌘", label: "Command" } };
export const Word: Story = { args: { children: "Enter", label: "Enter" } };
export const Small: Story = { args: { children: "j", label: "j", size: "small" } };

export const Inverse: Story = {
  args: { children: "⇧", label: "Shift", tone: "inverse" },
  decorators: [
    (Story) => (
      <div style={{ background: "#616161", padding: 12, display: "inline-block" }}>
        <Story />
      </div>
    ),
  ],
};

export const InRunningText: Story = {
  render: () => (
    <p style={{ fontFamily: "Inter, sans-serif", fontSize: 14 }}>
      Press <Kbd label="Question mark">?</Kbd> to show keyboard shortcuts.
    </p>
  ),
};
