import { cn } from "@/lib/utils";
import { ComponentProps, ReactNode, forwardRef } from "react";

import { BulletListItem } from "../BulletListItem";

interface BulletListProps extends ComponentProps<"div"> {
  items: ReactNode[];
}
export const BulletList = forwardRef<HTMLDivElement, BulletListProps>(
  ({ items, className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("grid gap-y-5 content-start", className)} {...props}>
        {items.map((item, index) => (
          <BulletListItem key={`BulletListItem-${index}`}>{item}</BulletListItem>
        ))}
      </div>
    );
  },
);

BulletList.displayName = "BulletList";

export default BulletList;
