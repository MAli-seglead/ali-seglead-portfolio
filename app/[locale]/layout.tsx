import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import Navbar from "@/components/layout/navbar";
import { panchang } from "@/lib/fonts";
import { isRtl, locales, type Locale } from "@/i18n/config";

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
      className={`${panchang.variable} min-h-screen bg-black text-neutral-100 antialiased`}
    >
      <NextIntlClientProvider locale={safeLocale} messages={messages}>
        <Navbar />
        {children}
      </NextIntlClientProvider>
    </div>
  );
}