import type { Meta, StoryObj } from "@storybook/react";

import { expect, within } from "@storybook/test";
import { useState } from "react";

import NumberPad from "../src/components/NumberPad/NumberPad";

const meta: Meta<typeof NumberPad> = {
  title: "components/NumberPad",
  component: NumberPad,
  parameters: {
    docs: {
      description: {
        component:
          "A numeric keypad component that allows users to input numbers and decimals. Includes a delete button and validates input to ensure only valid numbers are entered.",
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="w-[400px] flex justify-center">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Check that buttons 1-9 are displayed
    for (let i = 0; i <= 9; i++) {
      const button = canvas.getByText(i.toString());
      await expect(button).toBeInTheDocument();
    }

    // Check that the delete button is displayed
    const deleteButton = canvas.getByTestId("delete-icon");
    await expect(deleteButton).toBeInTheDocument();

    // Check that the decimal button is displayed
    const decimalButton = canvas.getByText(".");
    await expect(decimalButton).toBeInTheDocument();
  },
};

export const Controlled: Story = {
  args: {
    value: "",
  },
  render: (args) => {
    const [value, setValue] = useState(args.value);
    return (
      <div className="flex flex-col gap-4 items-center w-[400px]">
        <div className="font-display font-semibold flex items-center gap-2 h-[4.25rem]">
          <span className="text-xl">$</span>
          <span className="text-[3.5rem]">{value}</span>
        </div>
        <NumberPad value={value} onChange={setValue} />
      </div>
    );
  },
};
