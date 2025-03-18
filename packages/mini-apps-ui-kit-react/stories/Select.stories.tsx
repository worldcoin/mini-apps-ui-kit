import { Meta, StoryObj } from "@storybook/react";
import { expect, fireEvent, waitFor, within } from "@storybook/test";
import { useState } from "react";

import { Button } from "../src/components/Button";
import { Form } from "../src/components/Form";
import { Select, SelectOption, SelectProps } from "../src/components/Select";

const meta: Meta<typeof Select> = {
  title: "components/Select",
  component: Select,
  parameters: {
    docs: {
      description: {
        component:
          "A select component that provides a dropdown list of options with support for default values, disabled state, and error handling.",
      },
    },
  },
  argTypes: {
    value: {
      control: false,
    },
  },
  decorators: [
    (Story) => (
      <div className="w-[300px]" data-testid="select-container">
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
  parameters: {
    docs: {
      description: {
        story: "Basic select component with placeholder and dropdown options.",
      },
    },
  },
  args: {
    options,
    placeholder: "Value",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const placeholder = await canvas.getByText("Value");

    expect(placeholder).toBeInTheDocument();

    const selectInput = await canvas.getByRole("combobox");

    expect(selectInput).toBeInTheDocument();
  },
};

export const WithDefaultValue: Story = {
  render: (args) => {
    return <Select {...args} />;
  },
  parameters: {
    docs: {
      description: {
        story: "Select component initialized with a pre-selected value.",
      },
    },
  },
  args: {
    options,
    defaultValue: options[0].value,
    placeholder: "Value",
  },
  play: async ({ canvasElement }) => {
    let selectViewport: Element | null = null;
    const canvas = within(canvasElement);

    const selectedValue = await canvas.getByText("$10");

    expect(selectedValue).toBeVisible();

    const selectInput = await canvas.getByRole("combobox");

    fireEvent.click(selectInput);

    await waitFor(() => {
      selectViewport = document.body.querySelector("[data-radix-select-viewport]");

      expect(selectViewport).toBeVisible();
    });

    let collectionItems = selectViewport!.querySelectorAll("[data-radix-collection-item]");

    expect(collectionItems.length).toBe(options.length);

    fireEvent.click(collectionItems[1]);

    await waitFor(async () => {
      const selectedValue = await canvas.getByText("$25");

      expect(selectedValue).toBeVisible();
    });

    fireEvent.click(selectInput);

    await waitFor(() => {
      selectViewport = document.body.querySelector("[data-radix-select-viewport]");

      expect(selectViewport).toBeVisible();
    });

    collectionItems = selectViewport!.querySelectorAll("[data-radix-collection-item]");

    fireEvent.click(collectionItems[0]);

    await waitFor(async () => {
      const selectedValue = await canvas.getByText("$10");

      expect(selectedValue).toBeVisible();
    });
  },
};

export const Disabled: Story = {
  render: (args) => {
    return <Select {...args} />;
  },
  parameters: {
    docs: {
      description: {
        story: "Select component in a disabled state where user interaction is prevented.",
      },
    },
  },
  args: {
    options,
    placeholder: "Value",
    disabled: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const selectInput = await canvas.getByRole("combobox");

    expect(selectInput).toBeDisabled();
  },
};

export const WithErrorLabel: Story = {
  render: (args) => {
    const [selectedValue, setSelectedValue] = useState<string | undefined>();

    return (
      <Form.Root>
        <Form.Field name="select" className="has-error">
          <Form.Control asChild>
            <Select {...args} value={selectedValue} onChange={setSelectedValue} />
          </Form.Control>
          <Form.Message error>Error message</Form.Message>
        </Form.Field>
      </Form.Root>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Select component in an error state with error message display.",
      },
    },
  },
  args: {
    options,
    placeholder: "Value",
    error: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const selectInput = await canvas.getByRole("combobox");

    expect(selectInput).toHaveClass("shadow-none border-error-700 bg-error-100");

    const errorMessage = await canvas.getByText("Error message");

    expect(errorMessage).toBeVisible();
  },
};

export const WithDefaultOpen: Story = {
  render: (args) => {
    const [selectedValue, setSelectedValue] = useState<string | undefined>();

    return <Select {...args} value={selectedValue} onChange={setSelectedValue} />;
  },
  parameters: {
    docs: {
      description: {
        story: "Select component that opens its dropdown automatically on mount.",
      },
    },
  },
  args: {
    options,
    placeholder: "Value",
    defaultOpen: true,
  },
  play: async () => {
    const selectViewport = document.body.querySelector("[data-radix-select-viewport]");

    expect(selectViewport).toBeVisible();
  },
};

const longListOptions = Array.from({ length: 100 }, (_, idx) => idx + 1)
  .filter((value) => value % 5 === 0 || value % 10 === 0)
  .map((value) => ({
    value: value.toString(),
    label: `$${value}`,
  }));

export const LongList: Story = {
  render: (args) => {
    const [selectedValue, setSelectedValue] = useState<string | undefined>();

    return <Select {...args} value={selectedValue} onChange={setSelectedValue} />;
  },
  parameters: {
    docs: {
      description: {
        story: "Select component with a scrollable list of many options.",
      },
    },
  },
  args: {
    options: longListOptions,
    placeholder: "Scroll through options",
  },
  play: async ({ canvasElement }) => {
    let selectViewport: Element | null = null;
    const canvas = within(canvasElement);

    const selectInput = await canvas.getByRole("combobox");

    fireEvent.click(selectInput);

    await waitFor(() => {
      selectViewport = document.body.querySelector("[data-radix-select-viewport]");

      expect(selectViewport).toBeVisible();
    });

    const collectionItems = selectViewport!.querySelectorAll("[data-radix-collection-item]");

    expect(collectionItems.length).toBe(longListOptions.length);
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
  parameters: {
    docs: {
      description: {
        story: "Select component with externally controlled open state via a toggle button.",
      },
    },
  },
  args: {
    options,
    placeholder: "Controlled open",
  },
  play: async ({ canvasElement }) => {
    let selectViewport: Element | null = null;
    const canvas = within(canvasElement);

    const button = await canvas.getByText("Toggle Dropdown");

    expect(button).toBeVisible();

    fireEvent.click(button);

    await waitFor(() => {
      selectViewport = document.body.querySelector("[data-radix-select-viewport]");

      expect(selectViewport).toBeVisible();
    });

    fireEvent.click(button);

    await waitFor(() => {
      selectViewport = document.body.querySelector("[data-radix-select-viewport]");

      expect(selectViewport).not.toBeInTheDocument();
    });
  },
};
