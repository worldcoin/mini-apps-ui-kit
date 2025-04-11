import { cn } from "@/lib/utils";
import React from "react";

import { Typography } from "../Typography";

interface TopBarProps {
  /** Title displayed in the center */
  title?: string;
  /** Element rendered on the left side */
  startAdornment?: React.ReactNode;
  /** Element rendered on the right side */
  endAdornment?: React.ReactNode;
  /** Additional class name for the top bar */
  className?: string;
}

function TopBar({ title, startAdornment, endAdornment, className }: TopBarProps) {
  const hasStartAdornment = Boolean(startAdornment);
  const hasEndAdornment = Boolean(endAdornment);

  const textAlignment = hasStartAdornment ? "text-center" : "text-left";
  const justifyContent =
    hasStartAdornment || hasEndAdornment ? "justify-between" : "justify-start";

  return (
    <div
      className={cn(
        "flex items-center px-6 pt-6 pb-2 w-full h-[4.5rem] gap-10",
        justifyContent,
        className,
      )}
    >
      {startAdornment && <div className="shrink-0">{startAdornment}</div>}

      <Typography
        variant={hasStartAdornment ? "subtitle" : "heading"}
        level={hasStartAdornment ? 1 : 3}
        className={cn("flex-1 grow truncate", textAlignment)}
      >
        {title}
      </Typography>

      {endAdornment && <div className="shrink-0">{endAdornment}</div>}

      {!endAdornment && hasStartAdornment && (
        <div className="shrink-0 invisible" aria-hidden="true">
          {startAdornment}
        </div>
      )}
    </div>
  );
}

TopBar.displayName = "TopBar";

export { TopBar };
export type { TopBarProps };
