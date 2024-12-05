import type { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "@storybook/test";
import Input, { InputProps } from "../../src/components/Input";
import { iconControl } from "../helpers/icon-control";
import { CountryCode } from "../helpers/icons/CountryCode";
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
  decorators: [
    (Story) => (
      <div style={{ width: "200px", display: "flex", justifyContent: "center" }}>
        <Story />
      </div>
    ),
  ],
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

export const File: Story = {
  args: {
    type: "file",
    placeholder: "Choose file",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = await canvas.findByPlaceholderText("Choose file");

    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("type", "file");
  },
};

export const LargeIcon: Story = {
  args: {
    placeholder: "Enter your number",
    startAdornment: <CountryCode />,
    startAdornmentWidth: 4.5,
  },
};
