import { Button } from "@/components/Button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/Drawer";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Drawer> = {
  title: "components/Drawer",
  component: Drawer,
  argTypes: {
    dismissible: {
      control: "boolean",
      description: "Whether the drawer can be dismissed",
      defaultValue: true,
    },
    fullPage: {
      control: "boolean",
      description: "Whether the drawer should take up the full page",
      defaultValue: false,
    },
  },
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
          "A drawer component that slides up from the bottom of the screen, utilizing the Vaul library.",
      },
    },
  },
};

export default meta;

export const Default: StoryObj<typeof Drawer> = {
  render: (props) => (
    <Drawer {...props}>
      <DrawerTrigger>
        <Button>Open Drawer</Button>
      </DrawerTrigger>
      <DrawerContent className="flex flex-col items-center pb-4">
        <DrawerHeader>
          <DrawerTitle>Drawer title</DrawerTitle>
        </DrawerHeader>
        <DrawerClose>
          <Button>Close</Button>
        </DrawerClose>
      </DrawerContent>
    </Drawer>
  ),
};

export const FullPage: StoryObj<typeof Drawer> = {
  render: () => (
    <Drawer fullPage>
      <DrawerTrigger>
        <Button>Open Full Page Drawer</Button>
      </DrawerTrigger>
      <DrawerContent className="pb-4">
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
