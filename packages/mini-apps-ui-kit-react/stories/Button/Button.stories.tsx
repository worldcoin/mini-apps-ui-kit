import type { Meta, StoryObj } from "@storybook/react";
import { expect, fn, within } from "@storybook/test";
import Button from "../../src/components/Button";
import { Star } from "./Icon";

const meta: Meta<typeof Button> = {
  title: "components/Button",
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
    fullWidth: {
      control: "boolean",
      defaultValue: false,
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
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Text: Story = {
  args: {
    children: "Button",
    variant: "primary",
    size: "md",
    radius: "md",
    fullWidth: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = await canvas.findByText("Button");

    expect(button).toBeInTheDocument();
  },
};

export const TextWithIcon: Story = {
  args: {
    icon: <Star />,
    children: "Button",
    variant: "primary",
    size: "md",
    radius: "md",
    fullWidth: false,
  },
  argTypes: {
    icon: {
      control: false,
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = await canvas.findByText("Button");
    const icon = await canvas.findByTestId("button-icon");

    expect(button).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
  },
};

export const Icon: Story = {
  args: {
    icon: <Star />,
    variant: "primary",
    size: "md",
    radius: "md",
  },
  argTypes: {
    icon: {
      control: false,
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const icon = await canvas.findByTestId("button-icon");

    expect(icon).toBeInTheDocument();
  },
};
