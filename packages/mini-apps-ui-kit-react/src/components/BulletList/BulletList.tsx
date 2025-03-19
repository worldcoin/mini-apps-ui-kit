import { cn } from "@/lib/utils";
import { ComponentProps, ReactElement, forwardRef } from "react";

import { BulletListItemProps } from "../BulletListItem/BulletListItem";

export interface BulletListProps extends ComponentProps<"div"> {
  /**
   * Children should be BulletListItem components, but any ReactNode is accepted for compatibility
   */
  children: ReactElement<BulletListItemProps>[] | ReactElement<BulletListItemProps>;
}

export const BulletList = forwardRef<HTMLDivElement, BulletListProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("grid gap-y-5 content-start", className)} {...props}>
        {children}
      </div>
    );
  },
);

BulletList.displayName = "BulletList";

export default BulletList;
