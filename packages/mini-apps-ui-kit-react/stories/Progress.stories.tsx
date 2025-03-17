import type { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "@storybook/test";

import { Progress } from "../src/components/Progress";

const meta: Meta<typeof Progress> = {
  title: "components/Progress",
  component: Progress,
  parameters: {
    docs: {
      description: {
        component:
          "A progress indicator component that shows the completion status of a task or process. The progress is represented by a horizontal bar that fills from left to right based on the provided value between 0 and 100. The background color of the progress bar can be customized using background utility classes, while the indicator color can be customized using text color utility classes.",
      },
    },
  },
  argTypes: {
    value: {
      control: { type: "range", min: 0, max: 100, step: 1 },
      defaultValue: 0,
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: "200px", color: "rgb(var(--success-600))" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 33,
  },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    const progress = canvas.getByRole("progressbar");
    expect(progress).toBeInTheDocument();
    expect(progress).toHaveAttribute("data-value", "100");
  },
};
