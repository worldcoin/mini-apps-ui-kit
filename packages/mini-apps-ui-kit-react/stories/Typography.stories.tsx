import type { Meta, StoryObj } from "@storybook/react";

import {
  Typography,
  TypographyCommonProps,
  TypographyDisplayProps,
  TypographyLabelProps,
  TypographyNumberProps,
} from "../src/components/Typography";

const meta: Meta<typeof Typography> = {
  title: "components/Typography",
  component: Typography,
  argTypes: {
    as: {
      table: {
        disable: true,
      },
    },
    variant: {
      control: "radio",
      options: ["number", "heading", "subtitle", "body"],
      table: {
        readonly: true,
      },
    },
  },
};

export default meta;

export const Display: StoryObj<TypographyDisplayProps> = {
  args: {
    variant: "display",
    level: 1,
    children: "Display",
  },
  argTypes: {
    level: {
      control: "radio",
      options: [1],
    },
  },
};

export const Heading: StoryObj<TypographyCommonProps> = {
  args: {
    variant: "heading",
    level: 4,
    children: "Heading",
  },
  argTypes: {
    level: {
      control: "radio",
      options: [1, 2, 3, 4],
    },
  },
};

export const Subtitle: StoryObj<TypographyCommonProps> = {
  args: {
    variant: "subtitle",
    level: 2,
    children: "Subtitle",
  },
  argTypes: {
    level: {
      control: "radio",
      options: [1, 2, 3, 4],
    },
  },
};

export const Label: StoryObj<TypographyLabelProps> = {
  args: {
    variant: "label",
    level: 2,
    children: "Label",
  },
  argTypes: {
    level: {
      control: "radio",
      options: [1, 2],
    },
  },
};

export const Body: StoryObj<TypographyCommonProps> = {
  args: {
    variant: "body",
    level: 2,
    children: "Body",
  },
  argTypes: {
    level: {
      control: "radio",
      options: [1, 2, 3, 4],
    },
  },
};

export const Number: StoryObj<TypographyNumberProps> = {
  args: {
    variant: "number",
    level: 5,
    children: "Number Display",
  },
  argTypes: {
    level: {
      control: "radio",
      options: [1, 2, 3, 4, 5, 6],
    },
  },
};
