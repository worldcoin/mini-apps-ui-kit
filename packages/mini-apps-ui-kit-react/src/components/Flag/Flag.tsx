import { forwardRef } from "react";

import * as FlagComponents from "./flag-components";

export type CountryCode = keyof typeof FlagComponents;

interface FlagProps {
  // ISO 3166-1 alpha-2 country code (e.g. 'US', 'GB', 'FR')
  countryCode: CountryCode;
  // Width and height in pixels for the flag SVG. Defaults to 40px if not specified.
  size?: number;
}

const Flag = forwardRef<SVGSVGElement, FlagProps>(({ countryCode, size = 40 }, ref) => {
  const Component = FlagComponents[countryCode];

  return <Component ref={ref} width={size} height={size} />;
});

Flag.displayName = "Flag";

export default Flag;
