import Button from "@/components/Button";
import PhoneField, { PhoneFieldProps } from "@/components/PhoneField";
import { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "@storybook/test";
import { useRef, useState } from "react";

import * as Form from "../src/components/Form";
import { iconControl } from "./helpers/icon-control";

const meta: Meta<typeof PhoneField> = {
  title: "components/PhoneField",
  component: PhoneField,
  argTypes: {
    endAdornment: iconControl,
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

type Story = StoryObj<PhoneFieldProps>;

export const Default: Story = {
  render: (args) => {
    const [value, setValue] = useState("");

    return <PhoneField {...args} value={value} onChange={setValue} />;
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const input = (await canvas.getByPlaceholderText("Enter phone number")) as HTMLInputElement;

    expect(input).toBeVisible();
    expect(input).toHaveValue("+1 ");
  },
};

export const WithErrorLabel: Story = {
  render: (args) => {
    const [value, setValue] = useState("");

    return (
      <Form.Root>
        <Form.Field name="phone" className="has-error">
          <Form.Control asChild>
            <PhoneField {...args} value={value} onChange={setValue} />
          </Form.Control>
          <Form.Message error>Error message</Form.Message>
        </Form.Field>
      </Form.Root>
    );
  },
  args: {
    error: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const input = (await canvas.getByPlaceholderText("Enter phone number")) as HTMLInputElement;

    expect(input).toHaveClass("border-error-700 bg-error-100");

    const errorMessage = await canvas.getByText("Error message");

    expect(errorMessage).toBeVisible();
  },
};

export const Disabled: Story = {
  render: (args) => {
    const [value, setValue] = useState("");

    return <PhoneField {...args} value={value} onChange={setValue} />;
  },
  args: {
    disabled: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const input = (await canvas.getByPlaceholderText("Enter phone number")) as HTMLInputElement;
    const selectButton = await canvas.getByRole("combobox");

    expect(input).toBeDisabled();
    expect(selectButton).toBeDisabled();
  },
};

export const ShowValidStateWhenMin12Digits: Story = {
  render: (args) => {
    const [value, setValue] = useState("12345678912");
    const isValid = value.length >= 12;

    return <PhoneField {...args} value={value} onChange={setValue} isValid={isValid} />;
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const input = (await canvas.getByPlaceholderText("Enter phone number")) as HTMLInputElement;
    const tickIcon = await canvas.findByTestId("tick-icon");

    expect(input).toBeVisible();
    expect(input).toHaveValue("+1 (234) 567-8912");
    expect(tickIcon).toBeVisible();
  },
};

export const CustomDefaultCountry: Story = {
  render: (args) => {
    const [value, setValue] = useState("");

    return <PhoneField {...args} value={value} onChange={setValue} />;
  },
  args: {
    defaultCountry: "pl",
  },
};

export const FocusOnButtonClick: Story = {
  render: (args) => {
    const phoneFieldRef = useRef<HTMLInputElement | null>(null);
    const [value, setValue] = useState("");

    const handleButtonClick = () => {
      phoneFieldRef.current?.focus();
    };

    return (
      <>
        <div className="mb-2">
          <Button fullWidth onClick={handleButtonClick}>
            Focus
          </Button>
        </div>
        <PhoneField ref={phoneFieldRef} {...args} value={value} onChange={setValue} />
      </>
    );
  },
};

export const RandomNumber: Story = {
  render: (args) => {
    const [value, setValue] = useState("");

    const handleButtonClick = () => {
      const minLength = 7;
      const maxLength = 15;
      const length = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;
      const randomNumber = Array.from({ length }, () => Math.floor(Math.random() * 10)).join(
        "",
      );
      setValue(randomNumber);
    };

    return (
      <>
        <div className="mb-2">
          <Button fullWidth onClick={handleButtonClick}>
            Generate Random Number
          </Button>
        </div>
        <PhoneField {...args} value={value} onChange={setValue} />
      </>
    );
  },
};
