import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import { Button } from "../src/components/Button";
import { CountryDrawer } from "../src/components/CountryDrawer/CountryDrawer";
import { CountryCode, Flag } from "../src/components/Flag";

const meta = {
  title: "components/CountryDrawer",
  component: CountryDrawer,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
A drawer component for selecting countries, typically used in conjunction with phone number input fields.
It provides a searchable list of countries with their flags and names, organized alphabetically.

## Features
- Search functionality for quick country lookup
- Alphabetically grouped country list
- Full-page drawer interface
- Customizable trigger element
- Keyboard navigation support
        `,
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CountryDrawer>;

export default meta;
type Story = StoryObj<typeof CountryDrawer>;

const CountryDrawerDemo = () => {
  const [country, setCountry] = useState<CountryCode>("US");

  return (
    <CountryDrawer value={country} onChange={(code) => setCountry(code as CountryCode)}>
      <Button variant="secondary" size="icon">
        <Flag countryCode={country} />
      </Button>
    </CountryDrawer>
  );
};

export const Default: Story = {
  render: () => <CountryDrawerDemo />,
};

export const Disabled: Story = {
  render: () => (
    <CountryDrawer value="US" onChange={() => {}} disabled>
      <Button variant="secondary" size="icon">
        <Flag countryCode="US" />
      </Button>
    </CountryDrawer>
  ),
};

export const LimitedCountries: Story = {
  render: () => {
    const [country, setCountry] = useState<CountryCode>("US");

    return (
      <CountryDrawer
        value={country}
        countries={["US", "CA", "GB", "FR", "DE"]}
        onChange={(code) => setCountry(code as CountryCode)}
      >
        <Button variant="secondary" size="icon">
          <Flag countryCode={country} />
        </Button>
      </CountryDrawer>
    );
  },
};

export const WithCustomTrigger: Story = {
  render: () => {
    const [country, setCountry] = useState<CountryCode>("US");

    return (
      <CountryDrawer value={country} onChange={(code) => setCountry(code as CountryCode)}>
        <Button variant="primary">Change Country</Button>
      </CountryDrawer>
    );
  },
};
