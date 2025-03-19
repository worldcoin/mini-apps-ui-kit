import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";
import * as React from "react";

/**
 * Props for the ToggleGroupItem component
 */
export interface ToggleGroupItemProps
  extends Omit<React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item>, "asChild"> {
  /**
   * Whether this item should be rendered as a child of another component
   * @default false
   */
  asChild?: boolean;

  /**
   * The value of the toggle group item
   */
  value: string;

  /**
   * When true, prevents the user from interacting with the toggle group item
   */
  disabled?: boolean;
}
/**
 * Props for single selection mode
 */
interface SingleToggleGroupProps {
  /**
   * The type of selection that should be used
   */
  type: "single";

  /**
   * The value of the toggle group when initially rendered
   * @default undefined
   */
  defaultValue?: string;

  /**
   * The controlled value of the toggle group
   * @default undefined
   */
  value?: string;

  /**
   * Event handler called when the value changes
   */
  onValueChange?: (value: string) => void;
}

/**
 * Props for multiple selection mode
 */
interface MultipleToggleGroupProps {
  /**
   * The type of selection that should be used
   */
  type: "multiple";

  /**
   * The value of the toggle group when initially rendered
   * @default undefined
   */
  defaultValue?: string[];

  /**
   * The controlled value of the toggle group
   * @default undefined
   */
  value?: string[];

  /**
   * Event handler called when the value changes
   */
  onValueChange?: (value: string[]) => void;
}

/**
 * Props for the ToggleGroupRoot component
 */
export type ToggleGroupRootProps = (SingleToggleGroupProps | MultipleToggleGroupProps) & {
  /**
   * Whether this component should be rendered as a child of another component
   * @default false
   */
  asChild?: boolean;

  /**
   * When true, prevents the user from interacting with the toggle group
   * @default false
   */
  disabled?: boolean;
  /**
   * When true and rovingFocus is true, keyboard navigation will loop from last item to first, and vice versa.
   * @default true
   */
  loop?: boolean;

  /**
   * When false, navigating through the items using arrow keys will be disabled.
   * @default false
   */
  rovingFocus?: boolean;

  /**
   * The reading direction of the toggle group. If omitted, inherits globally from DirectionProvider or assumes LTR (left-to-right) reading mode.
   * @default undefined
   */
  dir?: "ltr" | "rtl";
  /**
   * The children of the toggle group
   */
  children?: React.ReactNode;
};
