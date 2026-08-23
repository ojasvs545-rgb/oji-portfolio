"use client";

import { motion } from "framer-motion";

export default function Particles() {
  return (
    <>
      {[...Array(25)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [-20, -200],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 6 + Math.random() * 5,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
          className="fixed h-1 w-1 rounded-full bg-cyan-400"
          style={{
            left: `${Math.random() * 100}%`,
            bottom: "-20px",
          }}
        />
      ))}
    </>
  );
}