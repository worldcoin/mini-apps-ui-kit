import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import { BottomBar } from "../src/components/BottomBar/BottomBar";
import { Button } from "../src/components/Button/Button";
import { LiveFeedback } from "../src/components/LiveFeedback/LiveFeedback";

const meta: Meta<typeof LiveFeedback> = {
  title: "Components/LiveFeedback",
  component: LiveFeedback,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    state: {
      control: "select",
      options: ["pending", "success", "failed"],
    },
    children: {
      table: {
        disable: true,
      },
    },
    className: {
      table: {
        disable: true,
      },
    },
    label: {
      table: {
        disable: true,
      },
    },
  },
  tags: ["autodocs"],
  args: {
    label: {
      pending: "Pending",
      success: "Success",
      failed: "Failed",
    },
  },
  decorators: [
    (Story) => (
      <div className="w-80 flex justify-center">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof LiveFeedback>;

export const Default: Story = {
  render: (args) => {
    const [state, setState] = useState<"pending" | "success" | "failed" | undefined>(undefined);

    const handleClick = () => {
      setState("pending");

      // Simulate API call
      setTimeout(() => {
        // Randomly succeed or fail
        setState(Math.random() > 0.5 ? "success" : "failed");

        // Reset after 2 seconds
        setTimeout(() => {
          setState(undefined);
        }, 2000);
      }, 1500);
    };

    return (
      <LiveFeedback state={state} className="w-full" {...args}>
        <Button onClick={handleClick} fullWidth>
          Submit
        </Button>
      </LiveFeedback>
    );
  },
};

export const IconOnly: Story = {
  render: () => {
    const [state, setState] = useState<"pending" | "success" | "failed" | undefined>(undefined);

    const handleClick = () => {
      setState("pending");

      // Simulate API call
      setTimeout(() => {
        // Randomly succeed or fail
        setState(Math.random() > 0.5 ? "success" : "failed");

        // Reset after 2 seconds
        setTimeout(() => {
          setState(undefined);
        }, 2000);
      }, 1500);
    };

    return (
      <LiveFeedback state={state} className="w-full">
        <Button onClick={handleClick} fullWidth>
          Submit
        </Button>
      </LiveFeedback>
    );
  },
};

export const WithBottomBar: Story = {
  render: () => {
    const [state, setState] = useState<"pending" | "success" | "failed" | undefined>(undefined);

    const handleSubmit = () => {
      setState("pending");

      // Simulate API call
      setTimeout(() => {
        setState("success");

        // Reset after 2 seconds
        setTimeout(() => {
          setState(undefined);
        }, 2000);
      }, 1500);
    };

    const handleCancel = () => {
      setState("failed");

      // Reset after 2 seconds
      setTimeout(() => {
        setState(undefined);
      }, 2000);
    };

    return (
      <LiveFeedback state={state} className="w-full">
        <BottomBar>
          <Button fullWidth variant="secondary" onClick={handleCancel}>
            Cancel
          </Button>
          <Button fullWidth onClick={handleSubmit}>
            Submit
          </Button>
        </BottomBar>
      </LiveFeedback>
    );
  },
};
