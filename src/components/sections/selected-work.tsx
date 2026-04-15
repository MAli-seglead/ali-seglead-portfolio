"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { arabicDisplay, panchang } from "@/lib/fonts";

export default function WorkSection() {
  const t = useTranslations("work");
  const locale = useLocale();
  const isArabic = locale === "ar";

  const sectionTitleClass = isArabic
    ? `${arabicDisplay.className} mb-6 text-[42px] font-bold leading-[0.95] tracking-[0em] text-neutral-100 md:mb-8 md:text-8xl`
    : `${panchang.className} mb-6 text-[42px] font-semibold uppercase leading-[0.9] tracking-[-0.065em] text-neutral-100 md:mb-8 md:text-8xl`;

  const cardTitleClass = isArabic
    ? `${arabicDisplay.className} max-w-[420px] text-[20px] font-bold leading-[1.4] tracking-[0em] text-neutral-100 md:text-[2.45vw] md:leading-[1.25]`
    : `max-w-[420px] text-[20px] font-semibold leading-[1.2] tracking-[-0.02em] text-neutral-100 md:max-w-[520px] md:text-[2.2vw] md:leading-[1.1]`;

  const projects = [
    {
      id: "01",
      title: t("projects.seglead.title"),
      subtitle: t("projects.seglead.subtitle"),
      href: "https://seglead.com",
      tags: [
        t("projects.seglead.tags.one"),
        t("projects.seglead.tags.two"),
        t("projects.seglead.tags.three")
      ],
      stats: [
        {
          label: t("projects.seglead.stats.oneLabel"),
          value: t("projects.seglead.stats.oneValue")
        },
        {
          label: t("projects.seglead.stats.twoLabel"),
          value: t("projects.seglead.stats.twoValue")
        }
      ],
      gradient: "from-[#0a0a0a] via-[#161616] to-[#000000]",
      accent: "bg-[#00ff9c]",
      isSeglead: true
    },
    {
      id: "02",
      title: t("projects.growth.title"),
      subtitle: t("projects.growth.subtitle"),
      href: "#",
      tags: [t("projects.growth.tags.one"), t("projects.growth.tags.two")],
      stats: [
        {
          label: t("projects.growth.stats.oneLabel"),
          value: t("projects.growth.stats.oneValue")
        },
        {
          label: t("projects.growth.stats.twoLabel"),
          value: t("projects.growth.stats.twoValue")
        }
      ],
      gradient: "from-[#2c2018] via-[#7a4e2c] to-[#d98a46]",
      accent: "bg-[#ffb35c]",
      isSeglead: false
    }
  ];

  return (
    <section
      id="work"
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
            className={`mb-5 text-[10px] text-white/35 md:mb-6 md:text-xs ${
              isArabic
                ? `${arabicDisplay.className} tracking-[0em]`
                : "uppercase tracking-[0.35em]"
            }`}
          >
            {t("eyebrow")}
          </p>

          <h2 className={sectionTitleClass}>{t("title")}</h2>

          <p
            className={`max-w-[520px] text-[14px] leading-7 text-white/55 md:text-[16px] md:leading-8 ${
              isArabic ? `${arabicDisplay.className} tracking-[0em]` : ""
            }`}
          >
            {t("description")}
          </p>
        </motion.div>

        <div className="mt-10 space-y-5 md:mt-14 md:space-y-8">
          {projects.map((project, index) => {
            const content = (
              <div className="grid md:grid-cols-[0.98fr_1.02fr]">
                <div className="flex flex-col justify-between p-5 md:p-12">
                  <div className="max-w-[420px] md:max-w-[520px]">
                    <div
                      className={`mb-5 flex items-center gap-4 md:mb-6 ${
                        isArabic ? "justify-between flex-row-reverse" : "justify-between"
                      }`}
                    >
                      <span
                        className={`text-xs text-white/35 md:text-sm ${
                          isArabic ? arabicDisplay.className : ""
                        }`}
                      >
                        {project.id}
                      </span>

                      <motion.span
                        variants={{ hover: { x: isArabic ? -4 : 4, y: -4 } }}
                        transition={{ duration: 0.35 }}
                        className="text-2xl text-white/30 transition group-hover:text-white/75 md:text-3xl"
                      >
                        ↗
                      </motion.span>
                    </div>

                    <p
                      className={`mb-3 text-[11px] text-white/40 md:text-sm ${
                        isArabic ? `${arabicDisplay.className} tracking-[0em]` : ""
                      }`}
                    >
                      {project.subtitle}
                    </p>

                    <div
                      className={`mb-4 flex flex-wrap gap-2 ${
                        isArabic ? "justify-end" : ""
                      }`}
                    >
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`rounded-full border border-white/10 px-2.5 py-1 text-white/55 md:px-3 ${
                            isArabic
                              ? `${arabicDisplay.className} text-[11px] tracking-[0em]`
                              : "text-[10px] uppercase tracking-[0.18em] md:text-[11px]"
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <motion.h3
                      variants={{ hover: { y: -2 } }}
                      transition={{ duration: 0.35 }}
                      className={cardTitleClass}
                    >
                      {project.title}
                    </motion.h3>
                  </div>

                  <div className={`mt-6 flex gap-8 ${isArabic ? "justify-end" : ""}`}>
                    {project.stats.map((stat) => (
                      <div key={stat.label}>
                        <div
                          className={`text-[18px] font-semibold text-white md:text-[28px] ${
                            isArabic
                              ? `${arabicDisplay.className} tracking-[0em]`
                              : ""
                          }`}
                        >
                          {stat.value}
                        </div>

                        <div
                          className={`mt-1 text-[11px] text-white/40 ${
                            isArabic
                              ? `${arabicDisplay.className} leading-[1.9] tracking-[0em]`
                              : ""
                          }`}
                        >
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative min-h-[180px] overflow-hidden md:min-h-[520px]">
                  <motion.div
                    variants={{ hover: { scale: 1.035 } }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`}
                  />

                  <motion.div
                    variants={{ hover: { opacity: 1 } }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0 opacity-80 bg-[radial-gradient(circle_at_50%_30%,rgba(255,255,255,0.12),transparent_26%),linear-gradient(to_bottom,rgba(0,0,0,0.04),rgba(0,0,0,0.28))] md:opacity-100"
                  />

                  <motion.div
                    variants={{ hover: { rotate: -6, y: -10, x: -8 } }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute bottom-3 right-3 h-[132px] w-[78px] rounded-[1.4rem] border border-black/20 bg-black/75 p-1.5 shadow-[0_20px_60px_rgba(0,0,0,0.45)] md:right-[8%] md:top-1/2 md:h-[410px] md:w-[230px] md:-translate-y-1/2 md:rounded-[2rem] md:p-2"
                  >
                    {project.isSeglead ? (
                      <div className="relative h-full w-full overflow-hidden rounded-[1rem] bg-neutral-950 md:rounded-[1.5rem]">
                        <Image
                          src="/images/projects/seglead-home.jpg"
                          alt="Seglead homepage preview"
                          fill
                          className="object-cover object-top"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                      </div>
                    ) : (
                      <div className="relative h-full w-full overflow-hidden rounded-[1rem] bg-neutral-950 md:rounded-[1.5rem]">
                        <div className={`h-8 md:h-20 ${project.accent} opacity-80`} />
                        <div className="space-y-2 p-2 md:space-y-3 md:p-4">
                          <div className="h-1.5 w-10 rounded-full bg-white/80 md:h-3 md:w-24" />
                          <div className="h-1 w-14 rounded-full bg-white/35 md:h-2 md:w-32" />
                          <div className="grid grid-cols-2 gap-2 pt-1 md:gap-3 md:pt-4">
                            <div className="h-8 rounded-xl bg-white/8 md:h-20 md:rounded-2xl" />
                            <div className="h-8 rounded-xl bg-white/8 md:h-20 md:rounded-2xl" />
                          </div>
                          <div className="h-10 rounded-2xl bg-white/8 md:h-24 md:rounded-3xl" />
                          <div className="space-y-1.5 md:space-y-2">
                            <div className="h-1 rounded-full bg-white/20 md:h-2" />
                            <div className="h-1 w-4/5 rounded-full bg-white/15 md:h-2" />
                            <div className="h-1 w-3/5 rounded-full bg-white/10 md:h-2" />
                          </div>
                        </div>
                      </div>
                    )}
                  </motion.div>

                  <div className="absolute bottom-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-white text-black shadow-[0_14px_35px_rgba(0,0,0,0.28)] transition duration-300 group-hover:scale-105 md:bottom-8 md:right-8 md:h-16 md:w-16">
                    <span className="text-sm md:text-2xl">→</span>
                  </div>
                </div>
              </div>
            );

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 34 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1]
                }}
                whileHover="hover"
                className="group relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/[0.02] md:rounded-[2rem]"
              >
                {project.href !== "#" ? (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="block"
                  >
                    {content}
                  </a>
                ) : (
                  content
                )}
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}