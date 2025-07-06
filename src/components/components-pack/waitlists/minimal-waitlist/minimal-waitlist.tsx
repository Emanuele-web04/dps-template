"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { people } from "@/lib/images";

// Helper hook for countdown
function useCountdown(target: Date) {
  const calculate = () => target.getTime() - Date.now();
  const [diff, setDiff] = useState(calculate());

  useEffect(() => {
    const id = setInterval(() => setDiff(calculate()), 1000);
    return () => clearInterval(id);
  }, [target]);

  const totalSeconds = Math.max(0, Math.floor(diff / 1000));
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return { days, hours, minutes, seconds };
}

const TimeBox = ({ value, label }: { value: number; label: string }) => (
  <div className="flex flex-col items-center bg-neutral-100 rounded-xl px-4 py-3 w-15 md:w-20">
    <span className="text-xl md:text-2xl font-semibold tabular-nums">
      {String(value).padStart(2, "0")}
    </span>
    <span className="text-[10px] uppercase tracking-widest text-neutral-500 mt-1">
      {label}
    </span>
  </div>
);

const Separator = () => (
  <div className="flex items-center justify-center text-lg md:text-xl font-bold">
    :
  </div>
);

export const MinimalWaitlist: React.FC = () => {
  const target = React.useMemo(
    () => new Date(Date.now() + 180 * 24 * 60 * 60 * 1000),
    []
  );
  const { days, hours, minutes, seconds } = useCountdown(target);

  return (
    <div className="relative flex flex-col items-center justify-between h-screen overflow-clip font-serif text-neutral-800 bg-gradient-to-t from-white to-neutral-50">
      {/* Dotted pattern overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 0.5px 0.5px, rgba(6,182,212,0.15) 0.6px, transparent 0)",
          backgroundSize: "8px 8px",
          backgroundRepeat: "repeat",
          maskImage:
            "radial-gradient(ellipse at center, black 60%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 60%, transparent 100%)",
        }}
      />

      <div className="w-full max-w-xl text-center flex flex-col items-center px-4 justify-center py-20 lg:py-32">
        {/* Logo */}
        <div className="w-14 h-14 mx-auto flex items-center justify-center bg-black rounded-xl mb-8 shadow-lg">
          <span className="text-white font-bold text-2xl">S</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Get early access
        </h1>
        <p className="mt-4 font-sans text-neutral-600 text-sm md:text-base">
          We're getting close. Sign up to get early access to Soonix and start
          building your viral waitlist.
        </p>

        {/* Email form */}
        <form className="mt-8 font-sans flex w-full gap-2 bg-neutral-100/60 hover:bg-neutral-100 rounded-full p-2 shadow-inner backdrop-blur-sm">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-1 bg-transparent px-4 focus:outline-none text-sm md:text-base"
          />
          <button
            type="submit"
            className="px-6 py-2 rounded-full bg-black text-white text-sm md:text-base font-medium shadow hover:shadow-lg hover:bg-neutral-900 transition-all"
          >
            Join waitlist
          </button>
        </form>

        {/* Avatars */}
        <div className="mt-4 flex items-center justify-center">
          {people.slice(0, 3).map((p, i) => (
            <Image
              key={i}
              src={p.src}
              alt={p.name}
              width={36}
              height={36}
              className={`w-9 h-9 object-cover rounded-full border-2 border-white ${i !== 0 ? "-ml-3" : ""}`}
            />
          ))}
          <span className="ml-4 font-sans text-xs md:text-sm text-neutral-600">
            Join +5,000 others on the waitlist
          </span>
        </div>

        {/* Countdown */}
        <div className="mt-10 flex items-center gap-2">
          <TimeBox value={days} label="d" />
          <Separator />
          <TimeBox value={hours} label="h" />
          <Separator />
          <TimeBox value={minutes} label="m" />
          <Separator />
          <TimeBox value={seconds} label="s" />
        </div>
      </div>

      {/* Bottom phone image with cyan radial gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full overflow-hidden pointer-events-none">
        {/* Gradient */}
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[150%] h-[250px] bg-gradient-to-t from-cyan-200 to-transparent blur-3xl" />
        {/* Image */}
        <Image
          src="https://framerusercontent.com/images/zFmXK3aPTE8yWO3mW4zljkgqmhw.png?scale-down-to=2048"
          alt="Phone preview"
          width={600}
          height={600}
          className="relative mx-auto w-72 md:w-[400px] drop-shadow-xl translate-y-6"
        />
      </div>
    </div>
  );
};

// --- Code String (for preview) ---
export const minimalWaitlistCode = `/* MinimalWaitlist component code */`;
