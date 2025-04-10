import { countryCodes } from "@/components/Flag/constants";
import type { Meta, StoryObj } from "@storybook/react";

import { Flag } from "../src/components/Flag";

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
