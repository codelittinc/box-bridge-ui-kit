import type { Meta, StoryObj } from "@storybook/react";
import { useForm } from "react-hook-form";
import AutocompleteController from "./AutocompleteController";

const meta: Meta<typeof AutocompleteController> = {
  title: "Components/Form/AutocompleteController",
  component: AutocompleteController,
};
export default meta;

type Story = StoryObj<typeof AutocompleteController>;

export const Default: Story = {
  render: () => {
    const { control } = useForm({ defaultValues: { fruit: "" } });
    return (
      <div style={{ maxWidth: 300 }}>
        <AutocompleteController
          control={control}
          name="fruit"
          label="Fruit"
          options={[
            { label: "Apple", value: "apple" },
            { label: "Banana", value: "banana" },
            { label: "Cherry", value: "cherry" },
          ]}
        />
      </div>
    );
  },
};
