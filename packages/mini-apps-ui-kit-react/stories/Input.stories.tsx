import type { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "@storybook/test";

import { Input, InputProps } from "../src/components/Input";
import { iconControl } from "./helpers/icon-control";
import { CountryCode } from "./helpers/icons/CountryCode";
import { Switch } from "./helpers/icons/Switch";

const meta: Meta<InputProps> = {
  title: "components/Input",
  component: Input,
  parameters: {
    docs: {
      description: {
        component:
          "A customizable text input component that supports adornments and various states.",
      },
    },
  },
  argTypes: {
    startAdornment: iconControl,
    endAdornment: iconControl,
    type: {
      control: false,
    },
    disabled: {
      control: "boolean",
    },
    value: {
      control: "text",
      description: "The input's value. Follows standard HTML input behavior.",
    },
    onChange: {
      control: false,
      description:
        "Callback fired when the input's value changes. Follows standard HTML input behavior.",
    },
  },
  decorators: [
    (Story) => (
      <div className="w-80 flex justify-center">
        <Story />
      </div>
    ),
  ],
};
export default meta;
type Story = StoryObj<InputProps>;

export const Text: Story = {
  args: {
    label: "Name",
    id: "name",
  },
  parameters: {
    docs: {
      description: {
        story: "Basic text input with placeholder text.",
      },
    },
  },
  parameters: {
    docs: {
      description: {
        story: "Basic text input with placeholder text.",
      },
    },
  },
  parameters: {
    docs: {
      description: {
        story: "Basic text input with placeholder text.",
      },
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = await canvas.findByPlaceholderText("Name");

    expect(input).toBeInTheDocument();
  },
};

export const PersistLabel: Story = {
  args: {
    label: "Email",
    id: "email",
    variant: "floating-label",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Input with a persistent floating label that remains visible above the input field.",
      },
    },
  },
  parameters: {
    docs: {
      description: {
        story: "Input in a disabled state where user interaction is prevented.",
      },
    },
  },
  parameters: {
    docs: {
      description: {
        story: "Input in a disabled state where user interaction is prevented.",
      },
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = await canvas.findByPlaceholderText("Email");
    const label = await canvas.findByLabelText("Email");

    expect(input).toBeInTheDocument();
    expect(label).toBeInTheDocument();
  },
};

export const Disabled: Story = {
  args: {
    label: "Name",
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Input in a disabled state where user interaction is prevented.",
      },
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = await canvas.findByPlaceholderText("Name");

    expect(input).toBeDisabled();
  },
};

export const StartCustomSizeIcon: Story = {
  args: {
    label: "Number",
    startAdornment: <CountryCode />,
    startAdornmentWidth: 4.5,
  },
  parameters: {
    docs: {
      description: {
        story: "Input with a custom-sized icon at the start position.",
      },
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const icon = await canvas.findByTestId("country-code-icon");

    expect(icon).toBeInTheDocument();
  },
};

export const EndCustomSizeIcon: Story = {
  args: {
    label: "Number",
    endAdornment: <Switch />,
    endAdornmentWidth: 2,
  },
  parameters: {
    docs: {
      description: {
        story: "Input with a custom-sized icon at the end position.",
      },
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const icon = await canvas.findByTestId("switch-icon");

    expect(icon).toBeInTheDocument();
  },
};
