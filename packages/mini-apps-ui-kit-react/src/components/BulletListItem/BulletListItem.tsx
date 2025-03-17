import { cn } from "@/lib/utils";
import { ComponentProps, ReactNode, forwardRef } from "react";

import { Typography } from "../Typography";

export interface BulletListItemProps extends ComponentProps<"div"> {
  children?: ReactNode;
  bulletPoint: ReactNode;
}

export const BulletListItem = forwardRef<HTMLDivElement, BulletListItemProps>(
  ({ children, className, bulletPoint, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("grid grid-cols-[auto_1fr] gap-x-3 items-center", className)}
        {...props}
      >
        {bulletPoint}
        <Typography className="text-gray-500">{children}</Typography>
      </div>
    );
  },
);

BulletListItem.displayName = "BulletListItem";

export default BulletListItem;
