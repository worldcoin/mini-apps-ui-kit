import type { Meta, StoryObj } from "@storybook/react";

import { countryCodes } from "@/components/Flag/constants";

import { Flag, LazyFlag } from "../src/components/Flag";

const meta: Meta<typeof Flag> = {
  title: "Components/Flag",
  component: Flag,
  parameters: {
    docs: {
      description: {
        component: "A component that displays a country or region flag using SVG icons.",
        story: "A component that displays a country or region flag using SVG icons.",
      },
    },
  },
  argTypes: {
    countryCode: {
      control: "select",
      options: countryCodes,
      description: "ISO 3166-1 alpha-2 country code (e.g. 'US', 'GB', 'FR')",
    },
    size: {
      control: "number",
      description:
        "Width and height in pixels for the flag SVG. Defaults to 40px if not specified.",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    countryCode: "DE",
  },
};

export const Lazy: Story = {
  render: (args: { countryCode: string; size?: number }) => <LazyFlag {...args} />,
  args: {
    countryCode: "DE",
  },
  parameters: {
    docs: {
      description: {
        story: "A lazy-loaded version of the Flag component that loads flag SVGs on demand.",
      },
    },
  },
};
