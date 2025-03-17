import { Button } from "@/components/Button";
import { countryCodes } from "@/components/Flag/constants";
import { PhoneField, PhoneFieldProps } from "@/components/PhoneField";
import { Meta, StoryObj } from "@storybook/react";
import { expect, fireEvent, userEvent, waitFor, within } from "@storybook/test";
import { useRef, useState } from "react";

import { Form } from "../src/components/Form";
import { iconControl } from "./helpers/icon-control";

const meta: Meta<typeof PhoneField> = {
  title: "components/PhoneField",
  component: PhoneField,
  parameters: {
    docs: {
      description: {
        component:
          "A phone number input field with country code selection and formatting support.",
      },
    },
  },
  argTypes: {
    endAdornment: iconControl,
    disableDialCodePrefill: {
      control: false,
    },
    defaultCountryCode: {
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

type Story = StoryObj<PhoneFieldProps>;

export const Default: Story = {
  render: (args) => {
    const [value, setValue] = useState("");

    return <PhoneField {...args} value={value} onChange={setValue} />;
  },
  parameters: {
    docs: {
      description: {
        story: "The default phone field with country code selector as a dropdown.",
      },
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const input = (await canvas.getByPlaceholderText("Phone")) as HTMLInputElement;
    const selectButton = await canvas.getByRole("combobox");

    expect(input).toBeVisible();
    expect(input).toHaveValue("");
    expect(selectButton).toBeVisible();
    expect(selectButton.childNodes[0].childNodes).toHaveLength(3);

    const [selectButtonFlag, selectButtonDialCode, selectButtonArrow] =
      selectButton.childNodes[0].childNodes;

    expect(selectButtonFlag).toBeVisible();
    expect(selectButtonDialCode).toBeVisible();
    expect(selectButtonDialCode).toHaveTextContent("+1");
    expect(selectButtonArrow).toBeVisible();
  },
};

export const CountrySelectorAsDrawer: Story = {
  render: (args) => {
    const [value, setValue] = useState("");

    return <PhoneField {...args} value={value} onChange={setValue} />;
  },
  parameters: {
    docs: {
      description: {
        story:
          "Phone field with country selector displayed as a bottom drawer, suitable for mobile interfaces.",
      },
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    let drawer: HTMLDivElement | null = null;
    let searchInput: HTMLInputElement | null = null;
    let countryElements: NodeListOf<Element> | null = null;

    let input = (await canvas.getByPlaceholderText("Phone")) as HTMLInputElement;

    expect(input).toHaveValue("");

    const selectButton = await canvas.getByTestId("country-selector-button");

    fireEvent.click(selectButton);

    await waitFor(async () => {
      drawer = document.body.querySelector("[data-vaul-drawer]");

      countryElements = drawer!.querySelectorAll("[data-country]");

      expect(countryElements).toHaveLength(countryCodes.length);

      searchInput = (await within(drawer!).getByPlaceholderText(
        "Search name or number",
      )) as HTMLInputElement;

      expect(searchInput).toBeVisible();
    });

    userEvent.type(searchInput!, "United S");

    await waitFor(() => {
      countryElements = drawer!.querySelectorAll("[data-country]");

      expect(countryElements).toHaveLength(1);
    });

    fireEvent.click(countryElements![0]);

    await waitFor(async () => {
      input = (await canvas.getByPlaceholderText("Phone")) as HTMLInputElement;

      expect(input).toHaveValue("+1 ");
    });

    userEvent.clear(input);
  },
};

export const AllowedCountryCodesProvided: Story = {
  render: (args) => {
    const [value, setValue] = useState("");

    return <PhoneField {...args} value={value} onChange={setValue} />;
  },
  parameters: {
    docs: {
      description: {
        story: "Phone field with a restricted list of available country codes.",
      },
    },
  },
  args: {
    disableDialCodePrefill: false,
    defaultCountryCode: "DE",
    countries: ["DE", "PL"],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    let drawer: HTMLDivElement | null = null;
    let searchInput: HTMLInputElement | null = null;
    let countryElements: NodeListOf<Element> | null = null;

    const selectButton = await canvas.getByTestId("country-selector-button");

    fireEvent.click(selectButton);

    await waitFor(async () => {
      drawer = document.body.querySelector("[data-vaul-drawer]");

      countryElements = drawer!.querySelectorAll("[data-country]");

      expect(countryElements).toHaveLength(2);

      searchInput = (await within(drawer!).getByPlaceholderText(
        "Search name or number",
      )) as HTMLInputElement;

      expect(searchInput).toBeVisible();
    });

    userEvent.type(searchInput!, "Germany");

    await waitFor(() => {
      countryElements = drawer!.querySelectorAll("[data-country]");

      expect(countryElements).toHaveLength(1);
    });

    fireEvent.click(countryElements![0]);
  },
};

export const DialCodeInInputOnInitialization: Story = {
  render: (args) => {
    const [value, setValue] = useState("");

    return <PhoneField {...args} value={value} onChange={setValue} />;
  },
  parameters: {
    docs: {
      description: {
        story:
          "Phone field that automatically includes the country dial code in the input field on initialization.",
      },
    },
  },
  args: {
    disableDialCodePrefill: false,
    defaultCountryCode: "DE",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const input = (await canvas.getByPlaceholderText("Phone")) as HTMLInputElement;
    const selectButton = await canvas.getByRole("combobox");

    expect(input).toBeVisible();
    expect(input).toHaveValue("+49 ");
    expect(selectButton).toBeVisible();
    expect(selectButton.childNodes[0].childNodes).toHaveLength(3);

    const [selectButtonFlag, selectButtonDialCode, selectButtonArrow] =
      selectButton.childNodes[0].childNodes;

    expect(selectButtonFlag).toBeVisible();
    expect(selectButtonDialCode).toBeVisible();
    expect(selectButtonDialCode).toHaveTextContent("+49");
    expect(selectButtonArrow).toBeVisible();
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
  parameters: {
    docs: {
      description: {
        story: "Phone field in an error state with error message display.",
      },
    },
  },
  args: {
    error: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const input = (await canvas.getByPlaceholderText("Phone")) as HTMLInputElement;

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
  parameters: {
    docs: {
      description: {
        story: "Phone field in a disabled state where user interaction is prevented.",
      },
    },
  },
  args: {
    disabled: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const input = (await canvas.getByPlaceholderText("Phone")) as HTMLInputElement;
    const selectButton = await canvas.getByRole("combobox");

    expect(input).toBeDisabled();
    expect(selectButton).toBeDisabled();
  },
};

export const ShowValidStateWhenMin12Digits: Story = {
  render: (args) => {
    const [value, setValue] = useState("");
    const isValid = value.length >= 12;

    return <PhoneField {...args} value={value} onChange={setValue} isValid={isValid} />;
  },
  parameters: {
    docs: {
      description: {
        story:
          "Phone field that shows a success state when the input reaches a minimum length of 12 digits.",
      },
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    let input = (await canvas.getByPlaceholderText("Phone")) as HTMLInputElement;

    expect(input).toBeVisible();
    expect(input).toHaveValue("");

    userEvent.type(input, "12345678912");

    await waitFor(async () => {
      const tickIcon = await canvas.findByTestId("tick-icon");

      expect(tickIcon).toBeVisible();
      expect(input).toHaveValue("+1 (234) 567-8912");
    });
  },
};

export const CustomDefaultCountry: Story = {
  render: (args) => {
    const [value, setValue] = useState("");
    return <PhoneField {...args} value={value} onChange={setValue} />;
  },
  parameters: {
    docs: {
      description: {
        story:
          "Phone field initialized with a specific country code and the ability to change it.",
      },
    },
  },
  args: {
    defaultCountryCode: "PL",
    disableDialCodePrefill: false,
  },
  play: async ({ canvasElement }) => {
    let selectViewport: Element | null = null;
    const canvas = within(canvasElement);

    let input = (await canvas.getByPlaceholderText("Phone")) as HTMLInputElement;

    expect(input).toHaveValue("+48 ");

    const selectButton = await canvas.getByRole("combobox");

    fireEvent.click(selectButton);

    await waitFor(() => {
      selectViewport = document.body.querySelector("[data-radix-popper-content-wrapper]");

      expect(selectButton).toBeVisible();

      const countries = selectViewport!.querySelectorAll("[data-radix-collection-item]");

      expect(countries).toHaveLength(countryCodes.length);

      fireEvent.click(countries[0]);
    });

    input = (await canvas.getByPlaceholderText("Phone")) as HTMLInputElement;

    expect(input).toHaveValue("+93 ");

    fireEvent.click(selectButton);

    await waitFor(() => {
      selectViewport = document.body.querySelector("[data-radix-popper-content-wrapper]");

      expect(selectButton).toBeVisible();

      const countryOption = selectViewport!.querySelector('[data-country="PL"]') as HTMLElement;

      expect(countryOption).toBeVisible();

      fireEvent.click(countryOption);
    });

    input = (await canvas.getByPlaceholderText("Phone")) as HTMLInputElement;

    expect(input).toHaveValue("+48 ");
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
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const button = await canvas.getByText("Focus");

    expect(button).toBeVisible();

    fireEvent.click(button);

    let input = (await canvas.getByPlaceholderText("Phone")) as HTMLInputElement;

    expect(input).toHaveFocus();
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
