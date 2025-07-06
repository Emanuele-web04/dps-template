"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGoogle, FaStar } from "react-icons/fa";
import { LuSparkles } from "react-icons/lu";
import { people } from "@/lib/images";

const GrainyNavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <Link
    href={href}
    className="text-base text-neutral-700 font-medium tracking-tight hover:text-black transition-colors"
  >
    {children}
  </Link>
);

export const GrainMashWaitlist: React.FC = () => {
  return (
    <div className="relative w-full font-sans h-screen overflow-clip">
      {/* Gradient background layers */}
      <div className="pointer-events-none absolute inset-0 opacity-80 z-10">
        <div className="absolute inset-0 bg-[radial-gradient(at_15%_20%,_rgba(209,117,255,0.45)_0,_transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(at_80%_30%,_rgba(255,175,105,0.45)_0,_transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(at_50%_85%,_rgba(142,180,255,0.35)_0,_transparent_60%)]"></div>
      </div>

      {/* Grain overlay */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-[url('data:image/svg+xml,%3Csvg%20viewBox%3D%270%200%20600%20600%27%20xmlns%3D%27http://www.w3.org/2000/svg%27%3E%3Cfilter%20id%3D%27noiseFilter%27%3E%3CfeTurbulence%20type%3D%27fractalNoise%27%20baseFrequency%3D%271.5%27%20numOctaves%3D%273%27%20stitchTiles%3D%27stitch%27/%3E%3C/filter%3E%3Crect%20width%3D%27100%25%27%20height%3D%27100%25%27%20filter%3D%27url(%23noiseFilter)%27/%3E%3C/svg%3E')] bg-repeat opacity-40"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <main className="flex flex-col items-center pt-16 pb-12 text-center">
          <div className="inline-flex items-center bg-pink-100/70 text-pink-800 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            200K+ Projects Managed Daily with Prismo
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-black tracking-tight">
            Task Management Made{" "}
            <br className="hidden md:block" />
            Simple and Powerful
          </h1>
          <p className="mt-6 max-w-2xl text-sm md:text-base text-neutral-600">
            Boost productivity with seamless task and team management.
          </p>
          <button className="mt-8 px-8 py-3 rounded-full bg-gradient-to-t from-neutral-950 to-neutral-700 text-white text-lg font-medium shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-transform duration-300">
            Join Waitlist
          </button>
          <div className="mt-6 flex items-center">
            {people.slice(0, 5).map((person, idx) => (
              <Image
                key={idx}
                src={person.src}
                alt={person.name}
                width={40}
                height={40}
                className={` object-cover w-10 h-10 rounded-full border-2 border-white ${idx !== 0 ? "-ml-3" : ""}`}
              />
            ))}
            <span className="ml-4 text-sm text-neutral-700">
              Joined by 5k+ people
            </span>
          </div>
        </main>

        <div className="w-full">
          <Image
            src="https://framerusercontent.com/images/vj7ldJLVDLewzPJDC8SdHoL5A.webp?scale-down-to=4096"
            alt="Prismo App Preview"
            width={1200}
            height={782}
            layout="responsive"
            priority
            className="rounded-t-xl border border-neutral-200 shadow-2xl shadow-black/10 hover:-translate-y-1 hover:shadow-3xl transition-transform duration-500"
          />
        </div>
      </div>
    </div>
  );
};
