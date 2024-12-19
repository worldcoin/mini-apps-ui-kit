import type { Meta, StoryObj } from "@storybook/react";

import SearchField from "@/components/SearchField";

import * as Form from "../src/components/Form";

const meta: Meta<typeof SearchField> = {
  title: "components/SearchField",
  component: SearchField,
  parameters: {
    docs: {
      description: {
        component: "A text input component designed for search functionality.",
      },
    },
  },
  argTypes: {
    error: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
    isValid: {
      control: "boolean",
    },
    showPasteButton: {
      control: "boolean",
    },
  },
  decorators: [
    (Story) => (
      <div className="w-80 flex justify-center">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <SearchField placeholder="Name, Address or ENS" {...args} />,
};

export const Error: Story = {
  render: (args) => (
    <Form.Root className="w-full">
      <Form.Field name="search">
        <SearchField placeholder="Name, Address or ENS" error {...args} />
        <Form.Message error>This is an error message</Form.Message>
      </Form.Field>
    </Form.Root>
  ),
};

export const WithPasteButton: Story = {
  render: (args) => (
    <SearchField placeholder="Name, Address or ENS" showPasteButton {...args} />
  ),
};
