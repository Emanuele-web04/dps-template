"use client";

import React, { useEffect, useRef } from "react";
import { TbBinary, TbBug } from "react-icons/tb";
import Link from "next/link";

const Matrix404 = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const chars =
      "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const charArray = chars.split("");
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops: number[] = [];

    for (let i = 0; i < columns; i++) {
      drops[i] = 1;
    }

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#00ff41";
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = charArray[Math.floor(Math.random() * charArray.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 33);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black">
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4 text-center">
        <div className="relative mb-6">
          <TbBinary className="w-24 h-24 text-transparent pointer-events-none" />
          <TbBug
            className="w-24 h-24 text-[#00bb2f] absolute top-0 left-0 animate-[glitch_1s_ease-in-out_infinite]"
            style={{ clipPath: "inset(45% 0 45% 0)" }}
          />
        </div>

        <h1 className="text-6xl md:text-8xl font-bold mb-4 font-mono text-[#00bb2f]">
          404
        </h1>

        <p className="text-xl md:text-2xl mb-8 font-mono text-[#00bb2f]">
          The Matrix has you... Page not found.
        </p>

        <Link
          href="/"
          className="px-6 py-3 text-[#00bb2f] border-2 border-[#00ff41] rounded-lg 
                   hover:bg-[#00ff41] hover:text-black transition-all duration-300
                   font-mono text-lg"
        >
          Return to Reality
        </Link>
      </div>

      <style jsx global>{`
        @keyframes glitch {
          0% {
            clip-path: inset(40% 0 61% 0);
            transform: translate(-2px, 2px);
          }
          20% {
            clip-path: inset(92% 0 1% 0);
            transform: translate(1px, -3px);
          }
          40% {
            clip-path: inset(43% 0 1% 0);
            transform: translate(-3px, 1px);
          }
          60% {
            clip-path: inset(25% 0 58% 0);
            transform: translate(3px, -2px);
          }
          80% {
            clip-path: inset(54% 0 7% 0);
            transform: translate(-1px, 4px);
          }
          100% {
            clip-path: inset(58% 0 43% 0);
            transform: translate(2px, -2px);
          }
        }
      `}</style>
    </div>
  );
};

export default Matrix404;
