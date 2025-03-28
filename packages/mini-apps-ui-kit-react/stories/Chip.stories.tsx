import type { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "@storybook/test";

import { Chip, ChipProps } from "../src/components/Chip";
import { iconControl } from "./helpers/icon-control";
import { Shield } from "./helpers/icons/Shield";

const meta: Meta<ChipProps> = {
  title: "components/Chip",
  component: Chip,
  parameters: {
    docs: {
      description: {
        component:
          "A chip component that displays labels with optional icons and different variants including success, warning, error, and important states.",
      },
    },
  },
  argTypes: {
    icon: iconControl,
  },
};

export default meta;

type Story = StoryObj<ChipProps>;

export const Default: Story = {
  args: {
    label: "Default",
  },
  parameters: {
    docs: {
      description: {
        story: "The default chip variant without any icon or special styling.",
      },
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const chip = await canvas.findByText("Default");

    expect(chip).toBeInTheDocument();
  },
};

export const DefaultWithIcon: Story = {
  args: {
    label: "Default with icon",
    icon: <Shield />,
  },
  parameters: {
    docs: {
      description: {
        story: "A chip that includes an icon alongside the label text.",
      },
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const chip = await canvas.findByText("Default with icon");
    const icon = await canvas.findByTestId("shield-icon");

    expect(chip).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
  },
};

export const SuccessWithIcon: Story = {
  args: {
    label: "Success with icon",
    variant: "success",
    icon: <Shield variant="success" />,
  },
  parameters: {
    docs: {
      description: {
        story: "A success-themed chip with green styling and a matching icon.",
      },
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const chip = await canvas.findByText("Success with icon");
    const icon = await canvas.findByTestId("shield-icon");

    expect(chip).toBeInTheDocument();
    expect(chip.parentNode).toHaveClass("bg-success-100 text-success-700");
    expect(icon).toBeInTheDocument();
  },
};

export const WarningWithIcon: Story = {
  args: {
    label: "Warning with icon",
    variant: "warning",
    icon: <Shield variant="warning" />,
  },
  parameters: {
    docs: {
      description: {
        story: "A warning-themed chip with amber styling and a matching icon.",
      },
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const chip = await canvas.findByText("Warning with icon");
    const icon = await canvas.findByTestId("shield-icon");

    expect(chip).toBeInTheDocument();
    expect(chip.parentNode).toHaveClass("bg-warning-100 text-warning-700");
    expect(icon).toBeInTheDocument();
  },
};

export const ErrorWithIcon: Story = {
  args: {
    label: "Error with icon",
    variant: "error",
    icon: <Shield variant="error" />,
  },
  parameters: {
    docs: {
      description: {
        story: "An error-themed chip with red styling and a matching icon.",
      },
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const chip = await canvas.findByText("Error with icon");
    const icon = await canvas.findByTestId("shield-icon");

    expect(chip).toBeInTheDocument();
    expect(chip.parentNode).toHaveClass("bg-error-100 text-error-700");
    expect(icon).toBeInTheDocument();
  },
};

export const ImportantWithIcon: Story = {
  args: {
    label: "Important with icon",
    variant: "important",
    icon: <Shield variant="important" />,
  },
  parameters: {
    docs: {
      description: {
        story: "An important-themed chip with blue styling and a matching icon.",
      },
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const chip = await canvas.findByText("Important with icon");
    const icon = await canvas.findByTestId("shield-icon");

    expect(chip).toBeInTheDocument();
    expect(chip.parentNode).toHaveClass("bg-info-100 text-info-700");
    expect(icon).toBeInTheDocument();
  },
};

export const DifferentColors: Story = {
  args: {
    label: "Different colors",
    variant: "important",
    className: "bg-success-100 text-primary-pink",
    icon: <Shield variant="important" color="#9D50FF" />,
  },
  parameters: {
    docs: {
      description: {
        story:
          "A chip demonstrating custom color combinations using className and color props.",
      },
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const chip = await canvas.findByText("Different colors");
    const icon = await canvas.findByTestId("shield-icon");

    expect(chip).toBeInTheDocument();
    expect(chip.parentNode).toHaveClass("bg-success-100 text-primary-pink");
    expect(icon).toBeInTheDocument();
  },
};
