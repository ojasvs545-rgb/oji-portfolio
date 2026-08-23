"use client";

import { motion } from "framer-motion";

const stats = [
  {
    number: "100+",
    title: "Videos Edited",
  },
  {
    number: "50M+",
    title: "Combined Views",
  },
  {
    number: "3+",
    title: "Years Experience",
  },
  {
    number: "100%",
    title: "Client Satisfaction",
  },
];

export default function Stats() {
  return (
    <section className="border-y border-white/10 bg-white/[0.02] px-6 py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-14 md:grid-cols-4">

        {stats.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
            }}
            className="text-center"
          >
            <h3 className="text-4xl font-black md:text-6xl">
              {stat.number}
            </h3>

            <p className="mt-3 text-[10px] uppercase tracking-[0.25em] text-white/40 md:text-xs">
              {stat.title}
            </p>
          </motion.div>
        ))}

      </div>
    </section>
  );
}