import type { Meta, StoryObj } from "@storybook/react";
import { useForm } from "react-hook-form";
import SelectController from "./SelectController";

const meta: Meta<typeof SelectController> = {
  title: "Components/Form/SelectController",
  component: SelectController,
};
export default meta;

type Story = StoryObj<typeof SelectController>;

export const Default: Story = {
  render: () => {
    const { control } = useForm({ defaultValues: { role: "" } });
    return (
      <SelectController
        control={control}
        name="role"
        fieldTitle="Role"
        options={[
          { value: "admin", label: "Admin" },
          { value: "editor", label: "Editor" },
          { value: "viewer", label: "Viewer" },
        ]}
      />
    );
  },
};
