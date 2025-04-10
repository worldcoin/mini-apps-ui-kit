import { BulletPoint } from "@/components/BulletPoint/BulletPoint";
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
    </BulletList>
  ),
};

export const WithCustomItems: Story = {
  render: () => (
    <BulletList>
      <BulletListItem
        bulletPoint={
          <BulletPoint>
            <SparkIcon className="text-gray-0" />
          </BulletPoint>
        }
      >
        <Typography variant="body">Regular text item with body styling</Typography>
      </BulletListItem>

      <BulletListItem
        bulletPoint={
          <BulletPoint>
            <SparkIcon className="text-gray-0" />
          </BulletPoint>
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

      <BulletListItem
        bulletPoint={
          <BulletPoint>
            <SparkIcon className="text-gray-0" />
          </BulletPoint>
        }
      >
        Doloribus saepe mollitia sapiente amet hic optio modi officia voluptas nam? Alias
        accusantium doloremque harum commodi veritatis quasi excepturi assumenda rerum?
      </BulletListItem>

      <BulletListItem
        bulletPoint={
          <BulletPoint>
            <SparkIcon className="text-gray-0" />
          </BulletPoint>
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
          <BulletPoint className="bg-success-500">
            <Shield className="text-gray-0" />
          </BulletPoint>
        }
      >
        First bullet point with shield icon
      </BulletListItem>

      <BulletListItem
        bulletPoint={
          <BulletPoint className="bg-error-500">
            <Star className="text-gray-0" />
          </BulletPoint>
        }
      >
        Second bullet point with star icon
      </BulletListItem>
    </BulletList>
  ),
};
