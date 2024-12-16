import type { Meta, StoryObj } from "@storybook/react";

import ListItem from "../src/components/ListItem";

const meta: Meta<typeof ListItem> = {
  title: "Components/ListItem",
  component: ListItem,
  parameters: {
    docs: {
      description: {
        component:
          "A versatile list item component that can be styled with different variants: duotone (alternating backgrounds), outline (bordered), and ghost (minimal). Used for displaying content in list format with consistent height and alignment.",
      },
    },
  },
  argTypes: {
    variant: {
      options: ["duotone", "outline", "ghost"],
      control: { type: "select" },
    },
  },
  decorators: [
    (Story) => (
      <div className="w-[400px]">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ListItem>;

export const Duotone: Story = {
  args: {
    variant: "duotone",
    children: "Duotone List Item",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Outline List Item",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "Ghost List Item",
  },
};
