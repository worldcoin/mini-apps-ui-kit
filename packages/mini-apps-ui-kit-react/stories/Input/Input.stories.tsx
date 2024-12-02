import { useEffect, useState } from "react";
import type { Meta, StoryObj, StoryFn } from "@storybook/react";
import { expect, within, userEvent } from "@storybook/test";
import Input, { InputProps } from "../../src/components/Input";
import { Star } from "../assets/Icon";
const meta: Meta<InputProps> = {
  title: "components/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    startAdornment: {
      control: false,
    },
    endAdornment: {
      control: false,
    },
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

export const WithStartAdornment: Story = {
  args: {
    placeholder: "Search",
    startAdornment: <Star />,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = await canvas.findByPlaceholderText("Search");
    const startAdornment = await canvas.findByTestId("input-start-adornment");

    expect(input).toBeInTheDocument();
    expect(startAdornment).toBeInTheDocument();
  },
};
