"use client";

import { motion } from "framer-motion";

const tools = [
  "Adobe Premiere Pro",
  "Adobe After Effects",
  "Adobe Photoshop",
  "DaVinci Resolve",
  "Blender",
];

export default function Tools() {
  return (
    <section className="border-y border-white/10 bg-black px-6 py-24">
      <div className="mx-auto max-w-7xl">

        <p className="mb-12 text-center text-xs uppercase tracking-[0.4em] text-white/30">
          Tools I Use
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          {tools.map((tool, index) => (
            <motion.div
              key={tool}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.08,
              }}
              whileHover={{
                y: -5,
                borderColor: "rgba(0,245,255,.5)",
              }}
              className="rounded-full border border-white/10 bg-white/[0.03] px-6 py-4 text-xs font-semibold text-white/60 transition hover:text-cyan-400"
            >
              {tool}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}