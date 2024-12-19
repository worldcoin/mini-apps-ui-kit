import * as FlagComponents from "../Flag/flag-components";
import { CountryCode } from "./Flag";

export const countryCodes = Object.keys(FlagComponents).map((code) =>
  code.toUpperCase(),
) as CountryCode[];
