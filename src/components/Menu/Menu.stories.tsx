import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import Menu from "./Menu";
import Button from "../Button/Button";

const meta: Meta<typeof Menu> = {
  title: "Components/Menu",
  component: Menu,
};
export default meta;

type Story = StoryObj<typeof Menu>;

export const Default: Story = {
  render: () => {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    return (
      <div>
        <Button onClick={(e) => setAnchorEl(e.currentTarget)}>Open Menu</Button>
        <Menu
          anchorEl={anchorEl}
          onClose={() => setAnchorEl(null)}
          menuItems={[
            { label: "Edit", onClick: () => console.log("Edit") },
            { label: "Delete", onClick: () => console.log("Delete") },
            { label: "Share", onClick: () => console.log("Share") },
          ]}
        />
      </div>
    );
  },
};
