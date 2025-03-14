import { ComponentProps } from "react";
import { Drawer as DrawerPrimitive } from "vaul";

type PointerDownOutsideEvent = ComponentProps<typeof DrawerPrimitive.Content>;

export interface WithFadeFromProps {
  /**
   * Array of numbers from 0 to 100 that corresponds to % of the screen a given snap point should take up.
   * Should go from least visible. Example `[0.2, 0.5, 0.8]`.
   * You can also use px values, which doesn't take screen height into account.
   */
  snapPoints: (number | string)[];
  /**
   * Index of a `snapPoint` from which the overlay fade should be applied. Defaults to the last snap point.
   */
  fadeFromIndex: number;
}

export interface WithoutFadeFromProps {
  /**
   * Array of numbers from 0 to 100 that corresponds to % of the screen a given snap point should take up.
   * Should go from least visible. Example `[0.2, 0.5, 0.8]`.
   * You can also use px values, which doesn't take screen height into account.
   */
  snapPoints?: (number | string)[];
  fadeFromIndex?: never;
}

type BaseDrawerProps = {
  /** Whether the drawer should take up the full page */
  fullPage?: boolean;
  /** The active snap point */
  activeSnapPoint?: number | string | null;
  /** Callback when the active snap point changes */
  setActiveSnapPoint?: (snapPoint: number | string | null) => void;
  /** The content of the drawer */
  children?: React.ReactNode;
  /** Whether the drawer is open */
  open?: boolean;
  /**
   * Number between 0 and 1 that determines when the drawer should be closed.
   * Example: threshold of 0.5 would close the drawer if the user swiped for 50% of the height of the drawer or more.
   * @default 0.25
   */
  closeThreshold?: number;
  /**
   * When `true` the `body` doesn't get any styles assigned from Vaul
   */
  noBodyStyles?: boolean;
  /** Callback when the open state changes */
  onOpenChange?: (open: boolean) => void;
  /** Whether the background should scale when the drawer opens */
  shouldScaleBackground?: boolean;
  /**
   * When `false` we don't change body's background color when the drawer is open.
   * @default true
   */
  setBackgroundColorOnScale?: boolean;
  /**
   * Duration for which the drawer is not draggable after scrolling content inside of the drawer.
   * @default 500ms
   */
  scrollLockTimeout?: number;
  /**
   * When `true`, don't move the drawer upwards if there's space, but rather only change it's height so it's fully scrollable when the keyboard is open
   */
  fixed?: boolean;
  /**
   * When `true` only allows the drawer to be dragged by the `<Drawer.Handle />` component.
   * @default false
   */
  handleOnly?: boolean;
  /**
   * When `false` dragging, clicking outside, pressing esc, etc. will not close the drawer.
   * Use this in comination with the `open` prop, otherwise you won't be able to open/close the drawer.
   * @default true
   */
  dismissible?: boolean;
  /** Callback when dragging */
  onDrag?: (event: React.PointerEvent<HTMLDivElement>, percentageDragged: number) => void;
  /** Callback when releasing */
  onRelease?: (event: React.PointerEvent<HTMLDivElement>, open: boolean) => void;
  /**
   * When `false` it allows to interact with elements outside of the drawer without closing it.
   * @default true
   */
  modal?: boolean;
  /** Whether the drawer is nested */
  nested?: boolean;
  /** Callback when closing */
  onClose?: () => void;
  /**
   * Direction of the drawer. Can be `top` or `bottom`, `left`, `right`.
   * @default 'bottom'
   */
  direction?: "top" | "bottom" | "left" | "right";
  /**
   * Opened by default, skips initial enter animation. Still reacts to `open` state changes
   * @default false
   */
  defaultOpen?: boolean;
  /**
   * When set to `true` prevents scrolling on the document body on mount, and restores it on unmount.
   * @default false
   */
  disablePreventScroll?: boolean;
  /**
   * When `true` Vaul will reposition inputs rather than scroll then into view if the keyboard is in the way.
   * Setting it to `false` will fall back to the default browser behavior.
   * @default true when {@link snapPoints} is defined
   */
  repositionInputs?: boolean;
  /**
   * Disabled velocity based swiping for snap points.
   * This means that a snap point won't be skipped even if the velocity is high enough.
   * Useful if each snap point in a drawer is equally important.
   * @default false
   */
  snapToSequentialPoint?: boolean;
  /** The container element to render the drawer into */
  container?: HTMLElement | null;
  /**
   * Gets triggered after the open or close animation ends, it receives an `open` argument with the `open` state of the drawer by the time the function was triggered.
   * Useful to revert any state changes for example.
   */
  onAnimationEnd?: (open: boolean) => void;
  /** Whether to prevent scroll restoration */
  preventScrollRestoration?: boolean;
  /** Whether to auto focus the drawer when opened */
  autoFocus?: boolean;
};

/**
 * Props for the main Drawer component
 */
export type DrawerProps = BaseDrawerProps & (WithFadeFromProps | WithoutFadeFromProps);

/**
 * Props for the DrawerContent component
 */
export interface DrawerContentProps
  extends React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content> {
  /** The content of the drawer */
  children?: React.ReactNode;
  /** Additional CSS classes to apply */
  className?: string;
  /** Whether to render the trigger without default styling */
  asChild?: boolean;
  /** Whether to close the drawer when clicking outside */
  onCloseAutoFocus?: (event: Event) => void;
  /** Called when the escape key is pressed */
  onEscapeKeyDown?: (event: KeyboardEvent) => void;
  /** Called when pointer down occurs outside drawer */
  onPointerDownOutside?: (event: PointerDownOutsideEvent) => void;
  /** Called when drawer starts to close */
  onInteractOutside?: (event: React.FocusEvent | MouseEvent | TouchEvent) => void;
}

/**
 * Props for the DrawerHeader component
 */
export interface DrawerHeaderProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "className"> {
  /** Optional icon to display in the header */
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

/**
 * Props for the DrawerTitle component
 */
export interface DrawerTitleProps
  extends React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Title> {
  children?: React.ReactNode;
  /** Whether to render the title without default styling */
  asChild?: boolean;
}

/**
 * Props for the DrawerDescription component
 */
export interface DrawerDescriptionProps
  extends React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Description> {
  children?: React.ReactNode;
  /** Whether to render the description without default styling */
  asChild?: boolean;
}

/**
 * Props for the DrawerTrigger component
 */
export interface DrawerTriggerProps
  extends React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Trigger> {
  /** Whether to render the trigger without default styling */
  asChild?: boolean;
}

/**
 * Props for the DrawerTrigger component
 */
export interface DrawerCloseProps
  extends React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Close> {
  /** Whether to render the trigger without default styling */
  asChild?: boolean;
}
