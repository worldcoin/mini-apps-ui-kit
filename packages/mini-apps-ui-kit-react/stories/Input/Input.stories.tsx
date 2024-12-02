import type { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "@storybook/test";
import Input, { InputProps } from "../../src/components/Input";
import { iconControl } from "../helpers/icon-control";
const meta: Meta<InputProps> = {
  title: "components/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    startAdornment: iconControl,
    endAdornment: iconControl,
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<InputProps>;

export const Text: Story = {
  args: {
    placeholder: "Enter your name",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = await canvas.findByPlaceholderText("Enter your name");

    expect(input).toBeInTheDocument();
  },
};
