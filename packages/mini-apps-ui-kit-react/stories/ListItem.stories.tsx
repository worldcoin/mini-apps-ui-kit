import { Chip, Token } from "@/index";
import type { Meta, StoryObj } from "@storybook/react";

import { ListItem } from "../src/components/ListItem";
import { Star } from "./helpers/icons/Star";

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
    label: {
      control: "text",
    },
    description: {
      control: "text",
    },
    disabled: {
      control: "boolean",
    },
    startAdornment: {
      control: "select",
      options: ["None", "Token"],
      mapping: {
        None: null,
        Token: <Token value="BTC" />,
      },
    },
    endAdornment: {
      control: "select",
      options: ["None", "Star", "Chip"],
      mapping: {
        None: null,
        Star: <Star />,
        Chip: <Chip label="Action" variant="warning" />,
      },
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

export const Basic: Story = {
  args: {
    label: "Basic List Item",
    description: "This is a basic list item with a label and description",
  },
};

export const WithStartAdornment: Story = {
  args: {
    label: "List Item with Icon",
    description: "This list item has a start adornment",
    startAdornment: <Token value="BTC" />,
  },
};

export const WithEndAdornment: Story = {
  args: {
    label: "List Item with Action",
    description: "This list item has an end adornment",
    endAdornment: <Chip label="Suggested" className="bg-gray-200" />,
  },
};
