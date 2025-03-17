import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import { WalletAddressField } from "../src/components/WalletAddressField/WalletAddressField";

const meta = {
  title: "Components/WalletAddressField",
  component: WalletAddressField,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "A text input component designed for entering wallet addresses.",
      },
    },
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="w-80 flex justify-center">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof WalletAddressField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Enter wallet address",
  },
};

export const WithValue: Story = {
  args: {
    value: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
    placeholder: "Enter wallet address",
  },
};

export const WithError: Story = {
  args: {
    value: "invalid-address",
    error: true,
    placeholder: "Enter wallet address",
  },
};

export const WithSuccess: Story = {
  args: {
    value: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
    isValid: true,
    placeholder: "Enter wallet address",
  },
};

export const Disabled: Story = {
  args: {
    value: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
    disabled: true,
    placeholder: "Enter wallet address",
  },
};

export const CustomPlaceholder: Story = {
  args: {
    placeholder: "Paste your ETH address here",
  },
};

export const Interactive: Story = {
  render: () => {
    const [value, setValue] = useState("");
    const [isValid, setIsValid] = useState(false);
    const [error, setError] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      setValue(newValue);

      // Simple validation for Ethereum address
      const isEthAddress = /^0x[a-fA-F0-9]{40}$/.test(newValue);
      setIsValid(isEthAddress);
      setError(newValue.length > 0 && !isEthAddress);
    };

    return (
      <WalletAddressField
        value={value}
        onChange={handleChange}
        isValid={isValid}
        error={error}
        placeholder="Enter ETH wallet address"
      />
    );
  },
};
