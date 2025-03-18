import { SearchField } from "@/components/SearchField";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Form } from "../src/components/Form";
import { iconControl } from "./helpers/icon-control";

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
    endAdornment: {
      ...iconControl,
      description: "Optional icon or element to display at the end of the input",
    },
    error: {
      control: "boolean",
      description: "If true, displays the input in an error state with error styling",
    },
    disabled: {
      control: "boolean",
      description: "The input's `disabled` attribute.",
    },
    isValid: {
      control: "boolean",
      description: "If true, displays the input in a valid state with success styling",
    },
    showPasteButton: {
      control: "boolean",
      description: "If true, displays a paste button as an end adornment",
    },
    type: {
      control: "text",
      description: "The input's `type` attribute.",
    },
    autoComplete: {
      control: "text",
      description: "The input's `autocomplete` attribute.",
    },
    spellCheck: {
      control: "text",
      description: "The input's `spellcheck` attribute.",
    },
    pasteButtonLabel: {
      control: "text",
      description: "Label for the paste button.",
    },
    value: {
      control: "text",
      description: "The input's value. Follows standard HTML input behavior.",
    },
    onChange: {
      control: false,
      description:
        "Callback fired when the input's value changes. Follows standard HTML input behavior.",
    },
  },
  decorators: [
    (Story) => (
      <div className="w-80 flex justify-center">
        <Story />
      </div>
    ),
  ],
  args: {
    onChange: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <SearchField label="Name, Address or ENS" {...args} />,
};

export const Error: Story = {
  render: (args) => (
    <Form.Root className="w-full">
      <Form.Field name="search">
        <SearchField label="Name, Address or ENS" error {...args} />
        <Form.Message error>This is an error message</Form.Message>
      </Form.Field>
    </Form.Root>
  ),
};

export const WithPasteButton: Story = {
  render: (args) => <SearchField label="Name, Address or ENS" showPasteButton {...args} />,
};
