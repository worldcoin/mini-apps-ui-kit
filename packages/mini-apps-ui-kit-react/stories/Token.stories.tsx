import type { Meta, StoryObj } from "@storybook/react";

import Token from "../src/components/Token";

const meta: Meta<typeof Token> = {
  title: "Components/Token",
  component: Token,
  parameters: {
    docs: {
      description: {
        component: "A component that displays a token symbol.",
      },
    },
  },
  argTypes: {
    value: {
      options: ["BTC", "ETH", "USDC", "WLD"],
      control: { type: "select" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Token>;

export const Default: Story = {
  args: {
    value: "BTC",
  },
};
