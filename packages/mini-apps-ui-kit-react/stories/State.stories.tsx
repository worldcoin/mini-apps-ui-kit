import type { Meta, StoryObj } from "@storybook/react";

import { State } from "../src/components/State/State";

const meta = {
  title: "Components/State",
  component: State,
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
} satisfies Meta<typeof State>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: "success",
    size: "md",
  },
};
