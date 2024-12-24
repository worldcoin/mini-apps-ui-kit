import type { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "@storybook/test";

import * as Form from "../../src/components/Form";
import Input from "../../src/components/Input";

type FormStoryProps = Form.FormProps & {
  message?: string;
};

const meta: Meta<FormStoryProps> = {
  title: "components/Form",
  component: Form.Root,
};

export default meta;

type Story = StoryObj<FormStoryProps>;

export const WithValidationMessage: Story = {
  render: ({ message = "This field is required" }) => (
    <Form.Root>
      <Form.Field name="email">
        <Form.Control asChild>
          <Input placeholder="Enter your email" />
        </Form.Control>
        <Form.Message>{message}</Form.Message>
      </Form.Field>
    </Form.Root>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const messageElement = await canvas.findByText("This field is required");
    expect(messageElement).toBeInTheDocument();
  },
};

export const WithErrorState: Story = {
  render: ({ message = "Please enter a valid email" }) => (
    <Form.Root>
      <Form.Field name="email" className="has-error">
        <Form.Control asChild>
          <Input error placeholder="Enter your email" />
        </Form.Control>
        <Form.Message error>{message}</Form.Message>
      </Form.Field>
    </Form.Root>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const messageElement = await canvas.findByText("Please enter a valid email");
    const input = await canvas.findByPlaceholderText("Enter your email");
    expect(messageElement).toBeInTheDocument();
    expect(input).toHaveClass("border-error-700");
  },
};
