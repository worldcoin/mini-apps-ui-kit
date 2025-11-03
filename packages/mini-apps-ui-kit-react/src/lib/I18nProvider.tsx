"use client";

import { useEffect } from "react";
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
  useEffect(() => {
    // Rehydrate the locale on the client side
    i18n.registerLocale(localeData);
  }, [localeData]);

  return <>{children}</>;
}

