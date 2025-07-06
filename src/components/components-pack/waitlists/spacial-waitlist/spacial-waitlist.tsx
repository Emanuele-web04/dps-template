"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface Particle {
  x: number;
  y: number;
  r: number;
  delay: number;
  duration: number;
}

const Particles = ({ count = 150 }) => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const newParticles: Particle[] = Array.from({ length: count }).map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      r: Math.random() * 1.2 + 0.5,
      delay: Math.random() * 5,
      duration: Math.random() * 5 + 5,
    }));
    setParticles(newParticles);
  }, [count]);

  if (particles.length === 0) {
    return null;
  }

  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-50">
      <defs>
        <radialGradient id="star-gradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="white" stopOpacity="1" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
      </defs>
      {particles.map((p, i) => (
        <motion.circle
          key={i}
          initial={{ cx: `${p.x}%`, cy: `${p.y}%` }}
          animate={{
            cx: `${p.x + (Math.random() - 0.5) * 10}%`,
            cy: `${p.y + (Math.random() - 0.5) * 10}%`,
          }}
          transition={{
            delay: p.delay,
            duration: p.duration,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
          r={p.r}
          fill="url(#star-gradient)"
        />
      ))}
    </svg>
  );
};

export const SpacialWaitlist: React.FC = () => {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen overflow-hidden bg-black text-white px-4">
      {/* Animated Particles */}
      <Particles />

      {/* Central indigo glow */}
      <div className="absolute -top-20 mask-radial-at-top left-1/2 -translate-x-1/2 inset-0 w-[100%] bg-radial-[at_50%_75%] opacity-70 from-sky-200 via-blue-400 to-indigo-900 to-90% blur-3xl h-40" />

      {/* Content */}
      <div className="relative z-10 max-w-2xl text-center space-y-6">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur text-xs tracking-widest font-sans uppercase"
        >
          Waitlist ✦ DP's Templates
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl font-sans md:text-6xl font-bold leading-tight"
        >
          Good things come <br className="hidden sm:block" /> to those{" "}
          <em className="font-editor font-thin ">who wait.</em>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-sans text-sm sm:text-base text-neutral-300 max-w-md mx-auto"
        >
          Generate leads, build excitement, and grow your email list ahead of
          launch day.
        </motion.p>
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-4 flex w-full max-w-md mx-auto rounded-xl p-1.5 border border-white/10 bg-black/30 backdrop-blur-sm"
        >
          <input
            type="email"
            placeholder="Your Email Address"
            className="flex-1 bg-transparent px-4 py-2 text-sm placeholder-neutral-400 focus:outline-none font-sans"
          />
          <button
            type="submit"
            className="bg-neutral-100 text-black px-5 py-2 rounded-lg font-medium text-sm hover:bg-white transition-colors"
          >
            Get Notified
          </button>
        </motion.form>
      </div>

      {/* --- REWORKED & LIFTED HORIZON --- */}
      {/* 1. Black Planet Shape */}
      <div className="pointer-events-none absolute -bottom-40 left-1/2 -translate-x-1/2 w-[220%] h-[600px] rounded-[50%]" />

      {/* 2. Animated Indigo Glow (Lifted & Larger) */}
      <motion.div
        className="pointer-events-none absolute -bottom-50 left-1/2 -translate-x-1/2 w-[200%] h-[600px] rounded-[50%] opacity-70 blur-3xl"
        animate={{
          background: [
            "radial-gradient(ellipse at center, #581c87 0%, transparent 40%)",
            "radial-gradient(ellipse at center, #7e22ce 0%, transparent 40%)",
            "radial-gradient(ellipse at center, #581c87 0%, transparent 40%)",
          ],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      />

      {/* 3. New, Sharp White Horizon Arc */}
      <div className="pointer-events-none absolute -bottom-100 left-1/2 -translate-x-1/2 w-[200%] md:w-full h-[600px] rounded-[50%] border-t-4 border-white" />
      <div className="pointer-events-none absolute -bottom-100 left-1/2 -translate-x-1/2 w-[200%] md:w-full h-[600px] rounded-[50%] border-t-4 border-white blur-md" />
    </div>
  );
};
