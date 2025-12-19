import type { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "@storybook/test";

import { VerificationBadge, VerificationBadgeProps } from "../src/components/VerificationBadge";

const meta: Meta<VerificationBadgeProps> = {
  title: "Components/VerificationBadge",
  component: VerificationBadge,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A badge component that displays orb verification status. Indicates whether a person is a verified human (orb verified) with a blue badge, or unverified with a gray badge.",
      },
    },
  },
  argTypes: {
    verified: {
      control: "boolean",
      description: "Whether the person is a verified human (orb verified)",
    },
    className: {
      control: "text",
      description: "Additional CSS classes to apply to the badge",
    },
  },
};

export default meta;
type Story = StoryObj<VerificationBadgeProps>;

export const Verified: Story = {
  args: {
    verified: true,
  },
  parameters: {
    docs: {
      description: {
        story: "The verified state displays a blue badge with white icon, indicating the person is a verified human (orb verified).",
      },
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const badge = canvas.getByRole("img", { hidden: true });

    expect(badge).toBeInTheDocument();
  },
};

export const Unverified: Story = {
  args: {
    verified: false,
  },
  parameters: {
    docs: {
      description: {
        story: "The unverified state displays a gray badge with gray icon, indicating the person is not orb verified.",
      },
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const badge = canvas.getByRole("img", { hidden: true });

    expect(badge).toBeInTheDocument();
  },
};

export const WithCustomSize: Story = {
  args: {
    verified: true,
    className: "size-8",
  },
  parameters: {
    docs: {
      description: {
        story: "The badge can be customized with different sizes using className.",
      },
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const badge = canvas.getByRole("img", { hidden: true });

    expect(badge).toBeInTheDocument();
    expect(badge).toHaveClass("size-8");
  },
};

