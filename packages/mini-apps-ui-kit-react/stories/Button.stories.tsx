import type { Meta, StoryObj } from "@storybook/react";
import { expect, fn, within } from "@storybook/test";

import { Button } from "../src/components/Button";
import { iconControl } from "./helpers/icon-control";
import { Star } from "./helpers/icons/Star";

const meta: Meta<typeof Button> = {
  title: "components/Button",
  component: Button,
  parameters: {
    docs: {
      description: {
        component:
          "A versatile button component that supports different variants, sizes, and states with optional icon support.",
      },
    },
  },
  argTypes: {
    variant: {
      control: "radio",
    },
    size: {
      control: "radio",
    },
    fullWidth: {
      control: "boolean",
      defaultValue: false,
    },
    disabled: {
      control: "boolean",
      defaultValue: false,
    },
    state: {
      control: "radio",
      options: [undefined, "pending", "success", "failed"],
    },
    icon: iconControl,
  },
  args: { onClick: fn() },
  decorators: [
    (Story) => (
      <div style={{ width: "200px", display: "flex", justifyContent: "center" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Text: Story = {
  args: {
    children: "Button",
    variant: "primary",
    size: "lg",
    fullWidth: false,
  },
  parameters: {
    docs: {
      description: {
        story: "A basic button with text content only.",
      },
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = await canvas.findByText("Button");

    expect(button).toBeInTheDocument();
  },
};

export const TextWithIcon: Story = {
  args: {
    icon: <Star />,
    children: "Button",
    variant: "primary",
    size: "lg",
    fullWidth: false,
  },
  parameters: {
    docs: {
      description: {
        story:
          "A button that combines text and an icon, demonstrating how to use both elements together.",
      },
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = await canvas.findByText("Button");
    const icon = await canvas.findByTestId("star-icon");

    expect(button).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
  },
};

export const Icon: Story = {
  args: {
    icon: <Star />,
    variant: "primary",
    size: "lg",
  },
  parameters: {
    docs: {
      description: {
        story: "A button that displays an icon only.",
      },
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const icon = await canvas.findByTestId("star-icon");

    expect(icon).toBeInTheDocument();
  },
};
