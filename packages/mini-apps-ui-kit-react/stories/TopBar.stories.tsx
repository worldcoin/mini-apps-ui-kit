import { Button } from "@/index";
import type { Meta, StoryObj } from "@storybook/react";

import { TopBar } from "../src/components/TopBar/TopBar";
import { ArrowLeft } from "./helpers/icons/ArrowLeft";
import { Clock } from "./helpers/icons/Clock";

const BackButton = () => (
  <Button variant="tertiary" size="icon">
    <ArrowLeft />
  </Button>
);

const ClockIcon = () => (
  <Button variant="tertiary" size="icon">
    <Clock />
  </Button>
);

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
  argTypes: {
    startAdornment: {
      control: "select",
      options: ["None", "Back"],
      mapping: {
        None: null,
        Back: <BackButton />,
      },
    },
    endAdornment: {
      control: "select",
      options: ["None", "Clock"],
      mapping: {
        None: null,
        Clock: <ClockIcon />,
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

export const Default: Story = {
  args: {
    title: "World",
  },
};

export const WithStartAdornment: Story = {
  args: {
    title: "World",
    startAdornment: <BackButton />,
  },
};

export const OnlyStartAdornment: Story = {
  args: {
    startAdornment: <BackButton />,
  },
};

export const WithEndAdornment: Story = {
  args: {
    title: "World",
    endAdornment: <ClockIcon />,
  },
};

export const WithBothAdornments: Story = {
  args: {
    title: "World",
    startAdornment: <BackButton />,
    endAdornment: <ClockIcon />,
  },
};
