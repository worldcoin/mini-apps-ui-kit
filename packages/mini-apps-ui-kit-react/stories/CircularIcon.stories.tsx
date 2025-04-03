import type { Meta, StoryObj } from "@storybook/react";

import { CircularIcon } from "../src/components/CircularIcon/CircularIcon";
import { iconControl } from "./helpers/icon-control";
import { SparkIcon } from "./helpers/icons/SparkIcon";

const meta = {
  title: "Components/CircularIcon",
  component: CircularIcon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: iconControl,
  },
} satisfies Meta<typeof CircularIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <SparkIcon />,
    className: "bg-gray-200",
    size: "md",
  },
};
