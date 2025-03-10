import type { Meta, StoryObj } from "@storybook/react";

import {
  Typography,
  TypographyDisplayProps,
  TypographyHeadingProps,
  TypographyNumberProps,
  TypographySubtitleBodyMonoProps,
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
      options: ["number", "heading", "subtitle", "body", "mono"],
      table: {
        readonly: true,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Typography",
  },
  argTypes: {
    level: {
      control: "radio",
      options: [1, 2, 3, 4],
    },
    variant: {
      control: "radio",
      options: [1],
      table: {
        disable: true,
      },
    },
  },
};
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
      table: {
        disable: true,
      },
    },
    variant: {
      control: "radio",
      options: [1],
      table: {
        disable: true,
      },
    },
  },
};

export const Heading: StoryObj<TypographyHeadingProps> = {
  args: {
    variant: "heading",
    level: 3,
    children: "Heading",
  },
  argTypes: {
    level: {
      control: "radio",
      options: [1, 2, 3],
    },
    variant: {
      control: "radio",
      options: [1],
      table: {
        disable: true,
      },
    },
  },
};

export const Subtitle: StoryObj<TypographySubtitleBodyMonoProps> = {
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
    variant: {
      control: "radio",
      options: [1],
      table: {
        disable: true,
      },
    },
  },
};

export const Body: StoryObj<TypographySubtitleBodyMonoProps> = {
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
    variant: {
      control: "radio",
      options: [1],
      table: {
        disable: true,
      },
    },
  },
};

export const Number: StoryObj<TypographyNumberProps> = {
  args: {
    variant: "number",
    level: 6,
    children: "Number Display",
  },
  argTypes: {
    level: {
      control: "radio",
      options: [1, 2, 3, 4, 5, 6],
    },
    variant: {
      control: "radio",
      options: [1],
      table: {
        disable: true,
      },
    },
  },
};

export const Mono: StoryObj<TypographySubtitleBodyMonoProps> = {
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
    variant: {
      control: "radio",
      options: [1],
      table: {
        disable: true,
      },
    },
  },
};
