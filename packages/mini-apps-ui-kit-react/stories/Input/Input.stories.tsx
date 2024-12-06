import type { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "@storybook/test";
import Input, { InputProps } from "../../src/components/Input";
import { iconControl } from "../helpers/icon-control";
import { CountryCode } from "../helpers/icons/CountryCode";
import { Switch } from "../helpers/icons/Switch";

const meta: Meta<InputProps> = {
  title: "components/Input",
  component: Input,
  argTypes: {
    startAdornment: iconControl,
    endAdornment: iconControl,
    type: {
      control: false,
    },
  },
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

export const StartCustomSizeIcon: Story = {
  args: {
    placeholder: "Enter your number",
    startAdornment: <CountryCode />,
    startAdornmentWidth: 4.5,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const icon = await canvas.findByTestId("country-code-icon");

    expect(icon).toBeInTheDocument();
  },
};

export const EndCustomSizeIcon: Story = {
  args: {
    placeholder: "Enter your number",
    endAdornment: <Switch />,
    endAdornmentWidth: 2,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const icon = await canvas.findByTestId("switch-icon");

    expect(icon).toBeInTheDocument();
  },
};
