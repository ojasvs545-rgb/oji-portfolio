"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Intro() {
  const [show, setShow] = useState(true);
  const [phase, setPhase] = useState<"edit" | "name">("edit");

  useEffect(() => {
    const editTimer = setTimeout(() => {
      setPhase("name");
    }, 1500);

    const exitTimer = setTimeout(() => {
      setShow(false);
    }, 3200);

    return () => {
      clearTimeout(editTimer);
      clearTimeout(exitTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: 0.8,
              ease: "easeInOut",
            },
          }}
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-black"
        >
          {/* Background glow */}

          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{
              scale: [0.5, 1, 1.4],
              opacity: [0, 0.35, 0],
            }}
            transition={{
              duration: 3,
              ease: "easeOut",
            }}
            className="pointer-events-none absolute h-[500px] w-[500px] rounded-full bg-cyan-400 blur-[150px]"
          />

          {/* Timeline */}

          <div className="absolute bottom-[25%] left-0 w-full overflow-hidden opacity-60">

            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{
                duration: 2.5,
                ease: "linear",
              }}
              className="h-[1px] w-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
            />

            <div className="mx-auto mt-3 flex max-w-4xl gap-2 px-6">

              {[...Array(12)].map((_, index) => (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    scaleX: 0,
                  }}
                  animate={{
                    opacity: [0, 1, 0.4],
                    scaleX: 1,
                  }}
                  transition={{
                    delay: index * 0.08,
                    duration: 1,
                  }}
                  className="h-7 flex-1 rounded-sm border border-cyan-400/20 bg-cyan-400/5"
                />
              ))}

            </div>
          </div>

          {/* Main text */}

          <div className="relative z-10 text-center">

            <AnimatePresence mode="wait">

              {phase === "edit" ? (
                <motion.div
                  key="edit"
                  initial={{
                    opacity: 0,
                    scale: 0.7,
                    filter: "blur(20px)",
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    filter: "blur(0px)",
                  }}
                  exit={{
                    opacity: 0,
                    scale: 1.3,
                    filter: "blur(10px)",
                  }}
                  transition={{
                    duration: 0.7,
                  }}
                >
                  <h1 className="text-[18vw] font-black leading-none tracking-[-0.08em] text-white md:text-[11rem]">
                    EDIT
                  </h1>

                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{
                      duration: 1,
                      delay: 0.2,
                    }}
                    className="mx-auto mt-4 h-[2px] max-w-[300px] bg-cyan-400"
                  />
                </motion.div>
              ) : (
                <motion.div
                  key="name"
                  initial={{
                    opacity: 0,
                    scale: 0.85,
                    filter: "blur(20px)",
                    letterSpacing: "0.5em",
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    filter: "blur(0px)",
                    letterSpacing: "0.05em",
                  }}
                  exit={{
                    opacity: 0,
                    scale: 1.05,
                  }}
                  transition={{
                    duration: 1,
                    ease: "easeOut",
                  }}
                >
                  <p className="mb-4 text-[10px] uppercase tracking-[0.6em] text-cyan-400 md:text-xs">
                    Professional Video Editor
                  </p>

                  <h1 className="px-6 text-5xl font-black text-white sm:text-6xl md:text-8xl">
                    OJI GAME
                    <span className="text-white/30"> PAGLU</span>
                  </h1>

                  <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    animate={{
                      width: "100%",
                      opacity: 1,
                    }}
                    transition={{
                      duration: 0.8,
                      delay: 0.3,
                    }}
                    className="mx-auto mt-6 h-[1px] max-w-[400px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
                  />
                </motion.div>
              )}

            </AnimatePresence>

          </div>

          {/* Corner UI */}

          <div className="absolute left-6 top-6 text-[9px] uppercase tracking-[0.3em] text-white/20">
            OGP / 2026
          </div>

          <div className="absolute right-6 top-6 text-[9px] uppercase tracking-[0.3em] text-white/20">
            SYSTEM / ONLINE
          </div>

          <div className="absolute bottom-6 left-6 text-[9px] uppercase tracking-[0.3em] text-white/20">
            VISUAL STORYTELLING
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{
              duration: 1.5,
              repeat: 1,
            }}
            className="absolute bottom-6 right-6 text-[9px] uppercase tracking-[0.3em] text-cyan-400/50"
          >
            LOADING EXPERIENCE
          </motion.div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}