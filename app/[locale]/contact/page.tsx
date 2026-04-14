export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black px-6 pt-32 text-white">
      <div className="mx-auto max-w-7xl">
        <p className="mb-6 text-xs uppercase tracking-[0.35em] text-white/40">
          Get in Touch
        </p>

        <h1 className="text-6xl font-bold uppercase tracking-[-0.06em] md:text-8xl">
          Say Hi
        </h1>

        <div className="mt-10 grid gap-10 border-t border-white/10 pt-10 md:grid-cols-2">
          <p className="max-w-xl text-lg leading-8 text-white/60">
            Have a brand, website or visual direction project in mind? Let’s
            build something sharp.
          </p>

          <div className="space-y-4 text-white/75">
            <p>hello@ali-seglead.live</p>
            <p>Istanbul, Türkiye</p>
          </div>
        </div>
      </div>
    </main>
  );
}