import type { Meta, StoryObj } from "@storybook/react";

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../src/components/AlertDialog/AlertDialog";
import { Button } from "../src/components/Button/Button";
import { CircleSpark } from "./helpers/icons/CircleSpark";

const meta: Meta<typeof AlertDialog> = {
  title: "Components/AlertDialog",
  component: AlertDialog,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "AlertDialog is a modal dialog that interrupts the user with important content and expects a response. This component is built on top of the native dialog element and follows WAI-ARIA guidelines for modal dialogs.",
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
          <Button variant="secondary">Cancel</Button>
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
      <AlertDialogContent className="bg-red-50">
        <AlertDialogHeader icon={<CircleSpark />}>
          <AlertDialogTitle className="text-red-600">Delete Account</AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogDescription className="text-red-700">
          This action cannot be undone. This will permanently delete your account and remove
          your data from our servers.
        </AlertDialogDescription>
        <AlertDialogFooter>
          <Button variant="secondary">Cancel</Button>
          <Button>Delete Account</Button>
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
        <AlertDialogDescription className="max-h-[300px] overflow-y-auto">
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
          <Button variant="secondary">Decline</Button>
          <Button>Accept</Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
};
