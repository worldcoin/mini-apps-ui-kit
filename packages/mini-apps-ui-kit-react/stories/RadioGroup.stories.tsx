import type { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, within } from "@storybook/test";
import { useState } from "react";

import { RadioGroup, RadioGroupItem } from "../src/components/RadioGroup";
import { cn } from "../src/lib/utils";

const meta: Meta<typeof RadioGroup> = {
  title: "components/RadioGroup",
  component: RadioGroup,
  parameters: {
    docs: {
      description: {
        component:
          "A radio group component that allows users to select a single option from a list of choices.",
      },
    },
  },
  subcomponents: {
    RadioGroupItem: RadioGroupItem as React.ComponentType<unknown>,
  },
  parameters: {
    docs: {
      description: {
        component:
          "A radio group component that extends [Radix's RadioGroup](https://www.radix-ui.com/primitives/docs/components/radio-group) primitive, allowing users to select a single option from a list of options.",
      },
    },
  },
  argTypes: {
    defaultValue: {
      control: false,
    },
    orientation: {
      table: {
        defaultValue: { summary: "vertical" },
      },
    },
    name: {
      control: false,
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

const options = ["option1", "option2", "option3"];

export const Default: Story = {
  render: (args) => (
    <RadioGroup {...args}>
      {options.map((value) => (
        <div
          className={cn("flex items-center", args.orientation === "vertical" ? "pb-2" : "pr-2")}
          key={value}
        >
          <RadioGroupItem value={value} />
        </div>
      ))}
    </RadioGroup>
  ),
  parameters: {
    docs: {
      description: {
        story: "Basic radio group with vertical orientation and unlabeled options.",
      },
    },
  },
  args: {
    defaultValue: "option1",
    orientation: "vertical",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const radioGroupElement = await canvas.findByRole("radiogroup");

    expect(radioGroupElement).toBeInTheDocument();
    expect(radioGroupElement).toHaveAttribute("aria-orientation", "vertical");

    const radioGroupItems = await canvas.findAllByRole("radio");

    expect(radioGroupItems).toHaveLength(options.length);
    expect(radioGroupItems[0]).toBeChecked();
    expect(radioGroupItems[1]).not.toBeChecked();
    expect(radioGroupItems[2]).not.toBeChecked();
  },
};

export const WithLabels: Story = {
  render: (args) => (
    <RadioGroup {...args}>
      {options.map((value, index) => {
        const id = `WithLabels-${String(index + 1)}`;

        return (
          <div
            className={cn(
              "flex items-center space-x-2",
              args.orientation === "vertical" ? "pb-2" : "pr-2",
            )}
            key={value}
          >
            <RadioGroupItem value={value} id={id} />
            <label htmlFor={id}>{value}</label>
          </div>
        );
      })}
    </RadioGroup>
  ),
  parameters: {
    docs: {
      description: {
        story: "Radio group with labeled options for better accessibility and user experience.",
      },
    },
  },
  args: {
    defaultValue: "option2",
    orientation: "vertical",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const labelOptions = await Promise.all(options.map((value) => canvas.findByText(value)));

    expect(labelOptions).toHaveLength(options.length);

    const radioGroupItems = await canvas.findAllByRole("radio");

    expect(radioGroupItems[0]).not.toBeChecked();

    await userEvent.click(radioGroupItems[0]);

    expect(radioGroupItems[0]).toBeChecked();

    await userEvent.click(radioGroupItems[1]);

    expect(radioGroupItems[0]).not.toBeChecked();
  },
};

export const DisabledItems: Story = {
  render: (args) => (
    <RadioGroup {...args}>
      {options.map((value, index) => {
        const id = `DisabledItems-${String(index + 1)}`;
        const disabled = value === "option2";
        const label = disabled ? `${value} (Disabled)` : value;

        return (
          <div
            className={cn(
              "flex items-center space-x-2",
              args.orientation === "vertical" ? "pb-2" : "pr-2",
            )}
            key={value}
          >
            <RadioGroupItem value={value} id={id} disabled={disabled} />
            <label htmlFor={id}>{label}</label>
          </div>
        );
      })}
    </RadioGroup>
  ),
  parameters: {
    docs: {
      description: {
        story: "Radio group demonstrating disabled state for specific options.",
      },
    },
  },
  args: {
    defaultValue: "option1",
    orientation: "vertical",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const radioGroupItems = await canvas.findAllByRole("radio");

    expect(radioGroupItems).toHaveLength(options.length);
    expect(radioGroupItems[0]).not.toBeDisabled();
    expect(radioGroupItems[1]).toBeDisabled();
    expect(radioGroupItems[2]).not.toBeDisabled();
  },
};

export const Controlled: Story = {
  render: (args) => {
    const [selectedValue, setSelectedValue] = useState(args.defaultValue);

    return (
      <RadioGroup {...args} value={selectedValue} onChange={setSelectedValue}>
        {options.map((value) => (
          <div
            className={cn(
              "flex items-center",
              args.orientation === "vertical" ? "pb-2" : "pr-2",
            )}
            key={value}
          >
            <RadioGroupItem value={value} />
          </div>
        ))}
      </RadioGroup>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Radio group as a controlled component with external state management.",
      },
    },
  },
  args: {
    defaultValue: "option3",
    orientation: "vertical",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const radioGroupItems = await canvas.findAllByRole("radio");

    expect(radioGroupItems).toHaveLength(options.length);
    expect(radioGroupItems[0]).not.toBeChecked();
    expect(radioGroupItems[1]).not.toBeChecked();
    expect(radioGroupItems[2]).toBeChecked();

    await userEvent.click(radioGroupItems[1]);

    expect(radioGroupItems[0]).not.toBeChecked();
    expect(radioGroupItems[1]).toBeChecked();
    expect(radioGroupItems[2]).not.toBeChecked();
  },
};

export const OneControlledRadioElement: Story = {
  render: (args) => {
    const [option1] = options;
    const [selectedValue, setSelectedValue] = useState("");
    const [_isRadioChecked, setIsRadioChecked] = useState(false);

    const handleOnClick = () => {
      setIsRadioChecked((prevState) => {
        const result = !prevState;
        setSelectedValue(result ? option1 : "");
        return result;
      });
    };

    return (
      <RadioGroup {...args} value={selectedValue} onClick={handleOnClick}>
        <RadioGroupItem value={option1} />
      </RadioGroup>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Radio group with a single controlled radio element that can be toggled on and off.",
      },
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const radioGroupItem = await canvas.findByRole("radio");

    expect(radioGroupItem).not.toBeChecked();

    await userEvent.click(radioGroupItem);

    expect(radioGroupItem).toBeChecked();

    await userEvent.click(radioGroupItem);

    expect(radioGroupItem).not.toBeChecked();
  },
};
