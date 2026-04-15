import { getTranslations } from "next-intl/server";
import WorkSection from "@/components/sections/selected-work";
import AboutSection from "@/components/sections/about";
import ContactSection from "@/components/sections/contact";
import Hero from "@/components/sections/hero";


export default async function HomePage() {
  const t = await getTranslations("hero");

  return (
    <main className="bg-black text-white">
      <Hero />

      <WorkSection />
      <AboutSection />
      <ContactSection />
    </main>
  );
}