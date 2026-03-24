import type { Meta, StoryObj } from "@storybook/react";
import Icon, { IconKey } from "./Icon";

const meta: Meta<typeof Icon> = {
  title: "Components/Icon",
  component: Icon,
  argTypes: {
    iconKey: { control: "select", options: Object.values(IconKey) },
    width: { control: "number" },
    height: { control: "number" },
  },
};
export default meta;

type Story = StoryObj<typeof Icon>;

export const Document: Story = { args: { iconKey: IconKey.DOCUMENT } };
export const Folder: Story = { args: { iconKey: IconKey.FOLDER } };
export const PDF: Story = { args: { iconKey: IconKey.PDF } };

export const AllIcons: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
      {Object.values(IconKey).map((key) => (
        <div key={key} style={{ textAlign: "center" }}>
          <Icon iconKey={key as IconKey} />
          <div style={{ fontSize: 11, marginTop: 4 }}>{key}</div>
        </div>
      ))}
    </div>
  ),
};
