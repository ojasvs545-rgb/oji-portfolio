"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiCheckCircle,
  FiLoader,
  FiMail,
} from "react-icons/fi";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setLoading(true);
    setSuccess(false);
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      projectType: formData.get("projectType"),
      budget: formData.get("budget"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.message || "Failed to send project."
        );
      }

      setSuccess(true);
      form.reset();

    } catch (err) {
      console.error(err);

      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );

    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#050505] px-6 py-32 text-white"
    >
      {/* Background glow */}

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[150px]" />

      <div className="relative mx-auto max-w-5xl">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <p className="mb-5 text-xs uppercase tracking-[0.4em] text-cyan-400">
            Let's Work Together
          </p>

          <h2 className="text-5xl font-black tracking-tight sm:text-6xl md:text-7xl">
            Let's Create
            <br />

            <span className="text-white/40">
              Something Amazing.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-white/50 md:text-lg">
            Have a project in mind? Tell me about it and let's
            turn your footage into something people remember.
          </p>
        </motion.div>

        {/* FORM */}

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-5"
        >

          {/* Name + Email */}

          <div className="grid gap-5 md:grid-cols-2">

            <input
              required
              name="name"
              type="text"
              placeholder="Your Name"
              className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-white outline-none transition placeholder:text-white/30 focus:border-cyan-400"
            />

            <input
              required
              name="email"
              type="email"
              placeholder="Email Address"
              className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-white outline-none transition placeholder:text-white/30 focus:border-cyan-400"
            />

          </div>

          {/* Project Type */}

          <select
            required
            name="projectType"
            defaultValue=""
            className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-white/60 outline-none transition focus:border-cyan-400"
          >

            <option value="" disabled className="bg-black">
              Select Project Type
            </option>

            <option className="bg-black">
              YouTube Video
            </option>

            <option className="bg-black">
              Gaming Video
            </option>

            <option className="bg-black">
              Reels / Shorts
            </option>

            <option className="bg-black">
              Motion Graphics
            </option>

            <option className="bg-black">
              Cinematic Video
            </option>

            <option className="bg-black">
              Other
            </option>

          </select>

          {/* Budget */}

          <input
            name="budget"
            type="text"
            placeholder="Budget — e.g. ₹5,000 - ₹20,000"
            className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-white outline-none transition placeholder:text-white/30 focus:border-cyan-400"
          />

          {/* Message */}

          <textarea
            required
            name="message"
            rows={6}
            placeholder="Tell me about your project..."
            className="w-full resize-none rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-white outline-none transition placeholder:text-white/30 focus:border-cyan-400"
          />

          {/* SUCCESS */}

          {success && (
            <div className="flex items-center gap-3 rounded-2xl border border-green-400/20 bg-green-400/10 px-5 py-4 text-green-400">
              <FiCheckCircle size={20} />

              <span>
                Project sent successfully! I'll get back to you soon.
              </span>
            </div>
          )}

          {/* ERROR */}

          {error && (
            <div className="rounded-2xl border border-red-400/20 bg-red-400/10 px-5 py-4 text-red-400">
              {error}
            </div>
          )}

          {/* BUTTON */}

          <button
            type="submit"
            disabled={loading}
            className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-white px-6 py-5 font-bold text-black transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-60"
          >

            {loading ? (
              <>
                <FiLoader className="animate-spin" />

                SENDING...
              </>
            ) : (
              <>
                <FiMail />

                SEND PROJECT

                <FiArrowUpRight className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
              </>
            )}

          </button>

        </motion.form>

      </div>
    </section>
  );
}