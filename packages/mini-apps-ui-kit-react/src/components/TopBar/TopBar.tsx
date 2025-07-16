import { cn } from "@/lib/utils";
import { useWindowScroll } from "@uidotdev/usehooks";
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
  const [{ y }] = useWindowScroll();
  const isScrolled = (y ?? 0) > 0;
  const hasStartAdornment = Boolean(startAdornment);
  return (
    <div
      className={cn(
        "flex items-center justify-center px-6 pt-6 pb-2 w-full h-[4.5rem] gap-10 relative",
        className,
      )}
    >
      {startAdornment && (
        <div className="absolute left-6 size-10 overflow-hidden">{startAdornment}</div>
      )}

      {!hasStartAdornment && (
        <Typography
          key="heading"
          variant={"heading"}
          level={3}
          className={cn(
            "flex-1 grow truncate text-left absolute left-6 right-6 text-ellipsis overflow-hidden line-clamp-1",
            isScrolled ? "opacity-0 duration-300" : "duration-700",
          )}
        >
          {title}
        </Typography>
      )}

      <Typography
        key="subtitle"
        variant={"subtitle"}
        level={1}
        className={cn(
          "truncate opacity-0 basis-1/2 text-center",
          isScrolled || hasStartAdornment ? "opacity-100 duration-700" : "duration-300",
        )}
      >
        {title}
      </Typography>

      {endAdornment && (
        <div className="absolute right-6 size-10 overflow-hidden">{endAdornment}</div>
      )}
    </div>
  );
}

TopBar.displayName = "TopBar";

export { TopBar };
export type { TopBarProps };
