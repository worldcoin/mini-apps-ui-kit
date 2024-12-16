import type { Meta, StoryObj } from "@storybook/react";

import { expect, within } from "@storybook/test";

import * as Form from "../src/components/Form";
import OTPField from "../src/components/OTPField";

const meta: Meta<typeof OTPField> = {
  title: "components/OTPField",
  component: OTPField,
  parameters: {
    docs: {
      description: {
        component: "A one-time password input field that allows entering numeric codes.",
      },
    },
  },
  argTypes: {
    maxLength: {
      defaultValue: 6,
      control: {
        type: "number",
        min: 1,
      },
    },
    value: {
      control: false,
    },
    error: {
      control: "boolean",
    },
    mode: {
      control: "select",
      options: ["digits", "chars", "digitsAndChars"],
    },
    onChange: {
      control: false,
    },
    onComplete: {
      control: false,
    },
    pasteTransformer: {
      control: false,
    },
  },
};
export default meta;
type Story = StoryObj<typeof OTPField>;

export const Default: Story = {
  render: (args) => <OTPField {...args} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const slots = await canvas.findAllByRole("textbox");

    expect(slots).toHaveLength(6 + 1);
    slots.forEach((slot) => {
      expect(slot).toBeInTheDocument();
    });
  },
};

export const Error: Story = {
  render: () => (
    <Form.Root>
      <Form.Field name="otp">
        <OTPField error />
        <Form.Message error textAlign="center">
          Error message
        </Form.Message>
      </Form.Field>
    </Form.Root>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const slots = await canvas.findAllByRole("textbox");

    expect(slots).toHaveLength(6 + 1);
    slots.slice(0, -1).forEach((slot) => {
      expect(slot).toBeInTheDocument();
      expect(slot).toHaveClass("border-error-700");
    });
  },
};
