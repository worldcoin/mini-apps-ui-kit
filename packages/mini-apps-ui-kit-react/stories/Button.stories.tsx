import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Button from "../src/components/Button";

const meta = {
  title: "Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "radio",
    },
    size: {
      control: "radio",
    },
    radius: {
      control: "radio",
    },
    disabled: {
      control: "boolean",
      defaultValue: false,
    },
    isLoading: {
      control: "boolean",
      defaultValue: false,
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Button",
    variant: "primary",
    size: "md",
    radius: "md",
  },
};
