"use client";

import { FiInstagram, FiYoutube, FiArrowUpRight } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-6 py-12 text-white">

      <div className="mx-auto max-w-7xl">

        <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">

          {/* LOGO */}
          <div>
            <a
              href="#home"
              className="text-2xl font-black tracking-widest"
            >
              OJI
              <span className="text-cyan-400">.</span>
            </a>

            <p className="mt-3 max-w-sm text-sm leading-6 text-white/40">
              Professional Video Editor • Content Creator • Visual Storyteller
            </p>
          </div>

          {/* NAVIGATION */}
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-xs uppercase tracking-widest text-white/50">
            <a
              href="#home"
              className="transition hover:text-cyan-400"
            >
              Home
            </a>

            <a
              href="#about"
              className="transition hover:text-cyan-400"
            >
              About
            </a>

            <a
              href="#work"
              className="transition hover:text-cyan-400"
            >
              Portfolio
            </a>

            <a
              href="#services"
              className="transition hover:text-cyan-400"
            >
              Services
            </a>

            <a
              href="#contact"
              className="transition hover:text-cyan-400"
            >
              Contact
            </a>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="mt-12 flex flex-col gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">

          {/* COPYRIGHT */}
          <p className="text-xs text-white/30">
            © 2026 Oji Game Paglu. All Rights Reserved.
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex items-center gap-3">

            {/* INSTAGRAM */}
            <a
              href="https://www.instagram.com/ojigamepaglu"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/60 transition duration-300 hover:border-pink-400 hover:bg-pink-400/10 hover:text-pink-400"
            >
              <FiInstagram size={19} />
            </a>

            {/* YOUTUBE */}
            <a
              href="https://www.youtube.com/@Ojigamepaglu"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/60 transition duration-300 hover:border-red-500 hover:bg-red-500/10 hover:text-red-500"
            >
              <FiYoutube size={19} />
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}