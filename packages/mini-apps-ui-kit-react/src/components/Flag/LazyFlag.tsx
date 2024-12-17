import { cn } from "@/lib/utils";
import { Suspense, forwardRef, lazy } from "react";

interface FlagProps {
  // ISO 3166-1 alpha-2 country code (e.g. 'US', 'GB', 'FR')
  countryCode: string;
  // Width and height in pixels for the flag SVG. Defaults to 40px if not specified.
  size?: number;
}

const Placeholder = (props: Pick<FlagProps, "size"> & { className?: string }) => (
  <div
    className={cn("bg-gray-100 rounded-full animate-pulse", props.className)}
    style={{ width: props.size, height: props.size }}
  />
);

const LazyFlag = forwardRef<SVGSVGElement, FlagProps>(({ countryCode, size = 40 }, ref) => {
  const FlagComponent = lazy(() =>
    import(`./flag-components/${countryCode.toLowerCase()}`).catch(() => ({
      default: () => <Placeholder size={size} className="animate-none bg-gray-200" />,
    })),
  );

  return (
    <Suspense fallback={<Placeholder size={size} />}>
      <FlagComponent ref={ref} width={size} height={size} />
    </Suspense>
  );
});

LazyFlag.displayName = "LazyFlag";

export default LazyFlag;
