import { CircularIcon } from "@/components/CircularIcon";
import type { Meta, StoryObj } from "@storybook/react";

import { BulletList, BulletListItem } from "../src/components/BulletList";
import "../src/components/BulletList";
import { Typography } from "../src/components/Typography";
import { Shield } from "./helpers/icons/Shield";
import { SparkIcon } from "./helpers/icons/SparkIcon";
import { Star } from "./helpers/icons/Star";

const meta: Meta<typeof BulletList> = {
  title: "components/BulletList",
  component: BulletList,
  parameters: {
    docs: {
      description: {
        component: "A component that renders a list of BulletListItems with spark icons.",
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
  subcomponents: { BulletListItem },
};

export default meta;
type Story = StoryObj<typeof BulletList>;

export const Default: Story = {
  render: () => (
    <BulletList>
      <BulletListItem
        bulletPoint={
          <CircularIcon className="size-9 bg-gray-900">
            <SparkIcon className="text-gray-0" />
          </CircularIcon>
        }
      >
        First bullet point with spark icon
      </BulletListItem>

      <BulletListItem
        bulletPoint={
          <CircularIcon className="size-9 bg-gray-900">
            <SparkIcon className="text-gray-0" />
          </CircularIcon>
        }
      >
        Second bullet point with spark icon
      </BulletListItem>

      <BulletListItem
        bulletPoint={
          <CircularIcon className="size-9 bg-gray-900">
            <SparkIcon className="text-gray-0" />
          </CircularIcon>
        }
      >
        Third bullet point with spark icon
      </BulletListItem>
    </BulletList>
  ),
};

export const WithCustomItems: Story = {
  render: () => (
    <BulletList>
      <BulletListItem
        bulletPoint={
          <CircularIcon className="size-9 bg-gray-900">
            <SparkIcon className="text-gray-0" />
          </CircularIcon>
        }
      >
        <Typography variant="body">Regular text item with body styling</Typography>
      </BulletListItem>

      <BulletListItem
        bulletPoint={
          <CircularIcon className="size-9 bg-gray-900">
            <SparkIcon className="text-gray-0" />
          </CircularIcon>
        }
      >
        <div className="flex items-center gap-x-2">
          <span>✅</span>
          <strong>Item with custom content</strong>
        </div>
      </BulletListItem>
    </BulletList>
  ),
};

export const WithLongText: Story = {
  render: () => (
    <BulletList>
      <BulletListItem
        bulletPoint={
          <CircularIcon className="size-9 bg-gray-900">
            <SparkIcon className="text-gray-0" />
          </CircularIcon>
        }
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore nam soluta, est a nemo
        commodi illum repudiandae praesentium tempora vel fuga quam laudantium ut nostrum rem,
        perspiciatis consequatur quibusdam culpa sunt molestias cupiditate autem necessitatibus
        obcaecati.
      </BulletListItem>

      <BulletListItem
        bulletPoint={
          <CircularIcon className="size-9 bg-gray-900">
            <SparkIcon className="text-gray-0" />
          </CircularIcon>
        }
      >
        Doloribus saepe mollitia sapiente amet hic optio modi officia voluptas nam? Alias
        accusantium doloremque harum commodi veritatis quasi excepturi assumenda rerum?
      </BulletListItem>

      <BulletListItem
        bulletPoint={
          <CircularIcon className="size-9 bg-gray-900">
            <SparkIcon className="text-gray-0" />
          </CircularIcon>
        }
      >
        Veniam ex corporis animi aliquid autem beatae harum libero quos, rem dolore numquam
        deleniti reprehenderit impedit eaque nam. Minima debitis laudantium quos perferendis
        aliquam suscipit ex. Esse earum atque exercitationem et hic ipsum cupiditate, odit illo
        nihil. Voluptatum magni velit sint maiores accusamus.
      </BulletListItem>
    </BulletList>
  ),
};

export const WithCustomBullet: Story = {
  render: () => (
    <BulletList>
      <BulletListItem
        bulletPoint={
          <CircularIcon className="bg-success-500">
            <Shield className="text-gray-0" />
          </CircularIcon>
        }
      >
        First bullet point with shield icon
      </BulletListItem>

      <BulletListItem
        bulletPoint={
          <CircularIcon className="bg-error-500">
            <Star className="text-gray-0" />
          </CircularIcon>
        }
      >
        Second bullet point with star icon
      </BulletListItem>
    </BulletList>
  ),
};
