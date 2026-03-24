import type { Meta, StoryObj } from "@storybook/react";
import Button, { ButtonCategory, ButtonHeight } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    category: { control: "select", options: Object.values(ButtonCategory) },
    height: { control: "select", options: Object.values(ButtonHeight) },
    disabled: { control: "boolean" },
  },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = { args: { children: "Primary Button", category: ButtonCategory.primary } };
export const Secondary: Story = { args: { children: "Secondary", category: ButtonCategory.secondary } };
export const Outlined: Story = { args: { children: "Outlined", category: ButtonCategory.outlined } };
export const Text: Story = { args: { children: "Text Button", category: ButtonCategory.text } };
export const Small: Story = { args: { children: "Small", height: ButtonHeight.small } };
export const Medium: Story = { args: { children: "Medium", height: ButtonHeight.medium } };
export const Large: Story = { args: { children: "Large", height: ButtonHeight.large } };
export const Disabled: Story = { args: { children: "Disabled", disabled: true } };

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
      <Button category={ButtonCategory.primary}>Primary</Button>
      <Button category={ButtonCategory.secondary}>Secondary</Button>
      <Button category={ButtonCategory.outlined}>Outlined</Button>
      <Button category={ButtonCategory.text}>Text</Button>
      <Button disabled>Disabled</Button>
    </div>
  ),
};
