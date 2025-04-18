import { cn } from "@/lib/utils";
import * as RadixProgress from "@radix-ui/react-progress";

interface ProgressProps {
  /** Value between 0 and 100 representing the progress percentage */
  value: number;
  /** Whether to use the child element as the progress indicator */
  asChild?: boolean;
  /** Maximum value of the progress bar */
  max?: number;
  /** A function to get the accessible label text representing the current value in a human-readable format. If not provided, the value label will be read as the numeric value as a percentage of the max value. */
  getValueLabel?: (value: number) => string;
  /** The class name of the progress bar. To customize the background color of the progress bar, use background utility classes. To customize the indicator color, use text color utility classes. */
  className?: string;
}

const Progress = ({ value, asChild, max, getValueLabel, className }: ProgressProps) => {
  return (
    <RadixProgress.Root
      className={cn(
        "relative h-1.5 w-full overflow-hidden rounded-full bg-gray-100",
        className,
      )}
      style={{
        // Fix overflow clipping in Safari
        // https://gist.github.com/domske/b66047671c780a238b51c51ffde8d3a0
        transform: "translateZ(0)",
      }}
      value={value}
      max={max}
      asChild={asChild}
      getValueLabel={getValueLabel}
    >
      <RadixProgress.Indicator
        className="ease-[cubic-bezier(0.65, 0, 0.35, 1)] size-full bg-current transition-transform duration-700"
        style={{ transform: `translateX(-${100 - Math.min(value, 100)}%)` }}
      />
    </RadixProgress.Root>
  );
};

Progress.displayName = "Progress";

export { Progress };
export type { ProgressProps };
