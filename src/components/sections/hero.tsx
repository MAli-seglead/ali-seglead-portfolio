"use client";

import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import { arabicDisplay, panchang } from "@/lib/fonts";

export default function Hero() {
  const t = useTranslations("hero");
  const locale = useLocale();
  const isArabic = locale === "ar";

  return (
    <section
      className={`relative min-h-screen overflow-hidden bg-black px-5 pb-10 pt-28 text-white md:px-6 md:pb-10 md:pt-36 ${
        isArabic ? "text-right" : "text-left"
      }`}
    >
      {/* grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.05]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:110px_110px]" />
      </div>

      {/* glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_55%_14%,rgba(255,255,255,0.08),transparent_34%)]" />

      <div className="relative mx-auto flex min-h-[calc(100vh-7rem)] max-w-7xl flex-col justify-between md:min-h-[calc(100vh-9rem)]">

        {/* TOP */}
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-start">

          <div>
            {/* eyebrow */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`mb-8 text-[10px] text-white/35 md:mb-10 md:text-xs ${
                isArabic
                  ? `${arabicDisplay.className} tracking-[0em]`
                  : "uppercase tracking-[0.38em]"
              }`}
            >
              {t("eyebrow")}
            </motion.p>

            {/* TITLE (ALWAYS ENGLISH) */}
            <motion.div
              initial={{ opacity: 0, y: 34 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-[1100px]"
            >
              <h1 className={`${panchang.className} text-[56px] font-semibold uppercase leading-[0.85] tracking-[-0.055em] text-neutral-100 sm:text-[72px] md:text-[6.5vw]`}>
                ALI
              </h1>

              <h1 className={`${panchang.className} text-[56px] font-semibold uppercase leading-[0.85] tracking-[-0.06em] text-neutral-100 sm:text-[72px] md:text-[6.5vw]`}>
                SEGLEAD
              </h1>
            </motion.div>
          </div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.35, duration: 0.55 }}
            className="hidden pt-10 md:flex md:flex-col md:items-end md:gap-3"
          >
            <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-emerald-300">
              {t("availability")}
            </span>

            <span className="rounded-full border border-white/10 px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-white/45">
              {t("location")}
            </span>

            <span className="rounded-full border border-white/10 px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-white/45">
              Multilingual Studio
            </span>
          </motion.div>
        </div>

        {/* BOTTOM */}
        <div className="grid gap-8 border-t border-white/10 pt-7 md:grid-cols-[0.95fr_1.05fr] md:items-end md:gap-10 md:pt-8">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.6 }}
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
          </motion.div>

          {/* scroll */}
          <div className="hidden justify-end md:flex">
            <motion.div
              animate={{ y: [0, 7, 0] }}
              transition={{ repeat: Infinity, duration: 1.8 }}
              className="flex items-center gap-3"
            >
              <span className="h-2 w-2 rounded-full bg-white/70" />
              <span className="text-[10px] uppercase tracking-[0.38em] text-white/32">
                Scroll
              </span>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}