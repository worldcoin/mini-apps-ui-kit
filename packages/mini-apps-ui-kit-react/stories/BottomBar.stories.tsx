import type { Meta, StoryObj } from "@storybook/react";

import { BottomBar } from "../src/components/BottomBar";
import { Button } from "../src/components/Button";

const meta: Meta<typeof BottomBar> = {
  title: "components/BottomBar",
  component: BottomBar,
  argTypes: {
    direction: {
      control: "radio",
      options: ["horizontal", "vertical"],
    },
    children: {
      table: {
        disable: true,
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: "400px", margin: "0 auto" }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    componentSubtitle: "A container for action buttons at the bottom of a view",
    docs: {
      description: {
        component:
          "Provides a consistent layout for primary and secondary actions, supporting both horizontal and vertical arrangements.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
  args: {
    direction: "horizontal",
    children: (
      <>
        <Button variant="secondary" fullWidth>
          Cancel
        </Button>
        <Button variant="primary" fullWidth>
          Confirm
        </Button>
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story:
          "The default layout with buttons arranged side by side. Best for most use cases where screen width allows.",
      },
    },
  },
};

export const Vertical: Story = {
  args: {
    direction: "vertical",
    children: (
      <>
        <Button variant="secondary" fullWidth>
          Cancel
        </Button>
        <Button variant="primary" fullWidth>
          Confirm
        </Button>
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story:
          "Stacks buttons vertically. Useful for narrow viewports or when buttons have long labels.",
      },
    },
  },
};
