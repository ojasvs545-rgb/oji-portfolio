"use client";

import { motion } from "framer-motion";
import { FiStar } from "react-icons/fi";

const testimonials = [
  {
    name: "Creator / Client",
    role: "YouTube Creator",
    text: "The editing completely changed the energy of my videos. The pacing, effects and storytelling are on another level.",
  },
  {
    name: "Gaming Creator",
    role: "Gaming Channel",
    text: "Exactly the kind of editor I was looking for. Fast, creative and understands gaming content perfectly.",
  },
  {
    name: "Content Creator",
    role: "Social Media",
    text: "The shorts instantly felt more professional. The attention to detail and retention-focused editing is incredible.",
  },
];

export default function Testimonials() {
  return (
    <section className="overflow-hidden bg-black px-6 py-32 md:py-48">
      <div className="mx-auto max-w-7xl">

        <div className="mb-20">
          <p className="mb-5 text-xs uppercase tracking-[0.4em] text-cyan-400">
            05 / Testimonials
          </p>

          <h2 className="text-5xl font-black md:text-8xl">
            KIND
            <br />
            <span className="text-white/20">WORDS.</span>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
              }}
              className="glass rounded-3xl p-8"
            >
              <div className="flex gap-1 text-cyan-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FiStar
                    key={i}
                    size={14}
                    fill="currentColor"
                  />
                ))}
              </div>

              <p className="mt-8 text-lg leading-8 text-white/60">
                “{item.text}”
              </p>

              <div className="mt-10 border-t border-white/10 pt-6">
                <p className="font-bold">{item.name}</p>
                <p className="mt-1 text-xs uppercase tracking-widest text-white/30">
                  {item.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}