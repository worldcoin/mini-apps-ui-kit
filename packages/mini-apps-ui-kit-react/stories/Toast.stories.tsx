import { Button, TopBar } from "@/index";
import type { Meta, StoryObj } from "@storybook/react";

import { Toaster, useToast } from "../src/components/Toast";
import { ArrowLeft } from "./helpers/icons/ArrowLeft";

const ToastDemo = ({
  variant,
  title,
  duration,
}: {
  variant: "success" | "error";
  title: string;
  duration: number;
}) => {
  const defaultTitle = variant === "success" ? "Something went good" : "Something went wrong";
  const { toast } = useToast();
  return (
    <div
      style={{
        position: "relative",
        height: 300,
        width: 400,
      }}
    >
      <TopBar
        title="Toast"
        startAdornment={
          <Button variant="tertiary" size="icon">
            <ArrowLeft />
          </Button>
        }
      />
      <div className="flex justify-center items-center h-full">
        <Button
          variant="secondary"
          size="sm"
          onClick={() =>
            toast[variant]({
              title: title || defaultTitle,
              duration,
            })
          }
        >
          Show Toast
        </Button>
      </div>
      <Toaster />
    </div>
  );
};

const meta: Meta<typeof ToastDemo> = {
  title: "Components/Toast",
  component: ToastDemo,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
The Toast component provides a way to display temporary notifications to users. It's built on top of Radix UI's Toast primitives and includes haptic feedback for mobile devices.

## Features

- **Two variants**: Success and Error toasts with appropriate icons
- **Haptic feedback**: Automatic haptic notifications on mobile devices
- **Customizable duration**: Control how long toasts are displayed
- **Auto-dismiss**: Toasts automatically disappear after the specified duration
- **Manual control**: Programmatically dismiss individual or all toasts
- **Accessible**: Built with accessibility in mind using Radix UI primitives
- **Responsive**: Works well on both desktop and mobile devices

## Basic Usage

\`\`\`tsx
import { Toaster, useToast } from "@/components/Toast";

function MyComponent() {
  const { toast } = useToast();

  const handleSuccess = () => {
    toast.success({
      title: "Operation completed successfully!",
      duration: 3000,
    });
  };

  const handleError = () => {
    toast.error({
      title: "Something went wrong. Please try again.",
      duration: 5000,
    });
  };

  return (
    <div>
      <button onClick={handleSuccess}>Show Success</button>
      <button onClick={handleError}>Show Error</button>
      <Toaster />
    </div>
  );
}
\`\`\`

## API Reference

### useToast Hook

The \`useToast\` hook provides methods to show and manage toasts:

\`\`\`tsx
const { toast, dismiss, toasts } = useToast();
\`\`\`

#### Methods

- **toast.success(props)**: Show a success toast
- **toast.error(props)**: Show an error toast  
- **dismiss(toastId?)**: Dismiss a specific toast or all toasts

#### Toast Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| \`title\` | \`string\` | - | The message to display in the toast |
| \`duration\` | \`number\` | \`3000\` | Duration in milliseconds before auto-dismiss |

### Toaster Component

The \`Toaster\` component must be included in your app to render toasts:

\`\`\`tsx
<Toaster duration={3000} />
\`\`\`

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| \`duration\` | \`number\` | \`3000\` | Default duration for all toasts |

## Advanced Usage

### Manual Toast Control

\`\`\`tsx
const { toast } = useToast();

const showToast = () => {
  const toastInstance = toast.success({
    title: "Custom toast",
    duration: 10000,
  });

  // Dismiss after 3 seconds
  setTimeout(() => {
    toastInstance.dismiss();
  }, 3000);
};
\`\`\`

### Dismissing All Toasts

\`\`\`tsx
const { dismiss } = useToast();

const clearAllToasts = () => {
  dismiss(); // Dismisses all toasts
};
\`\`\`

## Best Practices

1. **Keep messages concise**: Toast messages should be short and clear
2. **Use appropriate variants**: Use success for positive feedback, error for failures
3. **Set reasonable durations**: 3-5 seconds is usually sufficient
4. **Don't overuse**: Avoid showing too many toasts in quick succession
5. **Include Toaster**: Always include the \`<Toaster />\` component in your app root

## Accessibility

The Toast component is built with accessibility in mind:
- Uses proper ARIA attributes
- Supports keyboard navigation
- Provides screen reader announcements
- Includes haptic feedback for mobile users
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["success", "error"],
      description: "Type of notification to show",
    },
    duration: {
      control: "number",
      description: "Duration of the toast in milliseconds",
    },
    title: {
      control: "text",
      description: "Message to display in the toast",
    },
  },
};

export default meta;

type Story = StoryObj<typeof ToastDemo>;

export const Default: Story = {
  args: {
    variant: "success",
    title: "",
    duration: 3000,
  },
};
