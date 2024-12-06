import { useEffect, useState } from "react";
import type { Meta, StoryObj, StoryFn } from "@storybook/react";
import { expect, within, userEvent } from "@storybook/test";
import Switch, { SwitchProps } from "../src/components/Switch";

const meta: Meta<SwitchProps> = {
  title: "components/Switch",
  component: Switch,
};

export default meta;

type Story = StoryObj<SwitchProps>;

const Template: StoryFn<SwitchProps> = (args) => {
  const [isChecked, setIsChecked] = useState(args.checked);

  useEffect(() => {
    // Update the checked state when the args change via Storybook's controls
    setIsChecked(args.checked);
  }, [args.checked]);

  return <Switch {...args} checked={isChecked} onChange={setIsChecked} />;
};

export const Unchecked: Story = Template.bind({});

Unchecked.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const switchElement = await canvas.findByRole("switch");

  expect(switchElement).toBeInTheDocument();
  expect(switchElement).not.toBeChecked();
  expect(switchElement).toHaveAttribute("aria-checked", "false");
  expect(switchElement).toHaveClass("border-gray-300 bg-gray-300");
  expect(switchElement).not.toHaveClass("border-gray-900 bg-gray-900");
  expect(switchElement.firstChild).toHaveClass("translate-x-0");
};

export const Checked: Story = Template.bind({});

Checked.args = {
  checked: true,
};

Checked.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const switchElement = await canvas.findByRole("switch");

  expect(switchElement).toBeInTheDocument();
  expect(switchElement).toBeChecked();
  expect(switchElement).toHaveAttribute("aria-checked", "true");
  expect(switchElement).toHaveClass("border-gray-900 bg-gray-900");
  expect(switchElement).not.toHaveClass("border-gray-300 bg-gray-300");
  expect(switchElement.firstChild).toBeInTheDocument();
  expect(switchElement.firstChild).toHaveClass("translate-x-4");
};

export const Disabled: Story = Template.bind({});

Disabled.args = {
  disabled: true,
};

Disabled.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const switchElement = await canvas.findByRole("switch");

  expect(switchElement).toBeInTheDocument();
  expect(switchElement).not.toBeChecked();
  expect(switchElement).toHaveClass("opacity-20");

  await userEvent.click(switchElement);

  expect(switchElement).not.toBeChecked();
};

export const ToggleSwitchTesting: Story = Template.bind({});

ToggleSwitchTesting.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const switchElement = await canvas.findByRole("switch");

  expect(switchElement).toBeInTheDocument();
  expect(switchElement).not.toBeChecked();

  await userEvent.click(switchElement);

  expect(switchElement).toBeChecked();

  await userEvent.click(switchElement);

  expect(switchElement).not.toBeChecked();
};
