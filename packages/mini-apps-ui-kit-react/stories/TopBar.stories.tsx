import { Button } from "@/index";
import type { Meta, StoryObj } from "@storybook/react";

import { TopBar } from "../src/components/TopBar/TopBar";

const meta: Meta<typeof TopBar> = {
  title: "Components/TopBar",
  component: TopBar,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A navigation bar component that displays a title with optional start and end elements. Commonly used at the top of pages or modals to show the current section and navigation controls.",
      },
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          backgroundColor: "#000",
          width: 400,
          height: 140,
          display: "flex",
          flexDirection: "column",
          justifyContent: "end",
        }}
      >
        <div
          style={{
            backgroundColor: "#fff",
            width: "100%",
            height: 72,
            borderTopLeftRadius: 24,
            borderTopRightRadius: 24,
          }}
        >
          <Story />
        </div>
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof TopBar>;

// Example back button and clock icons for the stories
const BackButton = () => (
  <Button
    variant="tertiary"
    size="sm"
    icon={
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15 19L8 12L15 5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    }
  />
);

const ClockIcon = () => (
  <Button
    variant="tertiary"
    size="sm"
    icon={
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
        <path d="M12 7V12L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    }
  />
);

export const Default: Story = {
  args: {
    title: "Title",
  },
};

export const WithStartAdornment: Story = {
  args: {
    title: "Title",
    startAdornment: <BackButton />,
  },
};

export const WithEndAdornment: Story = {
  args: {
    title: "Title",
    endAdornment: <ClockIcon />,
  },
};

export const WithBothAdornments: Story = {
  args: {
    title: "Title",
    startAdornment: <BackButton />,
    endAdornment: <ClockIcon />,
  },
};
