import type { Meta, StoryObj } from "@storybook/react-vite";
import { useForm } from "react-hook-form";
import RadioGroupController from "./RadioGroupController";

const meta: Meta<typeof RadioGroupController> = {
  title: "Components/Form/RadioGroupController",
  component: RadioGroupController,
};
export default meta;

type Story = StoryObj<typeof RadioGroupController>;

export const Default: Story = {
  render: () => {
    const { control } = useForm({ defaultValues: { preference: "" } });
    return (
      <RadioGroupController
        control={control}
        name="preference"
        fieldTitle="Notification Preference"
        options={[
          { value: "email", label: "Email" },
          { value: "sms", label: "SMS" },
          { value: "push", label: "Push Notification" },
        ]}
      />
    );
  },
};
