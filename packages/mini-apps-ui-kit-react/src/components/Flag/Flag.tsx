import { forwardRef } from "react";

import * as FlagComponents from "./flag-components";

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
export type CountryCode = keyof typeof FlagComponents;
interface FlagProps {
  /**
   * ISO 3166-1 alpha-2 country code (e.g. 'US', 'GB', 'FR')
   */
  countryCode: CountryCode;
  /**
   * Width and height in pixels for the flag SVG. Defaults to 40px if not specified.
   */
  size?: number;
}

const Flag = forwardRef<SVGSVGElement, FlagProps>(({ countryCode, size = 40 }, ref) => {
  const Component = FlagComponents[countryCode];

  return <Component ref={ref} width={size} height={size} />;
});

Flag.displayName = "Flag";

export default Flag;
