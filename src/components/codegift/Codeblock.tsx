// components/CodeBlock.tsx

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  nightOwl,
  oneDark,
  oneLight,
} from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodeBlockProps {
  children: string;
  className?: string;
}

// Controlla se è un blocco di codice (pre) o codice inline
export default function CodeBlock({ children, className }: CodeBlockProps) {
  const match = /language-(\w+)/.exec(className || ""); // Estrai il linguaggio

  if (match) {
    return (
      <>
        <div className="hidden dark:flex w-full">
          <SyntaxHighlighter
            language={match[1]}
            style={nightOwl}
            customStyle={{
              fontFamily: "var(--font-geist-mono), monospace",
              margin: 0,
              padding: "1rem",
              borderRadius: "0 0 0.75rem 0.75rem", // Solo gli angoli inferiori
              backgroundColor: "#0f0f0f",
              fontSize: "0.85rem",
              maxHeight: "30rem",
              overflow: "auto",
            }}
            className="rounded-lg w-full font-mono"
            codeTagProps={{ style: { all: "unset" } }}
          >
            {children.trim()}
          </SyntaxHighlighter>
        </div>
        <div className="dark:hidden w-full">
          <SyntaxHighlighter
            language={match[1]}
            style={oneLight}
            customStyle={{
              fontFamily: "var(--font-geist-mono), monospace",
              margin: 0,
              padding: "1rem",
              borderRadius: "0 0 0.75rem 0.75rem", // Solo gli angoli inferiori
              backgroundColor: "#ffffff",
              maxHeight: "30rem",
              fontSize: "0.85rem",
              overflow: "auto",
            }}
            className="rounded-lg font-mono"
            codeTagProps={{ style: { all: "unset" } }}
          >
            {children.trim()}
          </SyntaxHighlighter>
        </div>
      </>
    );
  }

  return <code>{children}</code>;
}
