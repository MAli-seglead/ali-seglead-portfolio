"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import LocaleSwitcher from "@/components/layout/locale-switcher";
import { Link } from "@/i18n/navigation";


export default function Navbar() {
  const locale = useLocale();
  const t = useTranslations("nav");

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const onScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="w-full px-5 pt-5 md:px-10 md:pt-8">
          <div className="relative h-14 md:h-16">
            <AnimatePresence initial={false} mode="popLayout">
              {!scrolled ? (
                <motion.div
                  key="top-nav"
                  initial={mounted ? { opacity: 0, y: -10 } : false}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10, scale: 0.985 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0"
                >

                    
                  <div className="flex h-full items-center justify-between">
                    <Link
                      href="/"
                      locale={locale}
                      className="text-lg font-semibold tracking-tight text-white transition duration-300 hover:opacity-80 md:text-2xl"
                    >
                      ali seglead
                    </Link>

                    <div className="hidden items-center gap-5 md:flex">
                      <DesktopLinks t={t} />
                      <LocaleSwitcher bubble={false} />
                    </div>

                    <MobileMenuButton
                      open={menuOpen}
                      onClick={() => setMenuOpen(true)}
                      bubble={false}
                    />
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="bubble-nav"
                  initial={{ opacity: 0, y: -10, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.985 }}
                  transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0"
                >
                  <div className="mx-auto flex h-full w-full max-w-[1080px] items-center justify-between rounded-full border border-white/10 bg-black/45 px-5 shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-2xl md:px-6">
                    <Link
                      href="/"
                      locale={locale}
                      className="text-lg font-semibold tracking-tight text-white transition duration-300 hover:opacity-80"
                    >
                      ali seglead
                    </Link>

                    <div className="hidden items-center gap-5 md:flex">
                      <DesktopLinks t={t} compact />
                      <LocaleSwitcher bubble />
                    </div>

                    <MobileMenuButton
                      open={menuOpen}
                      onClick={() => setMenuOpen(true)}
                      bubble
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-0 z-[60] md:hidden"
          >
            <motion.button
              aria-label="Close menu overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
              className="absolute inset-0 bg-black/78 backdrop-blur-2xl"
            />

            <motion.div
              initial={{ opacity: 0, y: -18, scale: 0.985 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -14, scale: 0.99 }}
              transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-x-0 top-0 mx-4 mt-4 overflow-hidden rounded-[2rem] border border-white/10 bg-black/72 shadow-[0_18px_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl"
            >
              <div className="px-5 pb-7 pt-5">
                <div className="mb-10 flex items-center justify-between">
                  <Link
                    href="/"
                    locale={locale}
                    onClick={closeMenu}
                    className="text-lg font-semibold tracking-tight text-white"
                  >
                    ali seglead
                  </Link>

                  <button
                    type="button"
                    aria-label="Close menu"
                    onClick={closeMenu}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white transition duration-300 active:scale-95"
                  >
                    <span className="text-2xl leading-none">×</span>
                  </button>
                </div>

                <motion.nav
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  variants={{
                    hidden: {},
                    show: {
                      transition: {
                        staggerChildren: 0.06,
                        delayChildren: 0.04
                      }
                    }
                  }}
                  className="flex flex-col"
                >
                  {[
                    { label: t("work"), href: "#work" },
                    { label: t("about"), href: "#about" },
                    { label: t("contact"), href: "#contact" }
                  ].map((item) => (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      onClick={closeMenu}
                      variants={{
                        hidden: { opacity: 0, y: 14 },
                        show: { opacity: 1, y: 0 }
                      }}
                      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                      className="group flex items-center justify-between border-b border-white/8 py-5 text-[2rem] font-medium uppercase tracking-[-0.04em] text-white"
                    >
                      <span>{item.label}</span>
                      <span className="translate-x-0 text-white/30 transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white">
                        ↗
                      </span>
                    </motion.a>
                  ))}
                </motion.nav>

                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ delay: 0.18, duration: 0.28 }}
                  className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-6"
                >
                  <LocaleSwitcher bubble />
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] uppercase tracking-[0.3em] text-white/35">
                      Language
                    </span>
                    <span className="text-[11px] uppercase tracking-[0.3em] text-white/22">
                      Menu
                    </span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

function DesktopLinks({
  t,
  compact = false
}: {
  t: (key: string) => string;
  compact?: boolean;
}) {
  const links = [
    { label: t("work"), href: "#work" },
    { label: t("about"), href: "#about" },
    { label: t("contact"), href: "#contact" }
  ];

  return (
    <nav className={`flex items-center ${compact ? "gap-8" : "gap-10"}`}>
      {links.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className="group relative text-sm uppercase tracking-[0.22em] text-white/65 transition duration-300 hover:text-white"
        >
          <span className="transition duration-300 group-hover:-translate-y-[1px] group-hover:tracking-[0.26em]">
            {item.label}
          </span>
          <span className="absolute -bottom-1 left-0 h-px w-0 bg-white/80 transition-all duration-300 group-hover:w-full" />
        </a>
      ))}
    </nav>
  );
}

function MobileMenuButton({
  open,
  onClick,
  bubble
}: {
  open: boolean;
  onClick: () => void;
  bubble: boolean;
}) {
  return (
    <button
      type="button"
      aria-label={open ? "Close menu" : "Open menu"}
      onClick={onClick}
      className={[
        "flex h-11 w-11 items-center justify-center text-white transition-all duration-300 active:scale-95 md:hidden",
        bubble
          ? "rounded-full border border-white/10 bg-black/45 backdrop-blur-xl"
          : "rounded-full border border-transparent bg-transparent"
      ].join(" ")}
    >
      <div className="relative h-4 w-5">
        <span className="absolute left-0 top-0 block h-px w-5 bg-white" />
        <span className="absolute left-0 top-1.5 block h-px w-5 bg-white/80" />
        <span className="absolute left-0 top-3 block h-px w-5 bg-white/60" />
      </div>
    </button>
  );
}