import type { Meta, StoryObj } from "@storybook/react";

import { PasswordField } from "../src/components/PasswordField/PasswordField";

const meta: Meta<typeof PasswordField> = {
  title: "Components/PasswordField",
  component: PasswordField,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "A password input component with a toggle to show/hide the password.",
      },
    },
  },
  args: {
    placeholder: "Enter password",
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
type Story = StoryObj<typeof PasswordField>;

export const Default: Story = {
  args: {},
};
