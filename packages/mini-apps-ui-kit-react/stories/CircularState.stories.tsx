import type { Meta, StoryObj } from "@storybook/react";

import { CircularState } from "../src/components/CircularState/CircularState";

const meta = {
  title: "Components/CircularState",
  component: CircularState,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    value: {
      control: "select",
      options: ["success", "error", "warning", "pending", "critical"],
    },
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl"],
    },
  },
} satisfies Meta<typeof CircularState>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: "success",
    size: "md",
  },
};
