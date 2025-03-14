import type { Meta, StoryObj } from "@storybook/react";

import { Pill } from "../src/components/Pill";

const meta: Meta<typeof Pill> = {
  title: "components/Pill",
  component: Pill,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A pill-shaped component that can be used as a toggle or label with a rounded appearance.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    checked: {
      control: "boolean",
    },
    asChild: {
      control: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Pill Label",
    checked: false,
  },
};
