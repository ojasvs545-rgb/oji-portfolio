"use client";

import Reveal from "./Reveal";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
    
      id="about"
      
      className="relative overflow-hidden bg-[#030303] px-6 py-32 md:py-48"
      
    > 
      <div className="mx-auto max-w-7xl">

        <div className="mb-16 flex items-center gap-4">
          <span className="text-xs font-bold uppercase tracking-[0.4em] text-cyan-400">
            01 / About
          </span>

          <div className="h-px flex-1 bg-white/10" />
        </div>

        <div className="grid gap-16 md:grid-cols-2 md:items-end">

          <motion.h2
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-black tracking-tight md:text-8xl"
          >
            I DON'T
            <br />
            JUST EDIT.
            <br />
            <span className="text-white/20">I CREATE.</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-lg leading-8 text-white/60 md:text-xl">
              Hi, I&apos;m Oji Game Paglu, a passionate video editor with
              experience editing hundreds of videos for creators, gaming
              channels, social media brands, and content businesses.
            </p>

            <p className="mt-6 text-lg leading-8 text-white/60 md:text-xl">
              I specialize in cinematic storytelling, gaming edits,
              YouTube videos, reels, shorts, transitions, motion graphics,
              color grading, and audience-retention focused editing.
            </p>

            <p className="mt-6 text-lg leading-8 text-white/60 md:text-xl">
              My goal is simple: transform raw footage into engaging content
              that captures attention and keeps viewers watching.
            </p>

            <div className="mt-10 h-px w-full bg-white/10" />

            <p className="mt-6 text-xs uppercase tracking-[0.3em] text-cyan-400">
              Story × Motion × Emotion
            </p>
          </motion.div>

        </div>
      </div>
      
    </section>
  );
}