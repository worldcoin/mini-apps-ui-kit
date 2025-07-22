import { Button, TopBar } from "@/index";
import type { Meta, StoryObj } from "@storybook/react";

import { Toaster, useToast } from "../src/components/Toast";
import { ArrowLeft } from "./helpers/icons/ArrowLeft";

const ToastDemo = ({
  variant,
  title,
  description,
  action,
}: {
  variant: "success" | "error";
  title: string;
  description?: string;
  action?: {
    label: string;
    onClick: () => void;
  };
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
              description,
              action,
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
          "Toast component for displaying temporary notifications. Supports success and error variants with customizable title, description, and action content.",
      },
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["success", "error"],
      description: "Type of notification to show",
    },
    title: {
      control: "text",
      description: "Message to display in the toast",
    },
    description: {
      control: "text",
      description: "Optional description for drawer notifications",
    },
    action: {
      control: "object",
      description: "Optional action with label and onClick function",
    },
  },
};

export default meta;

type Story = StoryObj<typeof ToastDemo>;

export const Default: Story = {
  args: {
    variant: "success",
    title: "",
  },
};

export const WithDescription: Story = {
  args: {
    variant: "error",
    title: "Failed to save changes",
    description:
      "There was an error saving your changes. Please try again or contact support if the issue persists.",
  },
};

export const WithAction: Story = {
  args: {
    variant: "error",
    title: "Connection lost",
    description:
      "Your internet connection was interrupted. Check your network settings and try reconnecting.",
    action: {
      label: "Retry",
      onClick: () => {},
    },
  },
};
