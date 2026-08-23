"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const x = useSpring(mouseX, {
    stiffness: 500,
    damping: 35,
  });

  const y = useSpring(mouseY, {
    stiffness: 500,
    damping: 35,
  });

  useEffect(() => {
    if (window.innerWidth < 768) return;

    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setVisible(true);
    };

    const enter = () => setVisible(true);
    const leave = () => setVisible(false);

    const updateHoverState = () => {
      const interactive = document.querySelectorAll(
        "a, button, input, textarea, select"
      );

      interactive.forEach((el) => {
        el.addEventListener("mouseenter", () => setHovering(true));
        el.addEventListener("mouseleave", () => setHovering(false));
      });
    };

    updateHoverState();

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseenter", enter);
    window.addEventListener("mouseleave", leave);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseenter", enter);
      window.removeEventListener("mouseleave", leave);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Glow */}

      <motion.div
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: hovering ? 2 : 1,
          opacity: visible ? 1 : 0,
        }}
        className="pointer-events-none fixed left-0 top-0 z-[9998] h-24 w-24 rounded-full bg-cyan-400/15 blur-3xl"
      />

      {/* Main cursor */}

      <motion.div
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: hovering ? 1.8 : 1,
          opacity: visible ? 1 : 0,
        }}
        className="pointer-events-none fixed left-0 top-0 z-[9999] flex h-5 w-5 items-center justify-center rounded-full border border-cyan-400"
      >
        <div className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
      </motion.div>
    </>
  );
}