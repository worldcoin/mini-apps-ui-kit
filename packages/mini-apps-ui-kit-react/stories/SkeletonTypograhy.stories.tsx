import { Typography } from "@/components/Typography/Typography";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import { SkeletonTypography } from "../src/components/Skeleton/Skeleton";
import { Switch } from "../src/components/Switch/Switch";

const LINES = 2;

const TypographyDecorator = (Story: any, { args }: any) => {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div className="w-full max-w-md min-w-64 flex flex-col gap-4 items-center">
      <div className="grow w-full">
        {isLoading ? (
          <Story {...args} />
        ) : (
          Array.from({ length: args.lines ?? LINES }).map((_, index) => (
            <Typography {...args} key={index}>
              Lorem.
            </Typography>
          ))
        )}
      </div>
      <Switch checked={isLoading} onChange={setIsLoading} />
    </div>
  );
};

const meta: Meta<typeof SkeletonTypography> = {
  title: "Components/Skeleton Typography",
  component: SkeletonTypography,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A skeleton loading state for text content that matches the styling of Typography components. Supports all Typography variants (display, heading, body, etc) and can show multiple lines of placeholder text while content is loading.",
      },
    },
  },
  argTypes: {
    width: {
      control: "number",
    },
  },
};

export default meta;
type TypographyStory = StoryObj<typeof SkeletonTypography>;

export const Text: TypographyStory = {
  args: {
    variant: "body",
    level: 2,
    lines: LINES,
  },
  argTypes: {
    level: {
      control: "radio",
      options: [1, 2, 3, 4],
    },
  },
  decorators: [TypographyDecorator],
};

export const Display: TypographyStory = {
  args: {
    variant: "display",
    level: 1,
    lines: LINES,
  },
  argTypes: {
    level: {
      control: "radio",
      options: [1],
    },
  },
  decorators: [TypographyDecorator],
};

export const Heading: TypographyStory = {
  args: {
    variant: "heading",
    level: 1,
    lines: LINES,
  },
  argTypes: {
    level: {
      control: "radio",
      options: [1, 2, 3, 4],
    },
  },
  decorators: [TypographyDecorator],
};

export const Subtitle: TypographyStory = {
  args: {
    variant: "subtitle",
    level: 1,
    lines: LINES,
  },
  argTypes: {
    level: {
      control: "radio",
      options: [1, 2, 3, 4],
    },
  },
  decorators: [TypographyDecorator],
};

export const Label: TypographyStory = {
  args: {
    variant: "label",
    level: 1,
    lines: LINES,
  },
  argTypes: {
    level: {
      control: "radio",
      options: [1, 2],
    },
  },
  decorators: [TypographyDecorator],
};

export const Number: TypographyStory = {
  args: {
    variant: "number",
    level: 1,
    lines: LINES,
  },
  argTypes: {
    level: {
      control: "radio",
      options: [1, 2, 3, 4, 5],
    },
  },
  decorators: [TypographyDecorator],
};
