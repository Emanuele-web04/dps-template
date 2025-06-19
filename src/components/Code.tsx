// components/CodeBlock.tsx
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark, oneLight, nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodeBlockProps {
  children: string;
  className?: string;
  color?: string
}

// Controlla se è un blocco di codice (pre) o codice inline
export default function Code({ children, className, color="#3CEC85" }: CodeBlockProps) {
  const match = /language-(\w+)/.exec(className || ""); // Estrai il linguaggio

  if (match) {
    return (
      <>
        <div className="hidden dark:flex flex-col w-full max-h-120 justify-end overflow-clip ">
          <SyntaxHighlighter
            showLineNumbers={className !== "language-bash" ? true : false}
            language={match[1]}
            style={nightOwl}
            customStyle={{
              fontFamily: "var(--font-geist-mono), monospace",
              margin: 0,
              backgroundColor: "#0f0f0f",
              fontSize: "0.90rem"
            }}
            className="font-mono"
            codeTagProps={{ style: { all: "unset", color: color } }}
          >
            {children.trim()}
          </SyntaxHighlighter>
        </div>
        <div className="dark:hidden flex flex-col w-full max-h-120 justify-end overflow-clip ">
          <SyntaxHighlighter
            showLineNumbers={className !== "language-bash" ? true : false}
            language={match[1]}
            style={oneLight}
            customStyle={{
              fontFamily: "var(--font-geist-mono), monospace",
              margin: 0,
              backgroundColor: "#ffffff",
              fontSize: "0.9rem"
            }}
            className="font-mono"
            codeTagProps={{ style: { all: "unset", color:"#0bac4e" } }}
          >
            {children.trim()}
          </SyntaxHighlighter>
        </div>
      </>
    );
  }

  return <code>{children}</code>;
}
