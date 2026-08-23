"use client";

import { motion } from "framer-motion";

const steps = [
  ["01", "Understand the Vision"],
  ["02", "Edit the Story"],
  ["03", "Add Effects & Motion"],
  ["04", "Final Polish"],
  ["05", "Deliver Excellence"],
];

export default function Workflow() {
  return (
    <section className="bg-[#050505] px-6 py-32 md:py-48">
      <div className="mx-auto max-w-7xl">

        <div className="mb-20">
          <p className="mb-5 text-xs uppercase tracking-[0.4em] text-cyan-400">
            06 / Process
          </p>

          <h2 className="text-5xl font-black md:text-8xl">
            HOW I
            <br />
            <span className="text-white/20">CREATE.</span>
          </h2>
        </div>

        <div className="relative">

          <div className="absolute left-5 top-0 hidden h-full w-px bg-gradient-to-b from-cyan-400 via-white/10 to-transparent md:block" />

          <div className="space-y-12">
            {steps.map(([number, title], index) => (
              <motion.div
                key={number}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className="relative flex items-center gap-7 md:gap-12"
              >
                <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-cyan-400/40 bg-black text-[10px] font-bold text-cyan-400">
                  {number}
                </div>

                <div className="flex-1 border-b border-white/10 pb-8">
                  <h3 className="text-2xl font-bold md:text-4xl">
                    {title}
                  </h3>

                  <p className="mt-3 max-w-xl text-sm text-white/35">
                    {index === 0 &&
                      "Understanding the content, audience, goals and creative direction before touching the timeline."}

                    {index === 1 &&
                      "Building a strong narrative with pacing, cuts and sound design that keeps the viewer engaged."}

                    {index === 2 &&
                      "Adding motion graphics, transitions, effects and visual details that enhance the story."}

                    {index === 3 &&
                      "Color grading, sound mixing, timing adjustments and frame-by-frame quality control."}

                    {index === 4 &&
                      "Final export, review and delivery — polished and ready to publish."}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}