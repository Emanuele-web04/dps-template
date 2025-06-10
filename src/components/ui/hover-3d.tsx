'use client'
import { useState, useRef } from "react";

export default function HoverCard3D() {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    const rotateX = (mouseY / (rect.height / 2)) * -15;
    const rotateY = (mouseX / (rect.width / 2)) * 15;

    setMousePosition({ x: rotateY, y: rotateX });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePosition({ x: 0, y: 0 });
  };

  const cardStyle = {
    transform: isHovered
      ? `perspective(1000px) rotateX(${mousePosition.y}deg) rotateY(${mousePosition.x}deg) translateZ(20px)`
      : "perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)",
    transition: isHovered
      ? "none"
      : "transform 0.5s cubic-bezier(0.23, 1, 0.320, 1)",
  };

  return (
    <div className="relative w-full">
      {/* Glow effect */}
      <div
        className={`absolute inset-0 bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-orange-500/20 rounded-2xl blur-xl transition-opacity duration-500 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
        style={{
          transform: "scale(1.1)",
        }}
      />

      <div
        ref={cardRef}
        className="relative flex items-center h-[250px] w-full justify-center bg-neutral-100 dark:bg-neutral-900/80 backdrop-blur-sm rounded-2xl ring-1 ring-neutral-200 dark:ring-neutral-700/50 cursor-pointer overflow-hidden"
        style={cardStyle}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Animated gradient overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Shine effect */}
        <div
          className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform transition-transform duration-1000 ${
            isHovered ? "translate-x-full" : "-translate-x-full"
          }`}
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)",
            transform: isHovered ? "translateX(100%)" : "translateX(-100%)",
          }}
        />

        <h1 className="relative z-10 w-full text-center text-4xl font-bold tracking-tight text-black dark:text-white">
          <span
            className={`transition-all flex flex-col duration-300 ${isHovered ? "text-transparent bg-clip-text bg-gradient-to-r from-black via-neutral-300 to-black dark:from-neutral-400 dark:via-white dark:to-neutral-400" : ""}`}
          >
            Hover me!
            <p className="text-sm font-normal text-neutral-600 dark:text-neutral-400">And play with the mouse!</p>
          </span>
        </h1>

        {/* Floating particles */}
        {isHovered && (
          <>
            <div className="absolute top-8 left-8 w-1 h-1 bg-blue-400 rounded-full animate-pulse" />
            <div
              className="absolute top-8 right-8 w-1 h-1 bg-indigo-400 rounded-full animate-pulse"
              style={{ animationDelay: "0.5s" }}
            />
            <div
              className="absolute bottom-8 left-8 w-1 h-1 bg-emerald-400 rounded-full animate-pulse"
              style={{ animationDelay: "1s" }}
            />
            <div
              className="absolute bottom-8 right-8 w-1 h-1 bg-orange-400 rounded-full animate-pulse"
              style={{ animationDelay: "1.5s" }}
            />
          </>
        )}
      </div>
    </div>
  );
}
