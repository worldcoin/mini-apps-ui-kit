import { cn } from "@/lib/utils";
import { ComponentProps, ReactNode, forwardRef } from "react";

interface BulletProps extends ComponentProps<"div"> {
  children?: ReactNode;
}

const BulletPoint = forwardRef<HTMLDivElement, BulletProps>(({ children, ...props }, ref) => {
  const { className, ...rest } = props;

  return (
    <div
      ref={ref}
      className={cn(
        "size-9 flex justify-center items-center rounded-full bg-gray-900",
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
});

BulletPoint.displayName = "BulletPoint";

export { BulletPoint };
export type { BulletProps };
