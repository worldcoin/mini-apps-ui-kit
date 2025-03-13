import type { Meta, StoryObj } from "@storybook/react";
import { toast } from "sonner";

import { Toaster } from "../src/components/Toast/Toast";

const meta: Meta<typeof Toaster> = {
  title: "Components/Toast",
  component: Toaster,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Toaster>;

export const Default: Story = {
  render: () => {
    return (
      <>
        <Toaster />
        <button
          onClick={() => toast("Hello World!")}
          className="px-4 py-2 bg-primary text-primary-foreground rounded-md"
        >
          Show Toast
        </button>
      </>
    );
  },
};
