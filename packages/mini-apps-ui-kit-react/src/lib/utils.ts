import { type ClassValue, clsx } from "clsx";
import { ChangeEvent } from "react";
import { twMerge } from "tailwind-merge";

import { type LocaleData, i18n } from "./i18n";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const createChangeEvent = (target: HTMLInputElement) => {
  const event = new Event("change", { bubbles: true });
  Object.defineProperty(event, "target", { value: target });
  Object.defineProperty(event, "currentTarget", { value: target });
  return event as unknown as ChangeEvent<HTMLInputElement>;
};

/**
 * Gets the localized country name for a given country code.
 * @param countryCode - The ISO 3166-1 alpha-2 country code (e.g., "US", "GB")
 * @param locale - The locale to use for translation (e.g., "en", "es")
 * @param fallbackName - Optional fallback name to use if no translation is found
 * @returns The localized country name, or the fallback name if provided, or undefined
 */
export const getCountryName = (
  countryCode: string,
  locale: LocaleData["locale"],
  fallbackName?: string,
): string => {
  return i18n.getName(countryCode, locale) ?? fallbackName ?? "";
};
