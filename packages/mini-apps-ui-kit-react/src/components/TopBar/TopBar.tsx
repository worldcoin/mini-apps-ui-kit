import { cn } from "@/lib/utils";
import React from "react";

import { Typography } from "../Typography";

interface TopBarProps {
  /**
   * The title to be displayed in the center
   */
  title: string;
  /**
   * Optional element to be rendered at the start (left side)
   */
  startAdornment?: React.ReactNode;
  /**
   * Optional element to be rendered at the end (right side)
   */
  endAdornment?: React.ReactNode;
  /**
   * Optional className for additional styling
   */
  className?: string;
}

export const TopBar: React.FC<TopBarProps> = ({
  title,
  startAdornment,
  endAdornment,
  className = "",
}) => {
  return (
    <div
      className={cn(
        "flex items-center justify-between px-6 pt-6 pb-2 w-full h-[4.5rem]",
        className,
      )}
    >
      {startAdornment && <div className="shrink-0">{startAdornment}</div>}
      <Typography
        variant={startAdornment ? "subtitle" : "heading"}
        level={startAdornment ? 1 : 3}
        className={cn("flex-1 grow text-center", !startAdornment && "text-left")}
      >
        {title}
      </Typography>
      {endAdornment && <div className="shrink-0">{endAdornment}</div>}
    </div>
  );
};

export default TopBar;
