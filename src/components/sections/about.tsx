"use client";

import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { arabicDisplay, panchang } from "@/lib/fonts";

export default function AboutSection() {
  const t = useTranslations("aboutSection");
  const locale = useLocale();
  const isArabic = locale === "ar";

  const titleClass = isArabic
    ? `${arabicDisplay.className} mb-10 text-[42px] font-bold leading-[0.95] tracking-[0em] text-neutral-100 md:mb-16 md:text-8xl`
    : `${panchang.className} mb-10 text-[42px] font-semibold uppercase leading-[0.9] tracking-[-0.065em] text-neutral-100 md:mb-16 md:text-8xl`;

  const capabilities = [
    {
      title: t("capabilities.brandDirection.title"),
      description: t("capabilities.brandDirection.description")
    },
    {
      title: t("capabilities.premiumWebDesign.title"),
      description: t("capabilities.premiumWebDesign.description")
    },
    {
      title: t("capabilities.creativeDevelopment.title"),
      description: t("capabilities.creativeDevelopment.description")
    },
    {
      title: t("capabilities.uxStructure.title"),
      description: t("capabilities.uxStructure.description")
    },
    {
      title: t("capabilities.conversionFocus.title"),
      description: t("capabilities.conversionFocus.description")
    },
    {
      title: t("capabilities.multilingualExperiences.title"),
      description: t("capabilities.multilingualExperiences.description")
    }
  ];

  return (
    <section
      id="about"
      className={`bg-black px-5 py-24 text-white md:px-6 md:py-36 ${isArabic ? "text-right" : "text-left"}`}
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p
            className={`mb-5 text-[10px] text-white/40 md:mb-6 md:text-xs ${
              isArabic
                ? `${arabicDisplay.className} tracking-[0em]`
                : "uppercase tracking-[0.35em]"
            }`}
          >
            {t("eyebrow")}
          </p>

          <h2 className={titleClass}>{t("title")}</h2>
        </motion.div>

        <div className="grid gap-10 border-t border-white/10 pt-8 md:grid-cols-[1.05fr_0.95fr] md:gap-20 md:pt-12">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-[360px] md:max-w-2xl"
          >
            <p
              className={`mb-6 text-[24px] text-white/88 md:mb-8 md:text-[2rem] ${
                isArabic
                  ? `${arabicDisplay.className} leading-[1.55] tracking-[0em]`
                  : "leading-[1.22] tracking-[-0.03em] md:leading-[1.35]"
              }`}
            >
              {t("intro")}
            </p>

            <div className="space-y-5 md:space-y-6">
              <p
                className={`text-[15px] text-white/60 md:text-lg ${
                  isArabic
                    ? `${arabicDisplay.className} leading-[2] tracking-[0em]`
                    : "leading-7 md:leading-8"
                }`}
              >
                {t("paragraph1")}
              </p>

              <p
                className={`text-[15px] text-white/50 md:text-lg ${
                  isArabic
                    ? `${arabicDisplay.className} leading-[2] tracking-[0em]`
                    : "leading-7 md:leading-8"
                }`}
              >
                {t("paragraph2")}
              </p>
            </div>
          </motion.div>

          <div className="space-y-1">
            {capabilities.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="group border-b border-white/10 py-4 md:py-5"
              >
                <div
                  className={`flex items-start gap-4 md:gap-6 ${
                    isArabic ? "justify-between flex-row-reverse" : "justify-between"
                  }`}
                >
                  <div>
                    <h3
                      className={`mb-1.5 text-[17px] font-medium text-white/90 transition duration-300 group-hover:text-white md:mb-2 md:text-xl ${
                        isArabic
                          ? `${arabicDisplay.className} tracking-[0em]`
                          : "tracking-[-0.02em]"
                      }`}
                    >
                      {item.title}
                    </h3>
                    <p
                      className={`max-w-xl text-[12px] text-white/48 md:text-sm ${
                        isArabic
                          ? `${arabicDisplay.className} leading-[1.9] tracking-[0em] md:leading-[2]`
                          : "leading-6 md:leading-7"
                      }`}
                    >
                      {item.description}
                    </p>
                  </div>

                  <span className="mt-1 text-white/22 transition duration-300 group-hover:translate-x-1 group-hover:text-white/55">
                    ↗
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}