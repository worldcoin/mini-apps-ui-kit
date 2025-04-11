import { cn } from "@/lib/utils";
import { ComponentProps, forwardRef } from "react";

const Marble = forwardRef<HTMLImageElement, ComponentProps<"img">>((props, ref) => {
  const { className, ...rest } = props;

  return (
    <img
      ref={ref}
      alt="Marble"
      className={cn(
        "rounded-full border-2 border-gray-100 p-[3px] aspect-square w-[7.5rem] object-cover",
        className,
      )}
      {...rest}
    />
  );
});

Marble.displayName = "Marble";

export { Marble };
