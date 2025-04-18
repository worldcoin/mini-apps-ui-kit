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
          "A component that provides haptic feedback when touched. It supports different types of haptic feedback including impact, notification, and selection changed. For more detailed information about haptic feedback types and their usage, see the [Haptics documentation](/docs/documentation-haptics--docs).\n\n> **Note:** All interactive components in the UI Kit already include appropriate haptic feedback by default. This component is provided for custom implementations where you need to add haptic feedback to your own components.",
      },
    },
  },
  args: { onClick: fn() },
  argTypes: {
    variant: {
      control: "radio",
      options: ["impact", "notification", "selection"],
      defaultValue: "selection",
    },
    type: {
      control: "radio",
      options: ["light", "medium", "heavy", "soft", "rigid", "success", "warning", "error"],
      defaultValue: "light",
    },
    children: {
      control: "text",
      defaultValue: "Touch me for haptic feedback",
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
type Story = StoryObj<typeof Haptic>;

export const Default: Story = {
  args: {
    variant: "selection",
    children: "Touch me for haptic feedback",
  },
};
