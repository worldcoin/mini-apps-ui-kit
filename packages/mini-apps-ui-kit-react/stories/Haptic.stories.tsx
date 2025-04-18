import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Haptic } from "../src/components/Haptic/Haptic";

const meta: Meta<typeof Haptic> = {
  title: "components/Haptic",
  component: Haptic,
  parameters: {
    docs: {
      description: {
        component: `
A component that provides haptic feedback when touched. It supports different types of haptic feedback including impact, notification, and selection changed. Haptic feedback can improve the user experience by:

- **Enhancing Responsiveness**: Immediate tactile feedback makes interactions feel faster and more satisfying.
- **Improving Accessibility**: Haptics can help users with visual impairments by providing an additional layer of feedback.
- **Increasing Engagement**: Users are more likely to enjoy and continue using apps that feel interactive and responsive.

<br/>

### Available payloads

#### Impact Haptics
| variant | type | description |
|------------|-------|-------------|
| impact | light | Collision between small UI elements. |
| impact | medium | Collision between medium UI elements. |
| impact | heavy | Collision between big UI elements. |
| impact | soft | Collision between flexible UI elements. |
| impact | rigid | Collision between inflexible UI elements. |

<br/>

#### Notification Haptics
| variant | type | description |
|------------|-------|-------------|
| notification | success | Indicates that an action was successful. |
| notification | warning | Indicates that something is not right and user should take notice. |
| notification | error | Indicates that an action has failed. |

<br/>

#### Selection Changed
| variant | type | description |
|------------|-------|-------------|
| selection | --- | Informs the user that a selection has changed, for example a checkbox was clicked

<br/>
`,
      },
    },
  },
  args: { onClick: fn() },
  argTypes: {
    variant: {
      control: "radio",
      options: ["impact", "notification", "selection"],
      defaultValue: "selection",
    },
    type: {
      control: "radio",
      options: ["light", "medium", "heavy", "soft", "rigid", "success", "warning", "error"],
      defaultValue: "light",
    },
    children: {
      control: "text",
      defaultValue: "Touch me for haptic feedback",
    },
    asChild: {
      control: "boolean",
      table: {
        disable: true,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Haptic>;

export const Default: Story = {
  args: {
    variant: "selection",
    children: "Touch me for haptic feedback",
  },
};
