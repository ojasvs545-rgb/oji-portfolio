"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import {
  FiArrowDown,
  FiArrowUpRight,
  FiPlay,
} from "react-icons/fi";

const words = [
  "EDITED 100+ VIDEOS",
  "REELS & SHORTS EXPERT",
  "GAMING VIDEO EDITOR",
  "CINEMATIC EDITOR",
  "MOTION GRAPHICS DESIGNER",
];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [deleting, setDeleting] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 100,
    damping: 20,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 100,
    damping: 20,
  });

  /* Typing animation */

  useEffect(() => {
    const currentWord = words[wordIndex];

    const speed = deleting ? 35 : 70;

    const timer = setTimeout(() => {
      if (!deleting) {
        setDisplayText(
          currentWord.substring(0, displayText.length + 1)
        );

        if (displayText.length + 1 === currentWord.length) {
          setTimeout(() => setDeleting(true), 1300);
        }
      } else {
        setDisplayText(
          currentWord.substring(0, displayText.length - 1)
        );

        if (displayText.length === 0) {
          setDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayText, deleting, wordIndex]);

  /* Mouse movement */

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const x =
        (event.clientX / window.innerWidth - 0.5) * 40;

      const y =
        (event.clientY / window.innerHeight - 0.5) * 40;

      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () =>
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );
  }, [mouseX, mouseY]);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black text-white"
    >

      {/* HERO VIDEO */}

      <motion.video
        style={{
          x: smoothX,
          y: smoothY,
          scale: 1.08,
        }}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source
          src="/videos/hero-video.mp4"
          type="video/mp4"
        />
      </motion.video>

      {/* Cinematic overlays */}

      <div className="absolute inset-0 bg-black/65" />

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black" />

      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50" />

      {/* Animated glow */}

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.08, 0.16, 0.08],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400 blur-[180px]"
      />

      {/* Floating editing timeline */}

      <div className="pointer-events-none absolute bottom-[18%] left-1/2 hidden w-[650px] -translate-x-1/2 opacity-30 lg:block">

        <motion.div
          animate={{
            x: [-30, 30, -30],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="rounded-xl border border-white/10 bg-black/30 p-3 backdrop-blur-md"
        >

          <div className="mb-2 flex items-center justify-between px-2">

            <span className="text-[8px] uppercase tracking-[0.3em] text-white/40">
              TIMELINE / OGP_EDIT
            </span>

            <span className="text-[8px] text-cyan-400">
              00:01:24:17
            </span>

          </div>

          <div className="flex h-12 gap-1 overflow-hidden">

            {[...Array(14)].map((_, index) => (
              <motion.div
                key={index}
                animate={{
                  opacity: [0.2, 0.7, 0.2],
                }}
                transition={{
                  duration: 2 + index * 0.1,
                  repeat: Infinity,
                  delay: index * 0.08,
                }}
                className="min-w-[45px] rounded-md border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 to-white/5"
              />
            ))}

          </div>

          <div className="relative mt-2 h-[2px] bg-white/10">

            <motion.div
              animate={{
                left: ["0%", "100%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute top-1/2 h-4 w-[1px] -translate-y-1/2 bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,1)]"
            />

          </div>

        </motion.div>

      </div>

      {/* Main content */}

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 text-center">

        {/* Top label */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 3.1,
            duration: 0.7,
          }}
          className="mb-7 flex items-center justify-center gap-3"
        >

          <span className="h-[1px] w-10 bg-cyan-400/70" />

          <span className="text-[10px] uppercase tracking-[0.45em] text-white/50">
            VIDEO EDITOR • CONTENT CREATOR
          </span>

          <span className="h-[1px] w-10 bg-cyan-400/70" />

        </motion.div>

        {/* Name */}

        <motion.h1
          initial={{
            opacity: 0,
            y: 50,
            scale: 0.95,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            delay: 3.2,
            duration: 1,
            ease: "easeOut",
          }}
          className="text-[14vw] font-black leading-[0.85] tracking-[-0.07em] sm:text-7xl md:text-8xl lg:text-[9rem]"
        >
          OJI GAME
          <br />

          <span className="text-white/30">
            PAGLU
          </span>
        </motion.h1>

        {/* Typing */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 3.8,
            duration: 0.8,
          }}
          className="mt-8 flex h-8 items-center justify-center"
        >

          <span className="font-mono text-xs uppercase tracking-[0.25em] text-cyan-400 sm:text-sm">
            {displayText}
          </span>

          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
            }}
            className="ml-1 h-4 w-[2px] bg-cyan-400"
          />

        </motion.div>

        {/* Description */}

        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 4,
            duration: 0.8,
          }}
          className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/45 md:text-base"
        >
          Professional Video Editor • Content Creator •
          Visual Storyteller
        </motion.p>

        {/* Buttons */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 4.2,
            duration: 0.8,
          }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >

          {/* View work */}

          <a
            href="#work"
            className="group flex min-w-[190px] items-center justify-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-bold text-black transition duration-300 hover:bg-cyan-400 hover:shadow-[0_0_40px_rgba(34,211,238,0.25)]"
          >

            <FiPlay
              size={16}
              fill="currentColor"
            />

            VIEW MY WORK

            <FiArrowUpRight className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />

          </a>

          {/* Hire */}

          <a
            href="#contact"
            className="group flex min-w-[190px] items-center justify-center gap-3 rounded-full border border-white/20 bg-black/30 px-7 py-4 text-sm font-bold backdrop-blur-md transition duration-300 hover:border-cyan-400 hover:bg-cyan-400 hover:text-black"
          >

            HIRE ME

            <FiArrowUpRight className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />

          </a>

        </motion.div>

      </div>

      {/* Bottom left */}

      <div className="absolute bottom-8 left-6 hidden md:block">

        <div className="text-[9px] uppercase tracking-[0.3em] text-white/30">
          BASED IN INDIA
        </div>

        <div className="mt-1 text-[9px] uppercase tracking-[0.3em] text-white/20">
          AVAILABLE FOR PROJECTS
        </div>

      </div>

      {/* Scroll */}

      <motion.a
        href="#about"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 4.8,
        }}
        className="absolute bottom-7 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3 text-white/40 transition hover:text-cyan-400"
      >

        <span className="text-[8px] uppercase tracking-[0.4em]">
          Scroll
        </span>

        <motion.div
          animate={{
            y: [0, 7, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
        >
          <FiArrowDown size={15} />
        </motion.div>

      </motion.a>

      {/* Right side status */}

      <div className="absolute right-6 top-1/2 hidden -translate-y-1/2 md:block">

        <div className="flex flex-col items-center gap-3">

          <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.8)]" />

          <span className="writing-mode-vertical text-[8px] uppercase tracking-[0.4em] text-white/30">
            EDIT • CREATE • INSPIRE
          </span>

        </div>

      </div>

    </section>
  );
}