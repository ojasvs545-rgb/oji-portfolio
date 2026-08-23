"use client";

import { motion } from "framer-motion";
import {
  FiYoutube,
  FiMonitor,
  FiSmartphone,
  FiZap,
  FiDroplet,
  FiImage,
} from "react-icons/fi";

const services = [
  {
    icon: FiYoutube,
    number: "01",
    title: "YouTube Editing",
    description:
      "Long-form content edited for storytelling, pacing, retention and engagement.",
  },
  {
    icon: FiMonitor,
    number: "02",
    title: "Gaming Videos",
    description:
      "Montages, highlights, funny moments, cinematic gaming edits and high-energy content.",
  },
  {
    icon: FiSmartphone,
    number: "03",
    title: "Reels & Shorts",
    description:
      "Fast, addictive short-form edits designed to stop the scroll and retain viewers.",
  },
  {
    icon: FiZap,
    number: "04",
    title: "Motion Graphics",
    description:
      "Dynamic typography, transitions, animations and visual effects.",
  },
  {
    icon: FiDroplet,
    number: "05",
    title: "Color Grading",
    description:
      "Cinematic color enhancement that gives your footage a premium visual identity.",
  },
  {
    icon: FiImage,
    number: "06",
    title: "Thumbnail Design",
    description:
      "High-impact thumbnails designed to increase clicks and communicate the story instantly.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-[#050505] px-6 py-32 md:py-48"
    >
      <div className="mx-auto max-w-7xl">

        <div className="mb-20 flex items-end justify-between">
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.4em] text-cyan-400">
              02 / Services
            </p>

            <h2 className="text-5xl font-black md:text-8xl">
              WHAT I
              <br />
              <span className="text-white/20">DO BEST.</span>
            </h2>
          </div>

          <p className="hidden max-w-xs text-sm leading-6 text-white/40 md:block">
            From raw footage to final delivery, every frame has a purpose.
          </p>
        </div>

        <div className="grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.05,
                }}
                whileHover={{ y: -5 }}
                className="group relative min-h-[300px] overflow-hidden bg-[#080808] p-8 transition duration-500 hover:bg-[#0d0d0d] md:p-10"
              >
                <div className="absolute right-6 top-6 text-xs text-white/20">
                  {service.number}
                </div>

                <div className="mb-16 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-cyan-400 transition duration-500 group-hover:scale-110 group-hover:border-cyan-400/50 group-hover:bg-cyan-400/10">
                  <Icon size={22} />
                </div>

                <h3 className="text-2xl font-bold">
                  {service.title}
                </h3>

                <p className="mt-4 max-w-sm text-sm leading-6 text-white/40">
                  {service.description}
                </p>

                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-cyan-400 transition-all duration-500 group-hover:w-full" />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}