import type { Meta, StoryObj } from "@storybook/react";
import Typography from "../../src/components/Typography/Typography";

const meta: Meta<typeof Typography> = {
  title: "components/Typography",
  component: Typography,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    as: {
      table: {
        disable: true,
      },
    },
    variant: {
      control: "radio",
      options: ["number", "heading", "subtitle", "body", "mono"],
      table: {
        readonly: true,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Number: Story = {
  args: {
    variant: "number",
    level: 1,
    children: "Number Display",
  },
  argTypes: {
    level: {
      control: "radio",
      options: [1, 2, 3, 4, 5, 6],
    },
  },
};

export const Heading: Story = {
  args: {
    variant: "heading",
    level: 1,
    children: "Heading",
  },
  argTypes: {
    level: {
      control: "radio",
      options: [1, 2, 3, 4],
    },
  },
};

export const Subtitle: Story = {
  args: {
    variant: "subtitle",
    level: 1,
    children: "Subtitle",
  },
  argTypes: {
    level: {
      control: "radio",
      options: [1, 2, 3, 4],
    },
  },
};

export const Body: Story = {
  args: {
    variant: "body",
    level: 1,
    children: "Body",
  },
  argTypes: {
    level: {
      control: "radio",
      options: [1, 2, 3, 4],
    },
  },
};

export const Mono: Story = {
  args: {
    variant: "mono",
    level: 1,
    children: "Mono",
  },
  argTypes: {
    level: {
      control: "radio",
      options: [1, 2, 3, 4],
    },
  },
};
