import { I18nProvider, loadLocale } from "@worldcoin/mini-apps-ui-kit-react";

import HomeContent from "./components/HomeContent";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { locale } = await searchParams;
  const localeValue = typeof locale === "string" ? locale.toLowerCase() : "en";

  // Load locale on server using the SSR-friendly loader
  const localeData = await loadLocale(localeValue);

  return (
    <I18nProvider localeData={localeData}>
      <HomeContent locale={localeValue} />
    </I18nProvider>
  );
}
