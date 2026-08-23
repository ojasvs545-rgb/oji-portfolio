"use client";

import { motion } from "framer-motion";

const skills = [
  ["Premiere Pro", 95],
  ["After Effects", 90],
  ["Photoshop", 85],
  ["DaVinci Resolve", 80],
  ["Motion Graphics", 90],
  ["Storytelling", 95],
];

export default function Skills() {
  return (
    <section className="bg-[#050505] px-6 py-32 md:py-48">
      <div className="mx-auto max-w-6xl">

        <div className="mb-20">
          <p className="mb-5 text-xs uppercase tracking-[0.4em] text-cyan-400">
            04 / Skills
          </p>

          <h2 className="text-5xl font-black md:text-8xl">
            MY
            <br />
            <span className="text-white/20">ARSENAL.</span>
          </h2>
        </div>

        <div className="space-y-10">
          {skills.map(([name, value], index) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
            >
              <div className="mb-3 flex items-end justify-between">
                <span className="text-sm font-semibold md:text-base">
                  {name}
                </span>

                <span className="text-xs text-cyan-400">
                  {value}%
                </span>
              </div>

              <div className="h-[2px] overflow-hidden bg-white/10">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${value}%` }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1.2,
                    delay: 0.2 + index * 0.08,
                    ease: "easeOut",
                  }}
                  className="h-full bg-cyan-400 shadow-[0_0_15px_#00f5ff]"
                />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}