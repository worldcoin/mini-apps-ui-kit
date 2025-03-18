import type { Meta, StoryObj } from "@storybook/react";

import { ToggleGroupItem, ToggleGroupRoot } from "../src/components/ToggleGroup/ToggleGroup";

const meta = {
  title: "Components/ToggleGroup",
  component: ToggleGroupRoot,
  subcomponents: { ToggleGroupItem },
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A toggle group component that allows users to select one or multiple options.",
      },
    },
  },
  argTypes: {
    type: {
      control: "radio",
      options: ["single", "multiple"],
      description: "The type of selection that should be used",
    },
    defaultValue: {
      description: "The value of the toggle group when initially rendered",
    },
    value: {
      description: "The controlled value of the toggle group",
    },
    onValueChange: {
      description: "Event handler called when the value changes",
    },
    disabled: {
      control: "boolean",
      description: "When true, prevents the user from interacting with the toggle group",
    },
    loop: {
      control: "boolean",
      description:
        "When true, keyboard navigation will loop from last item to first, and vice versa",
    },
    rovingFocus: {
      control: "boolean",
      description: "When true, the group will get focus on mount",
    },
    dir: {
      control: "radio",
      options: ["ltr", "rtl"],
      description: "The reading direction of the toggle group",
    },
    asChild: {
      control: "boolean",
      description: "Whether this component should be rendered as a child of another component",
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ToggleGroupRoot>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: "single",
    defaultValue: "1d",
  },
  parameters: {
    docs: {
      description: {
        story: "A single-select toggle group where only one option can be selected at a time.",
      },
    },
  },
  render: () => (
    <ToggleGroupRoot type="single" defaultValue="1d">
      <ToggleGroupItem value="1d">1D</ToggleGroupItem>
      <ToggleGroupItem value="1w">1W</ToggleGroupItem>
      <ToggleGroupItem value="1m">1M</ToggleGroupItem>
      <ToggleGroupItem value="1y">1Y</ToggleGroupItem>
    </ToggleGroupRoot>
  ),
};

export const Multiple: Story = {
  args: {
    type: "multiple",
    defaultValue: ["1d"],
  },
  parameters: {
    docs: {
      description: {
        story:
          "A multi-select toggle group where multiple options can be selected simultaneously.",
      },
    },
  },
  render: () => (
    <ToggleGroupRoot type="multiple" defaultValue={["1d"]}>
      <ToggleGroupItem value="1d">1D</ToggleGroupItem>
      <ToggleGroupItem value="1w">1W</ToggleGroupItem>
      <ToggleGroupItem value="1m">1M</ToggleGroupItem>
      <ToggleGroupItem value="1y">1Y</ToggleGroupItem>
    </ToggleGroupRoot>
  ),
};

export const Disabled: Story = {
  args: {
    type: "single",
    defaultValue: "1d",
  },
  parameters: {
    docs: {
      description: {
        story: "A toggle group with a disabled option that cannot be selected.",
      },
    },
  },
  render: () => (
    <ToggleGroupRoot type="single" defaultValue="1d">
      <ToggleGroupItem value="1d">1D</ToggleGroupItem>
      <ToggleGroupItem value="1w" disabled>
        1W
      </ToggleGroupItem>
      <ToggleGroupItem value="1m">1M</ToggleGroupItem>
      <ToggleGroupItem value="1y">1Y</ToggleGroupItem>
    </ToggleGroupRoot>
  ),
};
