"use client";

import { motion } from "framer-motion";

const projects = [
  {
    id: "01",
    title: "Turning free trial users into loyal members",
    tags: ["Retention", "Gamification"],
    stats: [
      { label: "Trial-to-paid uplift", value: "+22%" },
      { label: "Completion rate", value: "~48%" }
    ],
    gradient: "from-[#1f2c1c] to-[#7e8f6b]"
  },
  {
    id: "02",
    title: "Finding the right incentive to double referrals",
    tags: ["Growth", "Referral"],
    stats: [
      { label: "Referral increase", value: "+2.1x" },
      { label: "Activation boost", value: "+31%" }
    ],
    gradient: "from-[#2c1f1f] to-[#8f6b6b]"
  }
];

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-black px-6 pt-36 text-white">
      <div className="mx-auto max-w-7xl">
        <p className="mb-6 text-xs uppercase tracking-[0.35em] text-white/40">
          Selected Projects
        </p>

        <h1 className="mb-16 text-6xl font-bold uppercase tracking-[-0.06em] md:text-8xl">
          Work
        </h1>

        <div className="space-y-10">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.4 }}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.02]"
            >
              <div className="grid md:grid-cols-2">
                {/* LEFT */}
                <div className="flex flex-col justify-between p-8 md:p-12">
                  <div>
                    <p className="mb-6 text-sm text-white/30">
                      {project.id}
                    </p>

                    <div className="mb-6 flex gap-3">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/50"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h2 className="max-w-xl text-3xl font-semibold leading-tight tracking-[-0.04em] md:text-5xl">
                      {project.title}
                    </h2>
                  </div>

                  <div className="mt-10 flex gap-10">
                    {project.stats.map((stat) => (
                      <div key={stat.label}>
                        <div className="text-3xl font-semibold md:text-4xl">
                          {stat.value}
                        </div>
                        <div className="text-sm text-white/40">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* RIGHT (IMAGE / VISUAL) */}
                <div
                  className={`relative min-h-[300px] bg-gradient-to-br ${project.gradient}`}
                >
                  {/* glow */}
                  <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15),transparent_60%)]" />

                  {/* fake device block */}
                  <div className="absolute right-10 top-1/2 h-[260px] w-[140px] -translate-y-1/2 rounded-2xl bg-black/40 shadow-2xl backdrop-blur-xl border border-white/10" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}