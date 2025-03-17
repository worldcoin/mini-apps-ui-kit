import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { ComponentPropsWithoutRef, ReactNode } from "react";

type BaseToggleGroupProps = ComponentPropsWithoutRef<typeof ToggleGroup.Root>;
type BaseToggleGroupItemProps = ComponentPropsWithoutRef<typeof ToggleGroup.Item>;

export interface TabsProps extends Omit<BaseToggleGroupProps, "type"> {
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

export interface TabItemProps extends BaseToggleGroupItemProps {
  /**
   * The icon to display
   */
  icon: ReactNode;
  /**
   * The label text
   */
  label?: string;
}
