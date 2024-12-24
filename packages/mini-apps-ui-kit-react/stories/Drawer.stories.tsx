import Button from "@/components/Button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/Drawer";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Drawer> = {
  title: "components/Drawer",
  component: Drawer,
  subcomponents: {
    DrawerTrigger: DrawerTrigger as React.ComponentType<unknown>,
    DrawerContent: DrawerContent as React.ComponentType<unknown>,
    DrawerClose: DrawerClose as React.ComponentType<unknown>,
    DrawerTitle: DrawerTitle as React.ComponentType<unknown>,
    DrawerDescription: DrawerDescription as React.ComponentType<unknown>,
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
  render: () => (
    <Drawer>
      <DrawerTrigger>
        <Button>Open Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerTitle>Drawer title</DrawerTitle>
        <DrawerDescription>Drawer description</DrawerDescription>
        <div className="p-4">Drawer content</div>
        <DrawerClose>
          <Button>Close</Button>
        </DrawerClose>
      </DrawerContent>
    </Drawer>
  ),
};

export const LongContent: StoryObj<typeof Drawer> = {
  render: () => (
    <Drawer>
      <DrawerTrigger>
        <Button>Open Drawer with long content</Button>
      </DrawerTrigger>
      <DrawerContent className="h-[96%]">
        <div className="max-w-md w-full mx-auto rounded-t-[10px] flex flex-col flex-grow">
          <DrawerTitle>Drawer with long content</DrawerTitle>
          <DrawerDescription>Scrollable content inside the drawer.</DrawerDescription>
          <div
            className="no-scrollbar mx-auto w-full flex flex-col flex-grow flex-basis-0 overflow-auto p-2"
            style={{
              // Explicitly setting flex-basis ensures that the remaining space in the flex container is used,
              // height issues are fixed, and proper scrolling is enabled.
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
