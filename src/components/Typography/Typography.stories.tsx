import type { Meta, StoryObj } from "@storybook/react-vite";
import Typography from "./Typography";

const meta: Meta<typeof Typography> = {
  title: "Components/Typography",
  component: Typography,
  argTypes: {
    variant: {
      control: "select",
      options: [
        "h1", "h2", "h3", "h4", "h5", "h6",
        "subtitle1", "subtitle2", "body1", "body2",
        "caption", "button", "overline",
      ],
    },
    state: { control: "select", options: [undefined, "error", "success", "warning"] },
    bold: { control: "boolean" },
  },
};
export default meta;

type Story = StoryObj<typeof Typography>;

export const Default: Story = { args: { children: "Default body text" } };
export const Heading: Story = { args: { variant: "h3", children: "Heading H3" } };
export const Bold: Story = { args: { bold: true, children: "Bold text" } };
export const Error: Story = { args: { state: "error", children: "Error text" } };
export const Success: Story = { args: { state: "success", children: "Success text" } };
export const Warning: Story = { args: { state: "warning", children: "Warning text" } };
