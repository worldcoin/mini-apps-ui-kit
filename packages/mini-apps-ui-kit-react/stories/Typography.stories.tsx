import type { Meta, StoryObj } from "@storybook/react";
import Typography from "../src/components/Typography/Typography";

const meta = {
  title: "Typography",
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
  },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NumberDisplay: Story = {
  args: {
    variant: "D1",
    children: "Number Display",
  },
};

export const Number1: Story = {
  args: {
    variant: "N1",
    children: "Number 1",
  },
};

export const Number2: Story = {
  args: {
    variant: "N2",
    children: "Number 2",
  },
};

export const Number3: Story = {
  args: {
    variant: "N3",
    children: "Number 3",
  },
};

export const Number4: Story = {
  args: {
    variant: "N4",
    children: "Number 4",
  },
};

export const Number5: Story = {
  args: {
    variant: "N5",
    children: "Number 5",
  },
};

export const Number6: Story = {
  args: {
    variant: "N6",
    children: "Number 6",
  },
};

export const Heading1: Story = {
  args: {
    variant: "H1",
    children: "Heading 1",
  },
};

export const Heading2: Story = {
  args: {
    variant: "H2",
    children: "Heading 2",
  },
};

export const Heading3: Story = {
  args: {
    variant: "H3",
    children: "Heading 3",
  },
};

export const Heading4: Story = {
  args: {
    variant: "H4",
    children: "Heading 4",
  },
};

export const Subtitle1: Story = {
  args: {
    variant: "S1",
    children: "Subtitle 1",
  },
};

export const Subtitle2: Story = {
  args: {
    variant: "S2",
    children: "Subtitle 2",
  },
};

export const Subtitle3: Story = {
  args: {
    variant: "S3",
    children: "Subtitle 3",
  },
};

export const Subtitle4: Story = {
  args: {
    variant: "S4",
    children: "Subtitle 4",
  },
};

export const Body1: Story = {
  args: {
    variant: "B1",
    children: "Body 1",
  },
};

export const Body2: Story = {
  args: {
    variant: "B2",
    children: "Body 2",
  },
};

export const Body3: Story = {
  args: {
    variant: "B3",
    children: "Body 3",
  },
};

export const Body4: Story = {
  args: {
    variant: "B4",
    children: "Body 4",
  },
};
