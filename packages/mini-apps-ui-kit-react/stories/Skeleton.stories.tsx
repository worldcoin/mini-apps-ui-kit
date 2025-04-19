import type { Meta, StoryObj } from "@storybook/react";

import { Skeleton, SkeletonTypography } from "../src/components/Skeleton/Skeleton";

const meta: Meta<typeof Skeleton> = {
  title: "Components/Skeleton",
  component: Skeleton,
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
    width: {
      control: "number",
    },
    height: {
      control: "number",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
  args: {
    className: "size-12",
  },
};

export const Avatar: Story = {
  args: {
    className: "size-12 rounded-full",
  },
};

export const ComplexLayout: Story = {
  render: () => (
    <div className="max-w-2xl p-6 border rounded-lg space-y-6">
      {/* Header Section */}
      <div className="flex items-start space-x-4 gap-4">
        <Skeleton className="size-10 rounded-full" />
        <div className="flex-1 space-y-2">
          <SkeletonTypography variant="heading" level={2} />
          <SkeletonTypography variant="subtitle" level={1} />
        </div>
        <Skeleton className="size-8 rounded-md" />
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-2 gap-4">
        <Skeleton className="h-[200px] w-full rounded-lg" />
        <div className="space-y-4">
          <SkeletonTypography variant="display" level={1} />
          <SkeletonTypography variant="number" level={2} />
          <div className="flex items-center space-x-2">
            <Skeleton className="size-6 rounded-full" />
            <SkeletonTypography variant="label" level={1} />
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="space-y-3">
        <SkeletonTypography variant="body" level={1} lines={2} />
        <div className="flex items-center space-x-2">
          <Skeleton className="size-4 rounded-sm" />
          <SkeletonTypography variant="body" level={3} />
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-3 gap-4">
        <div className="space-y-2">
          <SkeletonTypography variant="number" level={3} />
          <SkeletonTypography variant="label" level={2} />
        </div>
        <div className="space-y-2">
          <SkeletonTypography variant="number" level={3} />
          <SkeletonTypography variant="label" level={2} />
        </div>
        <div className="space-y-2">
          <SkeletonTypography variant="number" level={3} />
          <SkeletonTypography variant="label" level={2} />
        </div>
      </div>

      {/* Footer Actions */}
      <div className="flex justify-end space-x-4">
        <Skeleton className="h-10 w-24 rounded-md" />
        <Skeleton className="h-10 w-24 rounded-md" />
      </div>
    </div>
  ),
};
