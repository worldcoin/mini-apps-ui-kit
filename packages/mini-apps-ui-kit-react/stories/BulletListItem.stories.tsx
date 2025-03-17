import BulletPoint from "@/components/BulletPoint/BulletPoint";
import type { Meta, StoryObj } from "@storybook/react";

import { BulletListItem } from "../src/components/BulletListItem";
import { SparkIcon } from "./helpers/icons/SparkIcon";

const meta: Meta<typeof BulletListItem> = {
  title: "components/BulletListItem",
  component: BulletListItem,
  parameters: {
    docs: {
      description: {
        component: "A list item component with a decorative bullet point.",
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="w-[400px]">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof BulletListItem>;

export const Default: Story = {
  args: {
    children: "This is a bullet list item with a spark icon",
  },
};

export const MultipleItems: Story = {
  render: () => (
    <div className="space-y-4">
      <BulletListItem
        bulletPoint={
          <BulletPoint>
            <SparkIcon className="text-gray-0" />
          </BulletPoint>
        }
      >
        First bullet point with spark icon
      </BulletListItem>

      <BulletListItem
        bulletPoint={
          <BulletPoint>
            <SparkIcon className="text-gray-0" />
          </BulletPoint>
        }
      >
        Second bullet point with spark icon
      </BulletListItem>

      <BulletListItem
        bulletPoint={
          <BulletPoint>
            <SparkIcon className="text-gray-0" />
          </BulletPoint>
        }
      >
        Third bullet point with spark icon
      </BulletListItem>
    </div>
  ),
};

export const WithComplexContent: Story = {
  render: () => (
    <BulletListItem
      bulletPoint={
        <BulletPoint>
          <SparkIcon className="text-gray-0" />
        </BulletPoint>
      }
    >
      <p className="flex items-center gap-x-2">
        <span>✅</span>
        <strong>With custom content</strong>
      </p>
    </BulletListItem>
  ),
};

export const WithLongText: Story = {
  render: () => (
    <BulletListItem
      bulletPoint={
        <BulletPoint>
          <SparkIcon className="text-gray-0" />
        </BulletPoint>
      }
    >
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore nam soluta, est a nemo
      commodi illum repudiandae praesentium tempora vel fuga quam laudantium ut nostrum rem,
      perspiciatis consequatur quibusdam culpa sunt molestias cupiditate autem necessitatibus
      obcaecati.
    </BulletListItem>
  ),
};
