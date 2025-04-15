import type { Meta, StoryObj } from "@storybook/react";

import { Skeleton } from "../src/components/Skeleton/Skeleton";

const meta: Meta<typeof Skeleton> = {
  title: "Components/Skeleton",
  component: Skeleton,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Display a placeholder preview of your content before the data gets loaded to reduce load-time frustration. The `skeleton` class name is available to use for custom skeleton components.",
      },
    },
  },
  argTypes: {
    width: {
      control: "number",
    },
    height: {
      control: "number",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
  args: {
    className: "size-12",
  },
};

export const Avatar: Story = {
  args: {
    className: "size-12 rounded-full",
  },
};
