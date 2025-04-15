import type { Meta, StoryObj } from "@storybook/react";

import { TextArea } from "../src/components/TextArea";

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
    label: "Enter your text here...",
    id: "text-area-default",
  },
};

export const FloatingLabel: Story = {
  args: {
    label: "Enter your text here...",
    variant: "floating-label",
    id: "text-area-floating-label",
  },
};

export const WithError: Story = {
  args: {
    label: "Enter your text here...",
    error: true,
    id: "text-area-error",
  },
};

export const Disabled: Story = {
  args: {
    label: "This textarea is disabled",
    disabled: true,
    id: "text-area-disabled",
  },
};

export const Focused: Story = {
  args: {
    label: "This textarea is focused",
    isFocused: true,
    id: "text-area-focused",
  },
};

export const WithValue: Story = {
  args: {
    label: "This textarea has content",
    value: "This is some example text that shows how the textarea looks with content.",
    id: "text-area-with-value",
  },
};
