import type { Meta, StoryObj } from "@storybook/react";

import SearchField from "@/components/SearchField";

import * as Form from "../src/components/Form";

const meta: Meta<typeof SearchField> = {
  title: "components/SearchField",
  component: SearchField,
  argTypes: {
    error: {
      control: "boolean",
    },
    isValid: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Form.Root>
      <SearchField placeholder="Name, Address or ENS" {...args} />
    </Form.Root>
  ),
};

export const Error: Story = {
  render: (args) => (
    <Form.Root>
      <Form.Field name="search">
        <SearchField placeholder="Name, Address or ENS" error {...args} />
        <Form.Message error>This is an error message</Form.Message>
      </Form.Field>
    </Form.Root>
  ),
};

export const WithPasteButton: Story = {
  render: (args) => (
    <Form.Root>
      <SearchField placeholder="Name, Address or ENS" showPasteButton {...args} />
    </Form.Root>
  ),
};
