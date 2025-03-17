import type { Meta, StoryObj } from "@storybook/react";

import { BulletListItem } from "../src/components/BulletListItem";

const meta: Meta<typeof BulletListItem> = {
  title: "components/BulletListItem",
  component: BulletListItem,
  parameters: {
    docs: {
      description: {
        component:
          "A list item component with a decorative bullet point that uses a spark icon.",
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
      <BulletListItem>First bullet point with spark icon</BulletListItem>
      <BulletListItem>Second bullet point with spark icon</BulletListItem>
      <BulletListItem>Third bullet point with spark icon</BulletListItem>
    </div>
  ),
};

export const WithComplexContent: Story = {
  render: () => (
    <BulletListItem>
      <p className="flex items-center gap-x-2">
        <span>✅</span>
        <strong>With custom content</strong>
      </p>
    </BulletListItem>
  ),
};

export const WithLongText: Story = {
  args: {
    children:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore nam soluta, est a nemo commodi illum repudiandae praesentium tempora vel fuga quam laudantium ut nostrum rem, perspiciatis consequatur quibusdam culpa sunt molestias cupiditate autem necessitatibus obcaecati. Doloribus saepe mollitia sapiente amet hic optio modi officia voluptas nam? Alias accusantium doloremque harum commodi veritatis quasi excepturi assumenda rerum? Veniam ex corporis animi aliquid autem beatae harum libero quos, rem dolore numquam deleniti reprehenderit impedit eaque nam. Minima debitis laudantium quos perferendis aliquam suscipit ex. Esse earum atque exercitationem et hic ipsum cupiditate, odit illo nihil. Voluptatum magni velit sint maiores accusamus.",
  },
};
