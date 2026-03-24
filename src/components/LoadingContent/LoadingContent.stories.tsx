import type { Meta, StoryObj } from "@storybook/react";
import LoadingContent from "./LoadingContent";

const meta: Meta<typeof LoadingContent> = {
  title: "Components/LoadingContent",
  component: LoadingContent,
};
export default meta;

type Story = StoryObj<typeof LoadingContent>;

export const Default: Story = {};
