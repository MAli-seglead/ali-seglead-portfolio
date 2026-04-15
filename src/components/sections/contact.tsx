"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { panchang } from "@/lib/fonts";

export default function ContactSection() {
  const t = useTranslations("contactSection");

  const contactLinks = [
    {
      id: "email",
      label: t("links.email"),
      value: "m.ali@seglead.com",
      href: "mailto:m.ali@seglead.com"
    },
    {
      id: "website",
      label: t("links.website"),
      value: "seglead.com",
      href: "https://seglead.com"
    },
    {
      id: "linkedin",
      label: t("links.linkedin"),
      value: "abdulrahman mohamed ali",
      href: "https://www.linkedin.com/in/abdulrahman-mohamed-ali-249051345/"
    },
    {
      id: "github",
      label: t("links.github"),
      value: "MAli-seglead",
      href: "https://github.com/MAli-seglead"
    },
    {
      id: "upwork",
      label: t("links.upwork"),
      value: t("links.upworkValue"),
      href: "#"
    },
    {
      id: "location",
      label: t("links.location"),
      value: "Istanbul, Türkiye",
      href: "#"
    }
  ];

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-black px-5 pb-16 pt-24 text-white md:px-6 md:pb-28 md:pt-36"
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.05]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:110px_110px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-5 text-[10px] uppercase tracking-[0.35em] text-white/40 md:mb-6 md:text-xs">
            {t("eyebrow")}
          </p>

          <h2
            className={`${panchang.className} max-w-5xl text-[42px] font-semibold uppercase leading-[0.88] tracking-[-0.065em] text-neutral-100 md:text-8xl xl:text-[9rem]`}
          >
            {t("titleLine1")}
            <br />
            {t("titleLine2")}
          </h2>
        </motion.div>

        <div className="mt-10 grid gap-10 border-t border-white/10 pt-8 md:mt-14 md:grid-cols-[1.05fr_0.95fr] md:gap-12 md:pt-10">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-[380px] md:max-w-2xl"
          >
            <p className="text-[15px] leading-7 text-white/60 md:text-2xl md:leading-10">
              {t("description")}
            </p>

            <div className="mt-8 md:mt-10">
              <a
                href="mailto:m.ali@seglead.com"
                className="group inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text-[11px] uppercase tracking-[0.24em] text-white transition duration-300 hover:border-white/20 hover:bg-white/[0.06] md:gap-4 md:px-7 md:py-4 md:text-sm"
              >
                {t("cta")}
                <span className="transition group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗
                </span>
              </a>
            </div>
          </motion.div>

          <div className="space-y-1">
            {contactLinks.map((item, index) => {
              const content = (
                <div className="group flex items-center justify-between gap-4 border-b border-white/10 py-4 md:py-5">
                  <div>
                    <p className="mb-1 text-[10px] uppercase tracking-[0.24em] text-white/30 md:text-[11px]">
                      {item.label}
                    </p>
                    <p className="text-[16px] leading-6 text-white/90 transition group-hover:text-white md:text-xl">
                      {item.value}
                    </p>
                  </div>

                  <span className="text-white/30 transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white">
                    ↗
                  </span>
                </div>
              );

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  {item.href !== "#" ? (
                    <a href={item.href} target="_blank" rel="noreferrer">
                      {content}
                    </a>
                  ) : (
                    content
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}