import type { Meta, StoryObj } from "@storybook/react";

import { expect, within } from "@storybook/test";

import Chip, { ChipProps } from "../../src/components/Chip";
import { ChipIconExample } from "./ChipIconExample";

const meta: Meta<ChipProps> = {
  title: "components/Chip",
  component: Chip,
  argTypes: {
    icon: {
      control: false,
    },
  },
};

export default meta;

type Story = StoryObj<ChipProps>;

export const Default: Story = {
  args: {
    label: "Default",
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
    icon: <ChipIconExample />,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const chip = await canvas.findByText("Default with icon");
    const icon = await canvas.findByTestId("chip-icon");

    expect(chip).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
  },
};

export const SuccessWithIcon: Story = {
  args: {
    label: "Success with icon",
    variant: "success",
    icon: <ChipIconExample variant="success" />,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const chip = await canvas.findByText("Success with icon");
    const icon = await canvas.findByTestId("chip-icon");

    expect(chip).toBeInTheDocument();
    expect(chip.parentNode).toHaveClass("bg-success-100 text-success-700");
    expect(icon).toBeInTheDocument();
  },
};

export const WarningWithIcon: Story = {
  args: {
    label: "Warning with icon",
    variant: "warning",
    icon: <ChipIconExample variant="warning" />,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const chip = await canvas.findByText("Warning with icon");
    const icon = await canvas.findByTestId("chip-icon");

    expect(chip).toBeInTheDocument();
    expect(chip.parentNode).toHaveClass("bg-warning-100 text-warning-700");
    expect(icon).toBeInTheDocument();
  },
};

export const ErrorWithIcon: Story = {
  args: {
    label: "Error with icon",
    variant: "error",
    icon: <ChipIconExample variant="error" />,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const chip = await canvas.findByText("Error with icon");
    const icon = await canvas.findByTestId("chip-icon");

    expect(chip).toBeInTheDocument();
    expect(chip.parentNode).toHaveClass("bg-error-100 text-error-700");
    expect(icon).toBeInTheDocument();
  },
};

export const ImportantWithIcon: Story = {
  args: {
    label: "Important with icon",
    variant: "important",
    icon: <ChipIconExample variant="important" />,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const chip = await canvas.findByText("Important with icon");
    const icon = await canvas.findByTestId("chip-icon");

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
    icon: <ChipIconExample variant="important" color="#9D50FF" />,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const chip = await canvas.findByText("Different colors");
    const icon = await canvas.findByTestId("chip-icon");

    expect(chip).toBeInTheDocument();
    expect(chip.parentNode).toHaveClass("bg-success-100 text-primary-pink");
    expect(icon).toBeInTheDocument();
  },
};
