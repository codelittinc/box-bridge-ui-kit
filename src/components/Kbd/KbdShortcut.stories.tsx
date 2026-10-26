import type { Meta, StoryObj } from "@storybook/react-vite";
import KbdShortcut, { KbdKey } from "./KbdShortcut";
import { Tooltip } from "../Tooltip";
import { Button } from "../Button";

const meta: Meta<typeof KbdShortcut> = {
  title: "Components/Kbd/KbdShortcut",
  component: KbdShortcut,
  args: { isMac: true, thenLabel: "then", orLabel: "or" },
  argTypes: {
    size: { control: "select", options: ["small", "medium"] },
    tone: { control: "select", options: ["default", "inverse"] },
  },
};
export default meta;

type Story = StoryObj<typeof KbdShortcut>;

const key = (glyph: string, label = glyph): KbdKey => ({ glyph, label });
const command = key("⌘", "Command");
const control = key("Ctrl", "Control");
const option = key("⌥", "Option");
const up = key("↑", "Up arrow");

export const ComboMac: Story = {
  args: { shortcuts: [{ kind: "combo", keys: [command, key("A")] }] },
};

export const ComboOther: Story = {
  args: { isMac: false, shortcuts: [{ kind: "combo", keys: [control, key("A")] }] },
};

export const Sequence: Story = {
  args: { shortcuts: [{ kind: "sequence", keys: [key("g"), key("f")] }] },
};

export const Alternatives: Story = {
  args: {
    shortcuts: [
      { kind: "combo", keys: [key("j")] },
      { kind: "combo", keys: [key("↓", "Down arrow")] },
    ],
  },
};

export const AlternativesWithCombo: Story = {
  args: {
    shortcuts: [
      { kind: "combo", keys: [key("Esc", "Escape")] },
      { kind: "combo", keys: [option, up] },
    ],
  },
};

export const SpanishOther: Story = {
  args: {
    isMac: false,
    thenLabel: "luego",
    orLabel: "o",
    shortcuts: [
      { kind: "combo", keys: [key("Retroceso")] },
      { kind: "combo", keys: [key("Supr", "Suprimir")] },
    ],
  },
};

export const SmallInverseInTooltip: Story = {
  render: (args) => (
    <Tooltip
      open
      placement="bottom"
      title={
        <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
          Create folder
          <KbdShortcut {...args} size="small" tone="inverse" />
        </span>
      }
    >
      <span>
        <Button>Folder</Button>
      </span>
    </Tooltip>
  ),
  args: { shortcuts: [{ kind: "combo", keys: [key("⇧", "Shift"), key("N")] }] },
  decorators: [(Story) => <div style={{ padding: "8px 8px 64px" }}><Story /></div>],
};
