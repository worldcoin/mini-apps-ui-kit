import type { Meta, StoryObj } from "@storybook/react";

import TextArea from "../src/components/TextArea";

const meta = {
  title: "Components/TextArea",
  component: TextArea,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A multi-line text input component that allows users to enter longer form content.",
      },
    },
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="w-80 flex justify-center">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Enter your text here...",
  },
};

export const WithError: Story = {
  args: {
    placeholder: "Enter your text here...",
    error: true,
  },
};

export const Disabled: Story = {
  args: {
    placeholder: "This textarea is disabled",
    disabled: true,
  },
};

export const Focused: Story = {
  args: {
    placeholder: "This textarea is focused",
    isFocused: true,
  },
};

export const WithValue: Story = {
  args: {
    value: "This is some example text that shows how the textarea looks with content.",
  },
};
