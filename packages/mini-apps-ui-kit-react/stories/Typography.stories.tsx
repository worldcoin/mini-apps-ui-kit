import type { Meta, StoryObj } from "@storybook/react";

import {
  Typography,
  TypographyCommonProps,
  TypographyDisplayProps,
  TypographyLabelProps,
  TypographyNumberProps,
} from "../src/components/Typography";
import TypographyDocs from "./Typography.mdx";

const meta: Meta<typeof Typography> = {
  title: "components/Typography",
  component: Typography,
  parameters: {
    docs: {
      page: TypographyDocs,
    },
  },
  argTypes: {
    as: {
      table: {
        disable: true,
      },
    },
    variant: {
      control: "radio",
      options: ["display", "heading", "subtitle", "body", "label"],
      table: {
        readonly: true,
      },
    },
  },
};

export default meta;

// Main stories for sidebar
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

export const Subtitle: StoryObj<TypographyCommonProps> = {
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

export const Label: StoryObj<TypographyLabelProps> = {
  args: {
    variant: "label",
    level: 1,
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
    level: 1,
    children: "Body",
  },
  tags: ["!autodocs"],
  argTypes: {
    level: {
      control: "radio",
      options: [1, 2, 3, 4],
    },
  },
};

// Display levels
export const Display1: StoryObj<TypographyDisplayProps> = {
  args: {
    variant: "display",
    level: 1,
    children: "Welcome to Mini Apps",
  },
  tags: ["!dev"],
};

// Heading levels
export const Heading1: StoryObj<TypographyCommonProps> = {
  args: {
    variant: "heading",
    level: 1,
    children: "Build Beautiful User Interfaces",
  },
  tags: ["!dev"],
};

export const Heading2: StoryObj<TypographyCommonProps> = {
  args: {
    variant: "heading",
    level: 2,
    children: "Craft Engaging Experiences",
  },
  tags: ["!dev"],
};

export const Heading3: StoryObj<TypographyCommonProps> = {
  args: {
    variant: "heading",
    level: 3,
    children: "Design with Confidence",
  },
  tags: ["!dev"],
};

export const Heading4: StoryObj<TypographyCommonProps> = {
  args: {
    variant: "heading",
    level: 4,
    children: "Perfect Every Detail",
  },
  tags: ["!dev"],
};

// Subtitle levels
export const Subtitle1: StoryObj<TypographyCommonProps> = {
  args: {
    variant: "subtitle",
    level: 1,
    children: "Modern Components for React Applications",
  },
  tags: ["!dev"],
};

export const Subtitle2: StoryObj<TypographyCommonProps> = {
  args: {
    variant: "subtitle",
    level: 2,
    children: "Flexible and Easy to Customize",
  },
  tags: ["!dev"],
};

export const Subtitle3: StoryObj<TypographyCommonProps> = {
  args: {
    variant: "subtitle",
    level: 3,
    children: "Built with Developer Experience in Mind",
  },
  tags: ["!dev"],
};

export const Subtitle4: StoryObj<TypographyCommonProps> = {
  args: {
    variant: "subtitle",
    level: 4,
    children: "Optimized for Performance",
  },
  tags: ["!dev"],
};

// Label levels
export const Label1: StoryObj<TypographyLabelProps> = {
  args: {
    variant: "label",
    level: 1,
    children: "Important Information",
  },
  tags: ["!dev"],
};

export const Label2: StoryObj<TypographyLabelProps> = {
  args: {
    variant: "label",
    level: 2,
    children: "Additional Details",
  },
  tags: ["!dev"],
};

// Body levels
export const Body1: StoryObj<TypographyCommonProps> = {
  args: {
    variant: "body",
    level: 1,
    children:
      "Create stunning web applications with our comprehensive UI kit. Start building faster and smarter today.",
  },
  tags: ["!dev"],
};

export const Body2: StoryObj<TypographyCommonProps> = {
  args: {
    variant: "body",
    level: 2,
    children:
      "Our components are designed to work seamlessly together, providing a consistent and polished look across your entire application.",
  },
  tags: ["!dev"],
};

export const Body3: StoryObj<TypographyCommonProps> = {
  args: {
    variant: "body",
    level: 3,
    children:
      "Focus on what matters most - building great features. Let our UI kit handle the visual details.",
  },
  tags: ["!dev"],
};

export const Body4: StoryObj<TypographyCommonProps> = {
  args: {
    variant: "body",
    level: 4,
    children:
      "Simple, intuitive, and powerful. Everything you need to create professional-looking interfaces.",
  },
  tags: ["!dev"],
};

// Number levels (hidden from sidebar)
export const Number1: StoryObj<TypographyNumberProps> = {
  args: {
    variant: "number",
    level: 1,
    children: "2,500+ Components",
  },
  tags: ["!dev"],
};

export const Number2: StoryObj<TypographyNumberProps> = {
  args: {
    variant: "number",
    level: 2,
    children: "99.9% Uptime",
  },
  tags: ["!dev"],
};

export const Number3: StoryObj<TypographyNumberProps> = {
  args: {
    variant: "number",
    level: 3,
    children: "4.9/5 Rating",
  },
  tags: ["!dev"],
};

export const Number4: StoryObj<TypographyNumberProps> = {
  args: {
    variant: "number",
    level: 4,
    children: "50K+ Downloads",
  },
  tags: ["!dev"],
};

export const Number5: StoryObj<TypographyNumberProps> = {
  args: {
    variant: "number",
    level: 5,
    children: "24/7 Support",
  },
  tags: ["!dev"],
};
