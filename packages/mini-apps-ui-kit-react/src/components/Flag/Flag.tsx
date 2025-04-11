import { cn } from "@/lib/utils";
import { HTMLAttributes, forwardRef } from "react";

import { CountryCode } from "./types";

const DEFAULT_CDN_URL = "https://mini-apps-ui-kit.world.org/flags/";
const DEFAULT_CDN_SUFFIX = "svg";

/* Unsupported countries:
 * - Antarctica (AQ)
 * - Bouvet Island (BV)
 * - Christmas Island (CX)
 * - Western Sahara (EH)
 * - French Guiana (GF)
 * - South Georgia and the South Sandwich Islands (GS)
 * - Heard Island and McDonald Islands (HM)
 * - Saint Kitts and Nevis (KN)
 * - Saint Martin (MF)
 * - New Caledonia (NC)
 * - Saint Pierre and Miquelon (PM)
 * - Reunion (RE)
 * - Saint Helena (SH)
 * - Svalbard and Jan Mayen (SJ)
 * - French Southern Territories (TF)
 * - U.S. Minor Outlying Islands (UM)
 * - U.S. Virgin Islands (VI)
 * - Wallis and Futuna (WF)
 * - Mayotte (YT)
 */
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
