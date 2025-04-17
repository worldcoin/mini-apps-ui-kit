import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Haptic } from "../src/components/Haptic/Haptic";

const meta: Meta<typeof Haptic> = {
  title: "components/Haptic",
  component: Haptic,
  parameters: {
    docs: {
      description: {
        component:
          "A component that provides haptic feedback when touched. It supports different types of haptic feedback including impact, notification, and selection changed.",
      },
    },
  },
  args: { onClick: fn() },
  argTypes: {
    type: {
      control: "radio",
      options: ["impact", "notification", "selectionChanged"],
      defaultValue: "selectionChanged",
    },
    style: {
      control: "radio",
      options: ["light", "medium", "heavy", "success", "warning", "error"],
      defaultValue: "medium",
    },
    children: {
      control: "boolean",
      table: {
        disable: true,
      },
    },
    asChild: {
      control: "boolean",
      table: {
        disable: true,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: "selectionChanged",
    children: "Touch me for haptic feedback",
  },
};
