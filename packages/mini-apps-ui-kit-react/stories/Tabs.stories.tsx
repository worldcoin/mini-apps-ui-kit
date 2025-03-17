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
  decorators: [
    (Story) => (
      <div style={{ width: "300px" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = React.useState("wallet");

    return (
      <Tabs value={value} onValueChange={setValue}>
        <TabItem value="apps" icon={<Apps />} label="Apps" />
        <TabItem value="wallet" icon={<Wallet />} label="TabItemPropsTabItemProps" />
        <TabItem value="contacts" icon={<Contacts />} label="Contacts" />
        <TabItem value="worldid" icon={<WorldID />} label="World ID" />
      </Tabs>
    );
  },
};
