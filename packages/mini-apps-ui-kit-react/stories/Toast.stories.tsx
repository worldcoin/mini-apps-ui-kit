import type { Meta, StoryObj } from "@storybook/react";

import { Toaster, useToast } from "../src/components/Toast";

const ToastDemo = ({
  variant,
  message,
  duration,
}: {
  variant: "success" | "error";
  message: string;
  duration: number;
}) => {
  const defaultMessage = variant === "success" ? "Something went good" : "Something went wrong";
  const { toast } = useToast();
  return (
    <div>
      <button
        onClick={() =>
          toast({
            variant,
            title: message || defaultMessage,
            duration,
          })
        }
        className="px-4 py-2 bg-primary text-primary-foreground rounded-md w-full"
      >
        Show Toast
      </button>
      <Toaster />
    </div>
  );
};

const meta: Meta<typeof ToastDemo> = {
  title: "Components/Toast",
  component: ToastDemo,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["success", "error"],
      description: "Type of notification to show",
    },
    duration: {
      control: "number",
      description: "Duration of the toast",
    },
    message: {
      control: "text",
      description: "Message to display in the toast",
    },
  },
};

export default meta;

type Story = StoryObj<typeof ToastDemo>;

export const Default: Story = {
  args: {
    variant: "success",
    message: "",
    duration: 3000,
  },
};
