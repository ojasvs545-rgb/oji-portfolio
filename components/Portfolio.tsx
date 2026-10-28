"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlay, FiX, FiArrowUpRight } from "react-icons/fi";

const projects = [
  {
    title: "Cinematic Edit",
    category: "Gaming",
    description:
      "High-energy gaming edit with cinematic transitions, sound design, motion graphics and retention-focused pacing.",
    style: "Cinematic • Fast Paced • Gaming",
    tools: "Davinci Resolve ",
    video: "/videos/edit-1.mp4",
  },
  {
    title: "4D Intros and Outros",
    category: "YouTube",
    description:
      "Long-form YouTube editing focused on 4D Intro/Outro, pacing, visual retention and engaging transitions.",
    style: "4D • Dynamic • Retention",
    tools: " After Effects • Premiere Pro",
    video: "/videos/edit-2.mp4",
  },
  {
    title: "Short Form Mastery",
    category: "Reels / Shorts",
    description:
      "Fast-paced short-form content designed to capture attention within the first few seconds.",
    style: "Fast • Viral • High Retention",
    tools: "Premiere Pro • After Effects",
    video: "/videos/edit-3.mp4",
  },
  {
    title: "Motion Graphics",
    category: "Motion Design",
    description:
      "Modern motion graphics combining typography, visual effects and smooth animation.",
    style: "Motion • Typography • Modern",
    tools: "Davinci Resolve",
    video: "/videos/edit-4.mp4",
  },
];

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);

  return (
    <>
      <section
        id="work"
        className="relative bg-[#050505] px-6 py-32 text-white"
      >
        <div className="mx-auto max-w-7xl">

          {/* HEADER */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <p className="mb-4 text-xs uppercase tracking-[0.4em] text-cyan-400">
              Selected Work
            </p>

            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">

              <h2 className="text-5xl font-black tracking-tight md:text-7xl">
                My
                <span className="text-white/30"> Work.</span>
              </h2>

              <p className="max-w-md text-sm leading-6 text-white/40">
                A collection of cinematic edits, gaming videos,
                short-form content and motion graphics.
              </p>

            </div>
          </motion.div>

          {/* PROJECT GRID */}

          <div className="grid gap-6 md:grid-cols-2">

            {projects.map((project, index) => (
              <motion.button
                key={project.title}
                type="button"
                onClick={() => setSelectedProject(project)}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                }}
                className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] text-left"
              >

                {/* VIDEO PREVIEW */}

                <div className="relative aspect-video overflow-hidden bg-black">

                  <video
                    src={project.video}
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="h-full w-full object-cover opacity-70 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
                    onMouseEnter={(event) => {
                      event.currentTarget.play();
                    }}
                    onMouseLeave={(event) => {
                      event.currentTarget.pause();
                      event.currentTarget.currentTime = 0;
                    }}
                  />

                  {/* Overlay */}

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                  {/* Play */}

                  <div className="absolute inset-0 flex items-center justify-center">

                    <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/30 bg-black/40 text-white backdrop-blur-md transition duration-500 group-hover:scale-110 group-hover:border-cyan-400 group-hover:bg-cyan-400 group-hover:text-black">
                      <FiPlay size={22} fill="currentColor" />
                    </div>

                  </div>

                  {/* Category */}

                  <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-black/50 px-4 py-2 text-[10px] uppercase tracking-widest text-white/70 backdrop-blur-md">
                    {project.category}
                  </div>

                </div>

                {/* INFO */}

                <div className="flex items-center justify-between p-6">

                  <div>

                    <h3 className="text-xl font-bold">
                      {project.title}
                    </h3>

                    <p className="mt-2 text-sm text-white/40">
                      {project.style}
                    </p>

                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 transition group-hover:border-cyan-400 group-hover:bg-cyan-400 group-hover:text-black">
                    <FiArrowUpRight />
                  </div>

                </div>

              </motion.button>
            ))}

          </div>

        </div>
      </section>

      {/* MODAL */}

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 p-4 backdrop-blur-xl"
            onClick={() => setSelectedProject(null)}
          >

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ duration: 0.35 }}
              onClick={(event) => event.stopPropagation()}
              className="relative max-h-[95vh] w-full max-w-5xl overflow-auto rounded-[28px] border border-white/10 bg-[#0b0b0b] shadow-2xl"
            >

              {/* CLOSE */}

              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/70 text-white backdrop-blur-md transition hover:bg-white hover:text-black"
              >
                <FiX size={20} />
              </button>

              {/* VIDEO */}

              <div className="aspect-video bg-black">

                <video
                  src={selectedProject.video}
                  controls
                  autoPlay
                  playsInline
                  className="h-full w-full object-contain"
                />

              </div>

              {/* DETAILS */}

              <div className="p-7 md:p-10">

                <p className="mb-3 text-xs uppercase tracking-[0.3em] text-cyan-400">
                  {selectedProject.category}
                </p>

                <h3 className="text-3xl font-black md:text-5xl">
                  {selectedProject.title}
                </h3>

                <p className="mt-5 max-w-3xl leading-7 text-white/50">
                  {selectedProject.description}
                </p>

                <div className="mt-8 grid gap-5 md:grid-cols-2">

                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">

                    <p className="text-xs uppercase tracking-widest text-white/30">
                      Editing Style
                    </p>

                    <p className="mt-2 text-sm text-white/70">
                      {selectedProject.style}
                    </p>

                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">

                    <p className="text-xs uppercase tracking-widest text-white/30">
                      Tools Used
                    </p>

                    <p className="mt-2 text-sm text-white/70">
                      {selectedProject.tools}
                    </p>

                  </div>

                </div>

                {/* HIRE */}

                <a
                  href="#contact"
                  onClick={() => setSelectedProject(null)}
                  className="mt-8 flex w-full items-center justify-center gap-3 rounded-2xl bg-white px-6 py-4 font-bold text-black transition hover:bg-cyan-400"
                >
                  HIRE ME

                  <FiArrowUpRight />
                </a>

              </div>

            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}