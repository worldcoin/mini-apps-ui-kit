import { cn } from "@/lib/utils";
import { HTMLAttributes, forwardRef } from "react";

import { CountryCode } from "./types";

const DEFAULT_CDN_URL = "https://mini-apps-ui-kit.world.org/flags/";
const DEFAULT_CDN_SUFFIX = "svg";

interface FlagProps extends Omit<HTMLAttributes<HTMLImageElement>, "width" | "height"> {
  /**
   * ISO 3166-1 alpha-2 country code (e.g. 'US', 'GB', 'FR')
   */
  countryCode: CountryCode;
  /**
   * Width and height in pixels for the flag SVG. Defaults to 40px if not specified.
   */
  size?: number;
}

export const Flag = forwardRef<HTMLImageElement, FlagProps>(
  ({ countryCode, size = 40, className, title, ...props }, ref) => {
    return (
      <img
        ref={ref}
        width={size}
        height={size}
        title={title ?? countryCode}
        src={`${DEFAULT_CDN_URL}${countryCode}.${DEFAULT_CDN_SUFFIX}`}
        className={cn("object-cover bg-gray-100 rounded-full", className)}
        {...props}
      />
    );
  },
);

Flag.displayName = "Flag";

export default Flag;
