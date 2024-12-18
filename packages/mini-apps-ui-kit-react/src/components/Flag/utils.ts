import * as FlagComponents from "../Flag/flag-components";
import { CountryCode } from "./Flag";

export const isSupportedCountryCode = (code: string): code is CountryCode => {
  return code.toUpperCase() in FlagComponents;
};
