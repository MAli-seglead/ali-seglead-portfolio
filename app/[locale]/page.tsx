import { getTranslations } from "next-intl/server";
import WorkSection from "@/components/sections/selected-work";
import AboutSection from "@/components/sections/about";
import ContactSection from "@/components/sections/contact";

export default async function HomePage() {
  const t = await getTranslations("hero");

  return (
    <main className="bg-black text-white">
      <section className="relative min-h-screen overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-[0.05]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:110px_110px]" />
        </div>

        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.07),transparent_55%)]" />

        <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-between px-5 pb-8 pt-28 md:px-6 md:pb-10 md:pt-56">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-start md:gap-10">
            <div>
              <p className="mb-6 text-[10px] uppercase tracking-[0.36em] text-white/38 md:mb-8 md:text-xs md:tracking-[0.4em]">
                {t("eyebrow")}
              </p>

              <h1 className="max-w-[10ch] text-[42px] font-bold uppercase leading-[0.92] tracking-[-0.08em] text-neutral-100 sm:text-[56px] md:max-w-[13ch] md:text-[9rem] md:leading-[0.82] xl:text-[12rem]">
                <span className="block">{t("titleLine1")}</span>
                <span className="block">{t("titleLine2")}</span>
              </h1>
            </div>

            <div className="hidden pt-6 md:flex md:flex-col md:items-end md:gap-4">
              <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-xs uppercase tracking-[0.22em] text-emerald-300 backdrop-blur-md">
                {t("availability")}
              </div>
              <div className="rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.22em] text-white/50">
                {t("location")}
              </div>
            </div>
          </div>

          <div className="grid gap-8 border-t border-white/10 pt-7 md:grid-cols-[1.1fr_0.9fr] md:items-end md:gap-10 md:pt-8">
            <div className="max-w-md md:max-w-xl">
              <p className="text-[15px] leading-7 text-white/58 md:text-[1.15rem] md:leading-[1.9]">
                {t("description")}
              </p>

              <div className="mt-5 flex flex-wrap gap-2 md:hidden">
                <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-[11px] uppercase tracking-[0.2em] text-emerald-300 backdrop-blur-md">
                  {t("availability")}
                </div>
                <div className="rounded-full border border-white/10 px-3 py-1.5 text-[11px] uppercase tracking-[0.2em] text-white/50">
                  {t("location")}
                </div>
              </div>
            </div>

            <div className="flex items-end justify-end">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-white/70" />
                <span className="text-[10px] uppercase tracking-[0.32em] text-white/35 md:text-[11px] md:tracking-[0.38em]">
                  Scroll
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-black/70">
        <div className="flex overflow-x-auto whitespace-nowrap text-[10px] uppercase tracking-[0.24em] text-white/38 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:text-[11px] md:tracking-[0.28em]">
          {[
            "Web Design",
            "Brand Systems",
            "Creative Development",
            "Research & Synthesis",
            "A/B Testing",
            "Motion Direction",
            "Stakeholder Alignment"
          ].map((item, i) => (
            <div
              key={item}
              className="flex min-w-max items-center gap-8 border-r border-white/10 px-6 py-4 md:gap-10 md:px-12 md:py-5"
            >
              <span>{item}</span>
              {i !== 6 ? <span className="text-white/25">✦</span> : null}
            </div>
          ))}
        </div>
      </section>

      <WorkSection />
      <AboutSection />
      <ContactSection />
    </main>
  );
}