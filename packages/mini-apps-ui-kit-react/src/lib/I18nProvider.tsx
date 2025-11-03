"use client";

import type { ReactNode } from "react";

import type { LocaleData } from "./i18n";
import { i18n } from "./i18n";

interface I18nProviderProps {
  localeData: LocaleData;
  children: ReactNode;
}

/**
 * Client-side provider that rehydrates the i18n locale state
 * to match the server-side registration.
 *
 * This ensures that the client-side i18n instance has the same
 * locale data as the server, preventing hydration mismatches.
 */
export function I18nProvider({ localeData, children }: I18nProviderProps) {
  try {
    i18n.registerLocale(localeData);
  } catch (error) {
    console.error("Error registering locale. Default to English.", error);
  }

  return <>{children}</>;
}
