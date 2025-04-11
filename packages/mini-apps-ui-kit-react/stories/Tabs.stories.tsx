import { TabItem, Tabs } from "@/components/Tabs";
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { Apps } from "./helpers/icons/Apps";
import { Contacts } from "./helpers/icons/Contacts";
import { Wallet } from "./helpers/icons/Wallet";
import { WorldID } from "./helpers/icons/WorldID";

const meta: Meta<typeof Tabs> = {
  title: "Components/Tabs",
  component: Tabs,
  parameters: {
    layout: "centered",
  },
  subcomponents: {
    TabItem,
  },
  decorators: [
    (Story) => (
      <div style={{ width: "360px" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "A basic tab navigation component with icons and labels. Each tab can be selected to show different content.",
      },
    },
  },
  render: () => {
    const [value, setValue] = React.useState("wallet");

    return (
      <Tabs value={value} onValueChange={setValue}>
        <TabItem value="apps" icon={<Apps />} label="Apps" />
        <TabItem value="wallet" icon={<Wallet />} label="Wallet" />
        <TabItem value="contacts" icon={<Contacts />} label="Contacts" />
        <TabItem value="worldid" icon={<WorldID />} label="World ID" />
      </Tabs>
    );
  },
};

export const ActiveIcons: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Tabs with different icons for active and inactive states. The active tab shows a solid version of the icon while inactive tabs show the regular outline version.",
      },
    },
  },
  render: () => {
    const [value, setValue] = React.useState("wallet");

    return (
      <Tabs value={value} onValueChange={setValue}>
        <TabItem value="apps" icon={<Apps />} altIcon={<Apps solid />} label="Apps" />
        <TabItem value="wallet" icon={<Wallet />} altIcon={<Wallet solid />} label="Wallet" />
        <TabItem
          value="contacts"
          icon={<Contacts />}
          altIcon={<Contacts solid />}
          label="Contacts"
        />
      </Tabs>
    );
  },
};

export const WithLinks: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Tabs can be used as links by wrapping them in an anchor element. This is useful for navigation between pages.",
      },
    },
  },
  render: () => {
    const [value, setValue] = React.useState("wallet");

    return (
      <Tabs value={value} onValueChange={setValue}>
        <a>
          <TabItem value="apps" icon={<Apps />} altIcon={<Apps solid />} label="Apps" />
        </a>
        <a>
          <TabItem value="wallet" icon={<Wallet />} altIcon={<Wallet solid />} label="Wallet" />
        </a>
      </Tabs>
    );
  },
};
