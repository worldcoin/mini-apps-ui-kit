import { countryCodes } from "./constants";
import { CountryCode } from "./types";

export const isSupportedCountryCode = (code: string): code is CountryCode => {
  return countryCodes.includes(code.toUpperCase() as CountryCode);
};
