import type { Meta, StoryFn, StoryObj } from "@storybook/react";
import { expect, userEvent, within } from "@storybook/test";
import { useEffect, useState } from "react";

import { Switch, SwitchProps } from "../src/components/Switch";

const meta: Meta<SwitchProps> = {
  title: "components/Switch",
  component: Switch,
  parameters: {
    docs: {
      description: {
        component:
          "A toggle switch component that provides a visual way to turn an option on or off.",
      },
    },
  },
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

Unchecked.parameters = {
  docs: {
    description: {
      story: "Switch component in its default unchecked state.",
    },
  },
};

Unchecked.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const switchElement = await canvas.findByRole("switch");

  expect(switchElement).toBeInTheDocument();
  expect(switchElement).not.toBeChecked();
  expect(switchElement).toHaveAttribute("aria-checked", "false");
};

export const Checked: Story = Template.bind({});

Checked.parameters = {
  docs: {
    description: {
      story: "Switch component in its checked state.",
    },
  },
};

Checked.args = {
  checked: true,
};

Checked.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const switchElement = await canvas.findByRole("switch");

  expect(switchElement).toBeInTheDocument();
  expect(switchElement).toBeChecked();
  expect(switchElement).toHaveAttribute("aria-checked", "true");
  expect(switchElement.firstChild).toBeInTheDocument();
};

export const Disabled: Story = Template.bind({});

Disabled.parameters = {
  docs: {
    description: {
      story: "Switch component in a disabled state where user interaction is prevented.",
    },
  },
};

Disabled.args = {
  disabled: true,
};

Disabled.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const switchElement = await canvas.findByRole("switch");

  expect(switchElement).toBeInTheDocument();
  expect(switchElement).not.toBeChecked();

  await userEvent.click(switchElement);

  expect(switchElement).not.toBeChecked();
};

export const ToggleSwitchTesting: Story = Template.bind({});

ToggleSwitchTesting.parameters = {
  docs: {
    description: {
      story: "Interactive demonstration of switch toggling behavior.",
    },
  },
};

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
