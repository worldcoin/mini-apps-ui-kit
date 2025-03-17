import type { Meta, StoryObj } from "@storybook/react";

import { BulletList } from "../src/components/BulletList";
import { Typography } from "../src/components/Typography";

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
};

export default meta;
type Story = StoryObj<typeof BulletList>;

export const Default: Story = {
  args: {
    items: [
      "First bullet point with spark icon",
      "Second bullet point with spark icon",
      "Third bullet point with spark icon",
    ],
  },
};

export const WithCustomItems: Story = {
  args: {
    items: [
      <Typography variant="body">Regular text item with body styling</Typography>,

      <div className="flex items-center gap-x-2">
        <span>✅</span>
        <strong>Item with custom content</strong>
      </div>,
    ],
  },
};

export const WithLongText: Story = {
  args: {
    items: [
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore nam soluta, est a nemo commodi illum repudiandae praesentium tempora vel fuga quam laudantium ut nostrum rem, perspiciatis consequatur quibusdam culpa sunt molestias cupiditate autem necessitatibus obcaecati.",
      "Doloribus saepe mollitia sapiente amet hic optio modi officia voluptas nam? Alias accusantium doloremque harum commodi veritatis quasi excepturi assumenda rerum?",
      "Veniam ex corporis animi aliquid autem beatae harum libero quos, rem dolore numquam deleniti reprehenderit impedit eaque nam. Minima debitis laudantium quos perferendis aliquam suscipit ex. Esse earum atque exercitationem et hic ipsum cupiditate, odit illo nihil. Voluptatum magni velit sint maiores accusamus.",
    ],
  },
};
