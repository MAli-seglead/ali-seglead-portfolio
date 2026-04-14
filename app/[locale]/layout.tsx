import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { clashDisplay } from "@/lib/fonts";
import { isRtl, locales, type Locale } from "@/i18n/config";
import Navbar from "@/components/layout/navbar";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const safeLocale: Locale = locales.includes(locale as Locale)
    ? (locale as Locale)
    : "en";

  const messages = await getMessages();
  const dir = isRtl(safeLocale) ? "rtl" : "ltr";

  return (
    <div
      lang={safeLocale}
      dir={dir}
      className={`${clashDisplay.variable} min-h-screen bg-black text-neutral-100 antialiased`}
    >
      <NextIntlClientProvider messages={messages}>
        <Navbar />
        {children}
      </NextIntlClientProvider>
    </div>
  );
}