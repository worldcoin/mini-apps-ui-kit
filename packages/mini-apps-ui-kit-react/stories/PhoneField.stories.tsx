import PhoneField, { PhoneFieldProps } from "@/components/PhoneField";
import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import * as Form from "../src/components/Form";

const meta: Meta<typeof PhoneField> = {
  title: "components/PhoneField",
  component: PhoneField,
  decorators: [
    (Story) => (
      <div className="w-[300px] p-2" data-testid="select-container">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<PhoneFieldProps>;

export const Default: Story = {
  render: (args) => {
    const [value, setValue] = useState("");

    return <PhoneField {...args} value={value} onChange={setValue} />;
  },
  args: {
    placeholder: "Enter phone number",
  },
};

export const WithErrorLabel: Story = {
  render: (args) => {
    const [value, setValue] = useState("");

    return (
      <Form.Root>
        <Form.Field name="phone" className="has-error">
          <Form.Control asChild>
            <div>
              <PhoneField {...args} value={value} onChange={setValue} />
            </div>
          </Form.Control>
          <Form.Message error>Error message</Form.Message>
        </Form.Field>
      </Form.Root>
    );
  },
  args: {
    placeholder: "Enter phone number",
    error: true,
  },
};
