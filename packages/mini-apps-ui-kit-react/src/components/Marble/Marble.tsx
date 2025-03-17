import { cn } from "@/lib/utils";
import { ComponentProps, forwardRef } from "react";

interface MarbleProps extends ComponentProps<"div"> {
  imageUrl: string;
}

export const Marble = forwardRef<HTMLDivElement, MarbleProps>(
  ({ imageUrl, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-full overflow-hidden border-2 border-gray-100 p-[3px] aspect-square w-[7.5rem]",
          className,
        )}
        {...props}
      >
        <img src={imageUrl} alt="Marble" className="object-cover size-full rounded-full" />
      </div>
    );
  },
);

Marble.displayName = "Marble";

export default Marble;
