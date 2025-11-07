"use client";

import { type ReactNode, createContext, useContext, useRef } from "react";

import { type I18nStore, type LocaleData, createI18nStore, i18n } from "./i18n";

type LocaleSeed = LocaleData | LocaleData[] | undefined;

interface I18nProviderProps {
  localeData?: LocaleSeed;
  store?: I18nStore;
  children: ReactNode;
}

const I18nContext = createContext<I18nStore | null>(null);

const registerLocales = (store: I18nStore, seed: LocaleSeed) => {
  if (!seed) {
    return;
  }

  const locales = Array.isArray(seed) ? seed : [seed];

  for (const localeData of locales) {
    try {
      store.registerLocale(localeData);
    } catch (error) {
      console.error(`Error registering locale "${localeData.locale}".`, error);
    }
  }
};

/**
 * Provides an isolated i18n store instance for the subtree.
 *
 * When no store is supplied, a fresh instance is created on mount.
 * Locale data can be seeded via the `localeData` prop and will be
 * registered synchronously to avoid hydration mismatches.
 */
export function I18nProvider({ localeData, store, children }: I18nProviderProps) {
  const storeRef = useRef<I18nStore | null>(store ?? null);

  if (store && storeRef.current !== store) {
    storeRef.current = store;
  }

  if (!storeRef.current) {
    storeRef.current = createI18nStore();
  }

  registerLocales(storeRef.current, localeData);

  return <I18nContext.Provider value={storeRef.current}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18nStore {
  return useContext(I18nContext) ?? i18n;
}

export { I18nContext };
