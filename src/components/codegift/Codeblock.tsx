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

  if (match) {
    return (
      <div className="flex flex-col w-full max-h-120 justify-end overflow-clip">
    
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
