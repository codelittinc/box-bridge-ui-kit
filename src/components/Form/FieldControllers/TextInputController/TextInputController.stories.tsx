import type { Meta, StoryObj } from "@storybook/react-vite";
import { useForm } from "react-hook-form";
import TextInputController from "./TextInputController";

const meta: Meta<typeof TextInputController> = {
  title: "Components/Form/TextInputController",
  component: TextInputController,
  decorators: [
    (Story) => {
      const { control } = useForm({ defaultValues: { example: "" } });
      return <Story args={{ ...Story.args, control, name: "example" } as any} />;
    },
  ],
};
export default meta;

type Story = StoryObj<typeof TextInputController>;

export const Default: Story = {
  render: () => {
    const { control } = useForm({ defaultValues: { name: "" } });
    return <TextInputController control={control} name="name" fieldTitle="Full Name" placeholder="Enter your name" />;
  },
};

export const Required: Story = {
  render: () => {
    const { control } = useForm({ defaultValues: { email: "" } });
    return <TextInputController control={control} name="email" fieldTitle="Email" placeholder="Enter email" required type="email" />;
  },
};

export const Disabled: Story = {
  render: () => {
    const { control } = useForm({ defaultValues: { locked: "Cannot edit" } });
    return <TextInputController control={control} name="locked" fieldTitle="Locked Field" disabled />;
  },
};
