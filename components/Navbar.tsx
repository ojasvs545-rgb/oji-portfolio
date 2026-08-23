"use client";

import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const links = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Work", "#work"],
  ["Services", "#services"],
  ["Contact", "#contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed left-0 right-0 top-0 z-[100] px-5 py-5 md:px-10">

      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-black/50 px-5 py-3 backdrop-blur-xl">

        {/* LOGO */}
        <a
          href="#home"
          className="text-sm font-black tracking-[0.2em]"
        >
          OJI
          <span className="text-cyan-400">.</span>
        </a>

        {/* DESKTOP LINKS */}
        <div className="hidden items-center gap-8 md:flex">

          {links.map(([name, href]) => (
            <a
              key={name}
              href={href}
              className="text-xs uppercase tracking-widest text-white/60 transition duration-300 hover:text-cyan-400"
            >
              {name}
            </a>
          ))}

        </div>

        {/* HIRE ME */}
        <a
          href="#contact"
          className="hidden rounded-full bg-white px-6 py-2.5 text-xs font-bold tracking-wider text-black transition duration-300 hover:bg-cyan-400 md:block"
        >
          HIRE ME
        </a>

        {/* MOBILE BUTTON */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label="Open navigation"
          className="text-xl text-white md:hidden"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>

      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="mx-2 mt-3 rounded-3xl border border-white/10 bg-black/90 p-6 shadow-2xl backdrop-blur-xl md:hidden">

          <div className="flex flex-col gap-5">

            {links.map(([name, href]) => (
              <a
                key={name}
                href={href}
                onClick={() => setOpen(false)}
                className="text-sm uppercase tracking-widest text-white/70 transition hover:text-cyan-400"
              >
                {name}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="rounded-full bg-white px-6 py-3 text-center text-xs font-bold tracking-wider text-black transition hover:bg-cyan-400"
            >
              HIRE ME
            </a>

          </div>

        </div>
      )}

    </nav>
  );
}