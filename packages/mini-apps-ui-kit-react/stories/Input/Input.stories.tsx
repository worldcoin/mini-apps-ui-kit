import { useEffect, useState } from "react";
import type { Meta, StoryObj, StoryFn } from "@storybook/react";
import { expect, within, userEvent } from "@storybook/test";
import Input, { InputProps } from "../../src/components/Input";

const meta: Meta<InputProps> = {
  title: "components/Input",
  component: Input,
  parameters: {
    layout: "centered",
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
