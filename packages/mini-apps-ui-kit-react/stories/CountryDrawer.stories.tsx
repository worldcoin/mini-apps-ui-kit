import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import { Button } from "../src/components/Button";
import { CountryDrawer } from "../src/components/CountryDrawer/CountryDrawer";
import { CountryCode, Flag } from "../src/components/Flag";
import type { Direction } from "../src/types/global";

const meta = {
  title: "components/CountryDrawer",
  component: CountryDrawer,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
A responsive country selection component that adapts to different screen sizes. On mobile devices, it displays as a full-page drawer interface, while on desktop it renders as a centered dialog modal.

Typically used in conjunction with phone number input fields, it provides a searchable list of countries with their flags and names, organized alphabetically.

## Features
- Search functionality for quick country lookup
- Alphabetically grouped country list
- Responsive design: drawer on mobile, dialog on desktop
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

export const RTL: Story = {
  render: () => {
    const [country, setCountry] = useState<CountryCode>("AE");

    return (
      <CountryDrawer
        value={country}
        onChange={(code) => setCountry(code as CountryCode)}
        dir={"rtl" as Direction}
        title="البلد"
        searchLabel="البحث عن البلد"
      >
        <Button variant="secondary" size="icon">
          <Flag countryCode={country} />
        </Button>
      </CountryDrawer>
    );
  },
};
