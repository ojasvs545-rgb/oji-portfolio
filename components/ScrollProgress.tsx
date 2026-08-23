"use client";

import { motion, useScroll } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{
        scaleX: scrollYProgress,
        transformOrigin: "0%",
      }}
      className="fixed left-0 top-0 z-[9999] h-[3px] w-full bg-cyan-400"
    />
  );
}