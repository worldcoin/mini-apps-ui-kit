import type { Meta, StoryObj } from "@storybook/react";

import {
  AlertDialog,
  AlertDialogClose,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogPortal,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../src/components/AlertDialog/AlertDialog";
import { Button } from "../src/components/Button/Button";
import { CircleSpark } from "./helpers/icons/CircleSpark";

const meta: Meta<typeof AlertDialog> = {
  title: "Components/AlertDialog",
  component: AlertDialog,
  tags: ["autodocs"],
  argTypes: {
    dismissible: {
      control: "boolean",
      description: "Whether the dialog can be dismissed",
      defaultValue: true,
    },
  },
  subcomponents: {
    AlertDialogTrigger,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogClose,
    AlertDialogPortal,
  },
  parameters: {
    docs: {
      description: {
        component:
          "AlertDialog is a modal dialog that interrupts the user with important content and expects a response.  This component is built on top of [Vaul](https://vaul.emilkowal.ski/getting-started) and the Dialog component from [Radix UI](https://www.radix-ui.com/primitives/docs/components/dialog).",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof AlertDialog>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "The default AlertDialog implementation showing a basic confirmation dialog with a trigger button, title, description, and action buttons.",
      },
    },
  },
  render: () => (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="secondary" size="sm">
          Open Alert Dialog
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogDescription>
          This action cannot be undone. This will permanently delete your account and remove
          your data from our servers.
        </AlertDialogDescription>
        <AlertDialogFooter>
          <AlertDialogClose asChild>
            <Button variant="secondary">Cancel</Button>
          </AlertDialogClose>
          <Button>Continue</Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
};

export const WithIcon: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "An example of AlertDialog with custom styling using Tailwind CSS classes to create a danger/delete confirmation dialog with red color scheme.",
      },
    },
  },
  render: () => (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="secondary" size="sm">
          Delete Account
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader icon={<CircleSpark />}>
          <AlertDialogTitle>Are you sure you want to delete your account?</AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogDescription>
          This action cannot be undone. This will permanently delete your account and remove
          your data from our servers.
        </AlertDialogDescription>
        <AlertDialogFooter>
          <AlertDialogClose asChild>
            <Button variant="secondary">Cancel</Button>
          </AlertDialogClose>
          <Button>Delete</Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
};

export const WithLongContent: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Demonstrates how AlertDialog handles long content with a scrollable description area, perfect for terms and conditions or lengthy information.",
      },
    },
  },
  render: () => (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="secondary" size="sm">
          Terms and Conditions
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Terms and Conditions</AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogDescription>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p className="mb-4">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
            qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
            veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>
        </AlertDialogDescription>
        <AlertDialogFooter>
          <AlertDialogClose asChild>
            <Button variant="secondary">Decline</Button>
          </AlertDialogClose>
          <Button>Accept</Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
};
