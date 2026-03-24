import type { Meta, StoryObj } from "@storybook/react";
import { useForm } from "react-hook-form";
import FileInputController from "./FileInputController";

const meta: Meta<typeof FileInputController> = {
  title: "Components/Form/FileInputController",
  component: FileInputController,
};
export default meta;

type Story = StoryObj<typeof FileInputController>;

export const Default: Story = {
  render: () => {
    const { control } = useForm({ defaultValues: { file: null } });
    return <FileInputController control={control} name="file" fieldTitle="Upload File" accept="image/*" />;
  },
};

export const WithExistingFile: Story = {
  render: () => {
    const { control } = useForm({ defaultValues: { file: null } });
    return <FileInputController control={control} name="file" fieldTitle="Upload File" existingFileName="report.pdf" />;
  },
};
