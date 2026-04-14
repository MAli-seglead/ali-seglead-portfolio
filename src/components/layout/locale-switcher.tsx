"use client";

import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { localeLabels, locales } from "@/i18n/config";

type Props = {
  bubble?: boolean;
};

export default function LocaleSwitcher({ bubble = false }: Props) {
  const locale = useLocale();
  const pathname = usePathname();

  return (
    <div
      className={[
        "flex w-fit items-center gap-1 rounded-full p-1 transition-all duration-500",
        bubble
          ? "border border-white/10 bg-black/20 backdrop-blur-md"
          : "border border-transparent bg-transparent"
      ].join(" ")}
    >
      {locales.map((item) => {
        const active = item === locale;

        return (
          <Link
            key={item}
            href={pathname}
            locale={item}
            className="relative rounded-full px-3 py-2 text-xs uppercase tracking-[0.22em] text-white/60 transition duration-300 hover:text-white"
          >
            {active ? (
              <motion.span
                layoutId="locale-pill"
                className="absolute inset-0 rounded-full bg-white"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            ) : null}
            <span className={`relative z-10 ${active ? "text-black" : ""}`}>
              {localeLabels[item]}
            </span>
          </Link>
        );
      })}
    </div>
  );
}