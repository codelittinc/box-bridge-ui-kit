import type { Meta, StoryObj } from "@storybook/react";
import Accordion from "./Accordion";

const meta: Meta<typeof Accordion> = {
  title: "Components/Accordion",
  component: Accordion,
};
export default meta;

type Story = StoryObj<typeof Accordion>;

export const Open: Story = {
  args: { title: "Section Title", defaultOpen: true, children: "Content goes here." },
};

export const Closed: Story = {
  args: { title: "Section Title", defaultOpen: false, children: "Content goes here." },
};

export const Multiple: Story = {
  render: () => (
    <div>
      <Accordion title="Section 1">First section content</Accordion>
      <Accordion title="Section 2">Second section content</Accordion>
      <Accordion title="Section 3" defaultOpen={false}>Third section content</Accordion>
    </div>
  ),
};
