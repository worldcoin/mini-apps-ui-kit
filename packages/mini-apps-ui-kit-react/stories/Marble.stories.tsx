import type { Meta, StoryObj } from "@storybook/react";

import marble1 from "../public/images/marbles/marble1.png";
import marble2 from "../public/images/marbles/marble2.png";
import marble3 from "../public/images/marbles/marble3.svg";
import { Marble } from "../src/components/Marble";

const meta: Meta<typeof Marble> = {
  title: "components/Marble",
  component: Marble,
  parameters: {
    docs: {
      description: {
        component:
          "A circular component that displays an image with a border, resembling a marble.",
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="p-4">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Marble>;

export const Default: Story = {
  args: {
    imageUrl: marble1,
  },
};

export const MultipleMarbles: Story = {
  render: () => (
    <div className="flex gap-4">
      <Marble imageUrl={marble1} />
      <Marble imageUrl={marble2} />
      <Marble imageUrl={marble3} />
    </div>
  ),
};

export const DifferentSizes: Story = {
  render: () => (
    <div className="flex gap-4 items-center">
      <Marble imageUrl={marble1} className="size-32" />
      <Marble imageUrl={marble2} className="size-24" />
      <Marble imageUrl={marble3} className="size-16" />
    </div>
  ),
};
