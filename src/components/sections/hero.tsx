"use client";

import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { arabicDisplay, panchang } from "@/lib/fonts";

export default function Hero() {
  const t = useTranslations("hero");
  const locale = useLocale();
  const isArabic = locale === "ar";

  const titleLine1Class = isArabic
    ? `${arabicDisplay.className} text-[64px] font-bold leading-[1.05] tracking-[0em] text-neutral-100 sm:text-[64px] md:text-[6.5vw]`
    : `${panchang.className} text-[64px] font-semibold uppercase leading-[0.82] tracking-[-0.065em] text-neutral-100 sm:text-[68px] md:text-[7.5vw]`;

  const titleLine2Class = isArabic
    ? `${arabicDisplay.className} text-[64px] font-bold leading-[1.05] tracking-[0em] text-neutral-100 sm:text-[64px] md:text-[6.5vw]`
    : `${panchang.className} text-[64px] font-semibold uppercase leading-[0.82] tracking-[-0.07em] text-neutral-100 sm:text-[68px] md:text-[7.5vw]`;

  return (
    <section
      className={`relative min-h-screen overflow-hidden bg-black px-5 pb-10 pt-28 text-white md:px-6 md:pb-10 md:pt-36 ${
        isArabic ? "text-right" : "text-left"
      }`}
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.05]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:110px_110px]" />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_55%_14%,rgba(255,255,255,0.08),transparent_34%)]" />

      <div className="relative mx-auto flex min-h-[calc(100vh-7rem)] max-w-7xl flex-col justify-between md:min-h-[calc(100vh-9rem)]">
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-start">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className={`mb-8 text-[10px] text-white/35 md:mb-10 md:text-xs ${
                isArabic
                  ? `${arabicDisplay.className} tracking-[0em]`
                  : "uppercase tracking-[0.38em]"
              }`}
            >
              {t("eyebrow")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 34 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className={isArabic ? "max-w-[980px] md:mr-auto" : "max-w-[1200px]"}
            >
              <h1 className={titleLine1Class}>
                {isArabic ? t("titleLine1") : "ALI"}
              </h1>

              {isArabic ? (
                <h1 className={titleLine2Class}>{t("titleLine2")}</h1>
              ) : (
                <>
                  <h1 className={`${titleLine2Class} md:hidden`}>
                    SEG
                    <br />
                    LEAD
                  </h1>

                  <h1 className={`${titleLine2Class} hidden md:block`}>
                    SEGLEAD
                  </h1>
                </>
              )}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: isArabic ? -28 : 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.35, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className={`hidden pt-10 md:flex md:flex-col md:gap-3 ${
              isArabic ? "md:items-start" : "md:items-end"
            }`}
          >
            <span
              className={`rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-[11px] text-emerald-300 ${
                isArabic
                  ? `${arabicDisplay.className} tracking-[0em]`
                  : "uppercase tracking-[0.22em]"
              }`}
            >
              {t("availability")}
            </span>

            <span
              className={`rounded-full border border-white/10 px-4 py-2 text-[11px] text-white/45 ${
                isArabic
                  ? `${arabicDisplay.className} tracking-[0em]`
                  : "uppercase tracking-[0.22em]"
              }`}
            >
              {t("location")}
            </span>

            <span
              className={`rounded-full border border-white/10 px-4 py-2 text-[11px] text-white/45 ${
                isArabic
                  ? `${arabicDisplay.className} tracking-[0em]`
                  : "uppercase tracking-[0.22em]"
              }`}
            >
              {isArabic ? "استوديو متعدد اللغات" : "Multilingual Studio"}
            </span>
          </motion.div>
        </div>

        <div
          className={`grid gap-8 border-t border-white/10 pt-7 md:grid-cols-[0.95fr_1.05fr] md:items-end md:gap-10 md:pt-8 ${
            isArabic ? "md:[direction:rtl]" : ""
          }`}
        >
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-[430px]"
          >
            <p
              className={`text-[15px] text-white/58 md:text-[1.2rem] ${
                isArabic
                  ? `${arabicDisplay.className} leading-[2] tracking-[0em]`
                  : "leading-7 md:leading-[1.8]"
              }`}
            >
              {t("description")}
            </p>

            <div className={`mt-5 flex flex-wrap gap-2 md:hidden ${isArabic ? "justify-end" : ""}`}>
              <span
                className={`rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-[10px] text-emerald-300 ${
                  isArabic
                    ? `${arabicDisplay.className} tracking-[0em]`
                    : "uppercase tracking-[0.2em]"
                }`}
              >
                {t("availability")}
              </span>

              <span
                className={`rounded-full border border-white/10 px-3 py-1.5 text-[10px] text-white/45 ${
                  isArabic
                    ? `${arabicDisplay.className} tracking-[0em]`
                    : "uppercase tracking-[0.2em]"
                }`}
              >
                {t("location")}
              </span>

              <span
                className={`rounded-full border border-white/10 px-3 py-1.5 text-[10px] text-white/45 ${
                  isArabic
                    ? `${arabicDisplay.className} tracking-[0em]`
                    : "uppercase tracking-[0.2em]"
                }`}
              >
                {isArabic ? "متعدد اللغات" : "Multilingual"}
              </span>
            </div>
          </motion.div>

          <div className={`hidden md:flex ${isArabic ? "justify-start" : "justify-end"}`}>
            <motion.div
              animate={{ y: [0, 7, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
              className="flex items-center gap-3"
            >
              {!isArabic && <span className="h-2 w-2 rounded-full bg-white/70" />}
              <span
                className={`text-[10px] text-white/32 ${
                  isArabic
                    ? `${arabicDisplay.className} tracking-[0em]`
                    : "uppercase tracking-[0.38em]"
                }`}
              >
                {isArabic ? "مرر" : "Scroll"}
              </span>
              {isArabic && <span className="h-2 w-2 rounded-full bg-white/70" />}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}