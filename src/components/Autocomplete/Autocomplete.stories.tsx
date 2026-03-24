import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import Autocomplete from "./Autocomplete";

const meta: Meta<typeof Autocomplete> = {
  title: "Components/Data/Autocomplete",
  component: Autocomplete,
};
export default meta;

type Story = StoryObj<typeof Autocomplete>;

const sampleOptions = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Cherry", value: "cherry" },
  { label: "Date", value: "date" },
  { label: "Elderberry", value: "elderberry" },
];

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState<string | undefined>(undefined);
    return (
      <div style={{ maxWidth: 300 }}>
        <Autocomplete
          options={sampleOptions}
          value={value}
          onChange={setValue}
          placeholder="Select a fruit"
        />
      </div>
    );
  },
};
