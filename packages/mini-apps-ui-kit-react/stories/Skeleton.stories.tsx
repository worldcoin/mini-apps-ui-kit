import { Typography } from "@/components/Typography/Typography";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import { Skeleton, TypographySkeleton } from "../src/components/Skeleton/Skeleton";
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

const meta: Meta<typeof TypographySkeleton> = {
  title: "Components/Skeleton",
  component: TypographySkeleton,
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
    variant: {
      control: "select",
      options: ["display", "heading", "subtitle", "body", "label", "number"],
      table: {
        disable: true,
      },
    },
    level: {
      control: "select",
      options: [1, 2, 3, 4, 5],
      table: {
        disable: true,
      },
    },
    lines: {
      control: { type: "number", min: 1, max: 5 },
      table: {
        disable: true,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof TypographySkeleton>;

export const Default: StoryObj<typeof Skeleton> = {
  args: {
    className: "size-12 rounded-full",
  },
};

export const Text: Story = {
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

export const Display: Story = {
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

export const Heading: Story = {
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

export const Subtitle: Story = {
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

export const Label: Story = {
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

export const Number: Story = {
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
