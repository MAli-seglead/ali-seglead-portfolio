export default async function ProjectPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <main className="min-h-screen bg-black px-6 pt-32 text-white">
      <div className="mx-auto max-w-7xl">
        <p className="mb-6 text-xs uppercase tracking-[0.35em] text-white/40">
          Case Study
        </p>
        <h1 className="text-5xl font-bold uppercase tracking-[-0.06em] md:text-7xl">
          {slug.replace(/-/g, " ")}
        </h1>
      </div>
    </main>
  );
}