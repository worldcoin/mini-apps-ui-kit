import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { forwardRef } from "react";

import { Typography } from "../Typography";

const listItemStyles = cva(
  "h-[4.75rem] bg-gray-50 p-4 rounded-2xl flex items-center text-gray-900 w-full disabled:text-gray-400 disabled:cursor-not-allowed",
);

/**
 * Props for the ListItem component
 * @extends {Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className" | "style">}
 */
interface ListItemProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className" | "style"> {
  /** The main text label to display */
  label?: string;
  /** Secondary descriptive text to show below the label */
  description?: string;
  /** Content to render at the start/left of the list item */
  startAdornment?: React.ReactNode;
  /** Content to render at the end/right of the list item */
  endAdornment?: React.ReactNode;
  /** Child content to render inside the list item */
  children?: React.ReactNode;
  /** Whether the list item is disabled */
  disabled?: boolean;
}

export const ListItem = forwardRef<HTMLButtonElement, ListItemProps>(
  ({ children, label, description, startAdornment, endAdornment, disabled, ...props }, ref) => {
    return (
      <button ref={ref} className={listItemStyles()} {...props} disabled={disabled}>
        {startAdornment && <div className="mr-4 flex-shrink-0">{startAdornment}</div>}
        <div className="flex flex-col flex-grow min-w-0 items-start gap-0.5">
          {label && (
            <Typography variant="subtitle" level={2} className="truncate grow w-full text-left">
              {label}
            </Typography>
          )}
          {description && (
            <Typography
              level={4}
              className={cn(
                "truncate grow w-full text-left",
                disabled ? "text-gray-400" : "text-gray-500",
              )}
            >
              {description}
            </Typography>
          )}
        </div>
        {endAdornment && <div className="ml-4 flex-shrink-0">{endAdornment}</div>}
      </button>
    );
  },
);

ListItem.displayName = "ListItem";

export default ListItem;
