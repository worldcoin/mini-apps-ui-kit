import type { Meta, StoryObj } from "@storybook/react";

import { ColorPickerGroup, ColorPickerItem } from "@/components/ColorPicker";

const meta: Meta<typeof ColorPickerGroup> = {
  title: "components/ColorPicker",
  component: ColorPickerGroup,
  parameters: {
    docs: {
      description: {
        component: "A color picker input component with a visual color preview.",
      },
    },
  },
  argTypes: {
    value: {
      control: "color",
      description: "The current color value",
    },
    disabled: {
      control: "boolean",
      description: "Disabled state",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    return (
      <ColorPickerGroup {...args}>
        <ColorPickerItem value="#9D50FF" />
        <ColorPickerItem value="#4940E0" />
        <ColorPickerItem value="#00C3B6" />
        <ColorPickerItem value="#FF5096" />
      </ColorPickerGroup>
    );
  },
};
