import { cn } from "@/lib/utils";
import { ComponentProps, ReactElement, ReactNode, forwardRef } from "react";

import { Typography } from "../Typography";

interface BulletListProps extends ComponentProps<"div"> {
  /**
   * Children should be BulletListItem components, but any ReactNode is accepted for compatibility
   */
  children: ReactElement<BulletListItemProps>[] | ReactElement<BulletListItemProps>;
}

const BulletList = forwardRef<HTMLDivElement, BulletListProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("grid gap-y-5 content-start", className)} {...props}>
        {children}
      </div>
    );
  },
);

BulletList.displayName = "BulletList";

interface BulletListItemProps extends ComponentProps<"div"> {
  children?: ReactNode;
  bulletPoint: ReactNode;
}

const BulletListItem = forwardRef<HTMLDivElement, BulletListItemProps>(
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

export { BulletList, BulletListItem };
export type { BulletListProps, BulletListItemProps };
