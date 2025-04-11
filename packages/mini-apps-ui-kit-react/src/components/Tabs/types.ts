import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { ComponentPropsWithoutRef, ReactNode } from "react";

type BaseToggleGroupProps = ComponentPropsWithoutRef<typeof ToggleGroup.Root>;
type BaseToggleGroupItemProps = ComponentPropsWithoutRef<typeof ToggleGroup.Item>;

export interface TabsProps extends Omit<BaseToggleGroupProps, "type" | "size" | "orientation"> {
  /**
   * Whether the toggle group is disabled
   */
  disabled?: boolean;
  /**
   * Whether the toggle group should loop when navigating through items
   */
  loop?: boolean;
  /**
   * The default selected tab value
   */
  defaultValue?: string;
  /**
   * The selected tab value
   */
  value?: string;
  /**
   * Callback when tab selection changes
   */
  onValueChange?: (value: string) => void;
  /**
   * The tab items
   */
  children?: ReactNode;
}

export interface TabItemProps extends Omit<BaseToggleGroupItemProps, "children"> {
  /**
   * The icon to display
   */
  icon: ReactNode;
  /**
   * The icon to display when the tab item is active
   */
  altIcon?: ReactNode;
  /**
   * The label text
   */
  label?: string;
  /**
   * Whether the tab item is disabled
   */
  disabled?: boolean;
  /**
   * The value of the tab item
   */
  value: string;
}
