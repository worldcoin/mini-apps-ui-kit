import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import Button from "../src/components/Button";
import Select, { SelectOption, SelectProps } from "../src/components/Select";

const meta: Meta<typeof Select> = {
  title: "components/Select",
  component: Select,
  argTypes: {
    value: {
      control: false,
    },
  },
  decorators: [
    (Story) => (
      <div className="w-[300px]">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<SelectProps>;

const options: SelectOption[] = [
  { value: "10", label: "$10" },
  { value: "25", label: "$25" },
  { value: "50", label: "$50" },
  { value: "100", label: "$100" },
];

export const Default: Story = {
  render: (args) => {
    const [selectedValue, setSelectedValue] = useState<string | undefined>();

    return <Select {...args} value={selectedValue} onChange={setSelectedValue} />;
  },
  args: {
    options,
    placeholder: "Value",
  },
};

export const WithDefaultValue: Story = {
  render: (args) => {
    return <Select {...args} />;
  },
  args: {
    options,
    defaultValue: options[0].value,
    placeholder: "Value",
  },
};

export const Disabled: Story = {
  render: (args) => {
    return <Select {...args} />;
  },
  args: {
    options,
    placeholder: "Value",
    disabled: true,
  },
};

export const WithError: Story = {
  render: (args) => {
    const [selectedValue, setSelectedValue] = useState<string | undefined>();

    return <Select {...args} value={selectedValue} onChange={setSelectedValue} />;
  },
  args: {
    options,
    placeholder: "Value",
    error: "Error message",
  },
};

export const WithDefaultOpen: Story = {
  render: (args) => {
    const [selectedValue, setSelectedValue] = useState<string | undefined>();

    return <Select {...args} value={selectedValue} onChange={setSelectedValue} />;
  },
  args: {
    options,
    placeholder: "Value",
    defaultOpen: true,
  },
};

export const LongList: Story = {
  render: (args) => {
    const [selectedValue, setSelectedValue] = useState<string | undefined>();

    return <Select {...args} value={selectedValue} onChange={setSelectedValue} />;
  },
  args: {
    options: Array.from({ length: 100 }, (_, idx) => idx + 1)
      .filter((value) => value % 5 === 0 || value % 10 === 0)
      .map((value) => ({
        value: value.toString(),
        label: `$${value}`,
      })),
    placeholder: "Scroll through options",
  },
};

export const ControlledOpen: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState<string | undefined>();

    const handleButtonClick = () => {
      setOpen((prev) => !prev);
    };

    return (
      <>
        <div className="mb-2">
          <Button fullWidth onClick={handleButtonClick}>
            Toggle Dropdown
          </Button>
        </div>
        <Select
          {...args}
          value={selectedValue}
          onChange={setSelectedValue}
          open={open}
          onOpenChange={setOpen}
        />
      </>
    );
  },
  args: {
    options,
    placeholder: "Controlled open",
  },
};
