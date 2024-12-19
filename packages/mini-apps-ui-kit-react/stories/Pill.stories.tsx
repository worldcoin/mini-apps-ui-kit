import type { Meta, StoryObj } from "@storybook/react";

import Pill from "../src/components/Pill/Pill";

const meta: Meta<typeof Pill> = {
  title: "components/Pill",
  component: Pill,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    checked: {
      control: "boolean",
    },
    asChild: {
      control: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Pill Label",
    checked: false,
  },
};
