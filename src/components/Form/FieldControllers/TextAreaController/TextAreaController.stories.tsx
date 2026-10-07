import type { Meta, StoryObj } from "@storybook/react-vite";
import { useForm } from "react-hook-form";
import TextAreaController from "./TextAreaController";

const meta: Meta<typeof TextAreaController> = {
  title: "Components/Form/TextAreaController",
  component: TextAreaController,
};
export default meta;

type Story = StoryObj<typeof TextAreaController>;

export const Default: Story = {
  render: () => {
    const { control } = useForm({ defaultValues: { description: "" } });
    return <TextAreaController control={control} name="description" fieldTitle="Description" placeholder="Enter description..." />;
  },
};
