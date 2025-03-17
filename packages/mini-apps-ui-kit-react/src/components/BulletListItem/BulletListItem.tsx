import { cn } from "@/lib/utils";
import { ComponentProps, ReactNode, forwardRef } from "react";

import { Typography } from "../Typography";

const SparkIcon = (props: ComponentProps<"svg">) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 1.875C10.3452 1.875 10.625 2.15482 10.625 2.5C10.625 5.08005 11.1776 6.7536 12.2259 7.79507C13.2751 8.83737 14.9497 9.375 17.5 9.375C17.8452 9.375 18.125 9.65482 18.125 10C18.125 10.3452 17.8452 10.625 17.5 10.625C14.9539 10.625 13.2781 11.1767 12.2274 12.2274C11.1767 13.2781 10.625 14.9539 10.625 17.5C10.625 17.8452 10.3452 18.125 10 18.125C9.65482 18.125 9.375 17.8452 9.375 17.5C9.375 14.9549 8.8198 13.2788 7.76702 12.2277C6.71403 11.1765 5.03763 10.625 2.5 10.625C2.15482 10.625 1.875 10.3452 1.875 10C1.875 9.65482 2.15482 9.375 2.5 9.375C5.0418 9.375 6.71702 8.8376 7.76847 7.79471C8.81888 6.75286 9.375 5.07901 9.375 2.5C9.375 2.15482 9.65482 1.875 10 1.875Z"
      fill="currentColor"
    />
  </svg>
);

interface BulletListItemProps extends ComponentProps<"div"> {
  children?: ReactNode;
}

export const BulletListItem = forwardRef<HTMLDivElement, BulletListItemProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("grid grid-cols-[auto_1fr] gap-x-3 items-center", className)}
        {...props}
      >
        <div className="size-9 flex justify-center items-center rounded-full bg-gray-900">
          <SparkIcon className="text-gray-0" />
        </div>

        <Typography className="text-gray-500">{children}</Typography>
      </div>
    );
  },
);

BulletListItem.displayName = "BulletListItem";

export default BulletListItem;
