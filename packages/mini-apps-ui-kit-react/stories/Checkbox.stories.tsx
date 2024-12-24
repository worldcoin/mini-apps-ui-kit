import type { Meta, StoryFn, StoryObj } from "@storybook/react";
import { expect, within } from "@storybook/test";
import { useEffect, useState } from "react";

import Checkbox from "../src/components/Checkbox";

const meta: Meta<typeof Checkbox> = {
  title: "components/Checkbox",
  component: Checkbox,
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

const Template: StoryFn<typeof Checkbox> = (args) => {
  const [isChecked, setIsChecked] = useState(args.checked);

  useEffect(() => {
    // Update the checked state when the args change via Storybook's controls
    setIsChecked(args.checked);
  }, [args.checked]);

  return <Checkbox {...args} checked={isChecked} onChange={setIsChecked} />;
};

export const Checked: Story = Template.bind({});

Checked.args = {
  checked: true,
};

Checked.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const checkbox = await canvas.findByRole("checkbox");
  const tickIcon = checkbox.querySelector("svg");

  expect(checkbox).toBeInTheDocument();
  expect(checkbox).toBeChecked();
  expect(checkbox).toHaveClass("bg-gray-900 border-gray-900");
  expect(checkbox).not.toHaveClass("bg-transparent border-gray-400");
  expect(tickIcon).toBeInTheDocument();
  expect(tickIcon).toHaveClass("w-4 h-4");
};

export const Unchecked: Story = Template.bind({});

Unchecked.args = {
  checked: false,
};

Unchecked.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const checkbox = await canvas.findByRole("checkbox");

  expect(checkbox).toBeInTheDocument();
  expect(checkbox).not.toBeChecked();
  expect(checkbox).toHaveClass("bg-transparent border-gray-400");
  expect(checkbox).not.toHaveClass("bg-gray-900 border-gray-900");
};

export const Disabled: Story = Template.bind({});

Disabled.args = {
  checked: true,
  disabled: true,
};

Disabled.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const checkbox = await canvas.findByRole("checkbox");

  expect(checkbox).toBeInTheDocument();
  expect(checkbox).toBeDisabled();
  expect(checkbox).toHaveClass("opacity-20 cursor-not-allowed");
};
