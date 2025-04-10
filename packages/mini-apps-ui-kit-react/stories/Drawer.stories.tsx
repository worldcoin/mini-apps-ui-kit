import { Button } from "@/components/Button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/Drawer";
import { Input, Typography } from "@/index";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Drawer> = {
  title: "components/Drawer",
  component: Drawer,
  subcomponents: {
    DrawerTrigger,
    DrawerContent,
    DrawerClose,
    DrawerHeader,
    DrawerTitle,
  },
  parameters: {
    docs: {
      description: {
        component:
          "A drawer component that slides up from the bottom of the screen.  This component is built on top of [Vaul](https://vaul.emilkowal.ski/getting-started) and the Dialog component from [Radix UI](https://www.radix-ui.com/primitives/docs/components/dialog).",
      },
    },
  },
};

export default meta;

export const Default: StoryObj<typeof Drawer> = {
  render: (props) => (
    <Drawer {...props}>
      <DrawerTrigger>
        <Button variant="secondary" size="sm">
          Open
        </Button>
      </DrawerTrigger>
      <DrawerContent className="p-6">
        <DrawerHeader>
          <DrawerTitle>Drawer title</DrawerTitle>
        </DrawerHeader>
        <div className="my-8">
          <Typography className="text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.
          </Typography>
        </div>
      </DrawerContent>
    </Drawer>
  ),
};

export const FullPage: StoryObj<typeof Drawer> = {
  render: () => (
    <Drawer height="full">
      <DrawerTrigger>
        <Button variant="secondary" size="sm">
          Open
        </Button>
      </DrawerTrigger>
      <DrawerContent className="p-6">
        <DrawerHeader>
          <DrawerTitle>Drawer with scrollable content</DrawerTitle>
        </DrawerHeader>
        <div className="max-w-md w-full mx-auto flex flex-col items-center flex-grow">
          <div
            className="no-scrollbar w-full flex flex-col flex-grow flex-basis-0 overflow-auto p-2 my-4"
            style={{
              flexBasis: 0,
            }}
          >
            {Array.from({ length: 50 }).map((_, i) => (
              <DrawerClose key={i} className="block w-full">
                <div className="py-2">Option {i + 1}</div>
              </DrawerClose>
            ))}
          </div>
          <DrawerClose>
            <Button>Close</Button>
          </DrawerClose>
        </div>
      </DrawerContent>
    </Drawer>
  ),
};

export const WithInputs: StoryObj<typeof Drawer> = {
  render: () => (
    <Drawer height="full" repositionInputs>
      <DrawerTrigger>
        <Button variant="secondary" size="sm">
          Open
        </Button>
      </DrawerTrigger>
      <DrawerContent className="p-6 grow flex flex-col justify-between">
        <div>
          <DrawerHeader>
            <DrawerTitle>Drawer with inputs</DrawerTitle>
          </DrawerHeader>
          <div className="flex flex-col gap-4 pt-4">
            <Input label="Name" />
          </div>
        </div>
        <Button fullWidth>Submit</Button>
      </DrawerContent>
    </Drawer>
  ),
};
