// components/CodeBlock.tsx
"use client";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {oneDark} from "react-syntax-highlighter/dist/esm/styles/prism";
import { LuCopy, LuCheck } from "react-icons/lu";
import { useState } from "react";

interface CodeBlockProps {
  children: string;
  className?: string;
}

// Controlla se è un blocco di codice (pre) o codice inline
export default function CodeBlock({ children, className }: CodeBlockProps) {
  const match = /language-(\w+)/.exec(className || ""); // Estrai il linguaggio
  const [copy, setCopy] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(children);
    setCopy(true);
    setTimeout(() => {
      setCopy(false)
    }, 1200);
  }

  if (match) {
    return (
      <div className="flex flex-col w-full rounded-xl ring-1 max-h-130 ring-neutral-800 justify-end overflow-clip">
      <div className="flex w-full px-3 py-2.5 justify-between items-center bg-neutral-900 backdrop-blur-2xl">
        <p className="text-sm my-0 font-mono text-gray-400">{"simple-table."}{match[1]}</p>
        <button
          onClick={handleCopy}
          className="my-0 text-neutral-400 font-medium cursor-pointer focus:outline-none"
        >
          {copy ? <LuCheck/> : <LuCopy/>}
        </button>
      </div>
      <SyntaxHighlighter
        language={match[1]}
        style={oneDark}
        customStyle={{
          fontFamily: "var(--font-geist-mono), monospace",
          margin: 0,
          padding: "1rem",
          borderRadius: "0 0 0.75rem 0.75rem", // Solo gli angoli inferiori
          backgroundColor: "#000000"
        }}
        className="rounded-lg font-mono"
        codeTagProps={{ style: { all: "unset" } }}
      >
        {children.trim()}
      </SyntaxHighlighter>
    </div>
    );
  }

  return <code>{children}</code>;
}
