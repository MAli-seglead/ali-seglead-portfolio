export const locales = ["en", "tr", "ar"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeLabels: Record<Locale, string> = {
  en: "EN",
  tr: "TR",
  ar: "AR"
};

export const isRtl = (locale: string) => locale === "ar";