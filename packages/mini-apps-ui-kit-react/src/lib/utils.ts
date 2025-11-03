import { type ClassValue, clsx } from "clsx";
import { ChangeEvent } from "react";
import { twMerge } from "tailwind-merge";

import { i18n } from "./i18n";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const createChangeEvent = (target: HTMLInputElement) => {
  const event = new Event("change", { bubbles: true });
  Object.defineProperty(event, "target", { value: target });
  Object.defineProperty(event, "currentTarget", { value: target });
  return event as unknown as ChangeEvent<HTMLInputElement>;
};

export const getCountryName = (
  country: {
    countryCode: string;
    name: string;
  },
  locale: string,
) => {
  return i18n.getName(country.countryCode, locale as any) ?? country.name;
};
