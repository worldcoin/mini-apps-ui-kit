import { Button, TopBar } from "@/index";
import type { Meta, StoryObj } from "@storybook/react";

import { Toaster, useToast } from "../src/components/Toast";
import { ArrowLeft } from "./helpers/icons/ArrowLeft";

const ToastDemo = ({
  variant,
  title,
  duration,
}: {
  variant: "success" | "error";
  title: string;
  duration: number;
}) => {
  const defaultTitle = variant === "success" ? "Something went good" : "Something went wrong";
  const { toast } = useToast();
  return (
    <div
      style={{
        position: "relative",
        height: 300,
        width: 400,
      }}
    >
      <TopBar
        title="Toast"
        startAdornment={
          <Button variant="tertiary" size="icon">
            <ArrowLeft />
          </Button>
        }
      />
      <div className="flex justify-center items-center h-full">
        <Button
          variant="secondary"
          size="sm"
          onClick={() =>
            toast[variant]({
              title: title || defaultTitle,
              duration,
            })
          }
        >
          Show Toast
        </Button>
      </div>
      <Toaster />
    </div>
  );
};

const meta: Meta<typeof ToastDemo> = {
  title: "Components/Toast",
  component: ToastDemo,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Toast component for displaying temporary notifications. Supports success and error variants with customizable duration and title content.",
      },
    },
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
    title: {
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
    title: "",
    duration: 3000,
  },
};
