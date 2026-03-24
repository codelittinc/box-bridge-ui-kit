import type { Meta, StoryObj } from "@storybook/react";
import EmptyContent from "./EmptyContent";

const meta: Meta<typeof EmptyContent> = {
  title: "Components/EmptyContent",
  component: EmptyContent,
  argTypes: {
    isVisible: { control: "boolean" },
    message: { control: "text" },
  },
};
export default meta;

type Story = StoryObj<typeof EmptyContent>;

export const Visible: Story = { args: { isVisible: true, message: "No items found" } };
export const Hidden: Story = { args: { isVisible: false, message: "No items found" } };
