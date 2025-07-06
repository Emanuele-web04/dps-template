export const matrix404Code = `"use client";

import React, { useEffect, useRef } from "react";
import { TbBinary, TbBug } from "react-icons/tb";

export const Matrix404 = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%";
    const matrixArray = matrix.split("");

    const fontSize = 10;
    const columns = canvas.width / fontSize;

    const drops: number[] = [];
    for (let x = 0; x < columns; x++) {
      drops[x] = 1;
    }

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#00bb2f";
      ctx.font = fontSize + "px monospace";

      for (let i = 0; i < drops.length; i++) {
        const text = matrixArray[Math.floor(Math.random() * matrixArray.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    };

    const interval = setInterval(draw, 35);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{ filter: "blur(1px)" }}
      />
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center">
        <div className="glitch-wrapper">
          <div className="flex items-center gap-4">
            <TbBinary className="h-12 w-12 text-[#00bb2f]" />
            <h1 className="glitch-text text-8xl font-bold text-[#00bb2f]">404</h1>
            <TbBug className="h-12 w-12 text-[#00bb2f]" />
          </div>
        </div>
        <p className="mt-4 font-mono text-xl text-[#00bb2f]">
          System Malfunction: Page Not Found
        </p>
      </div>

      <style jsx>{\`
        .glitch-wrapper {
          animation: glitch 2s infinite;
        }

        .glitch-text {
          font-family: monospace;
          position: relative;
        }

        @keyframes glitch {
          0% {
            transform: translate(0);
          }
          20% {
            transform: translate(-2px, 2px);
          }
          40% {
            transform: translate(-2px, -2px);
          }
          60% {
            transform: translate(2px, 2px);
          }
          80% {
            transform: translate(2px, -2px);
          }
          100% {
            transform: translate(0);
          }
        }
      \`}</style>
    </div>
  );
}`; 