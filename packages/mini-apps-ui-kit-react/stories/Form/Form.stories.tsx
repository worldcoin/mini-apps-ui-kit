import type { Meta, StoryObj } from "@storybook/react";

import { FormProps } from "@radix-ui/react-form";
import { expect, within } from "@storybook/test";

import * as Form from "../../src/components/Form";
import Input from "../../src/components/Input";

type FormStoryProps = FormProps & {
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
        <Form.Label>Email</Form.Label>
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
        <Form.Label>Email</Form.Label>
        <Form.Control asChild>
          <Input isError placeholder="Enter your email" />
        </Form.Control>
        <Form.Message isError>{message}</Form.Message>
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
