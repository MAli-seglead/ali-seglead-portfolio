export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black px-6 pt-32 text-white">
      <div className="mx-auto max-w-7xl">
        <p className="mb-6 text-xs uppercase tracking-[0.35em] text-white/40">
          My Story
        </p>
        <h1 className="mb-10 text-6xl font-bold uppercase tracking-[-0.06em] md:text-8xl">
          About
        </h1>

        <div className="grid gap-12 border-t border-white/10 pt-10 md:grid-cols-2">
          <div className="space-y-8 text-white/70">
            <p className="text-2xl leading-relaxed text-white/85">
              I build premium websites, identities and digital experiences with
              a sharp visual language and strong conversion focus.
            </p>
            <p className="text-lg leading-8">
              The goal is simple: make brands look more expensive, more
              trustworthy and more memorable.
            </p>
          </div>

          <div className="space-y-4 text-white/60">
            <div className="flex items-center justify-between border-b border-white/10 py-4">
              <span>Brand Direction</span>
              <span>2026</span>
            </div>
            <div className="flex items-center justify-between border-b border-white/10 py-4">
              <span>Web Design</span>
              <span>2026</span>
            </div>
            <div className="flex items-center justify-between border-b border-white/10 py-4">
              <span>Creative Development</span>
              <span>2026</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}