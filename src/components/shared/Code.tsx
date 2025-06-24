// components/CodeBlock.tsx
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark, oneLight, nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodeBlockProps {
  children: string;
  className?: string;
  color?: string
}

export default function Code({ children, className, color="#3CEC85" }: CodeBlockProps) {
  const match = /language-(\w+)/.exec(className || "");

  if (match) {
    return (
      <>
        {/* Dark theme */}
        <div className="hidden dark:block w-full">
            <SyntaxHighlighter
              showLineNumbers={className !== "language-bash" ? true : false}
              language={match[1]}
              style={nightOwl}
              customStyle={{
                fontFamily: "var(--font-geist-mono), monospace",
                margin: 0,
                padding: "1rem",
                borderRadius: "0.75rem",
                backgroundColor: "#0f0f0f",
                fontSize: "0.90rem",
              }}
              className="font-mono"
              codeTagProps={{ style: { all: "unset", color: color } }}
              wrapLines={false}
              wrapLongLines={false}
            >
              {children.trim()}
            </SyntaxHighlighter>
          </div>

        {/* Light theme */}
        <div className="dark:hidden flex flex-col w-full rounded-xl ring-1 ring-neutral-300 justify-end overflow-clip">
            <SyntaxHighlighter
              showLineNumbers={className !== "language-bash" ? true : false}
              language={match[1]}
              style={oneLight}
              customStyle={{
                fontFamily: "var(--font-geist-mono), monospace",
                margin: 0,
                padding: "1rem",
                borderRadius: "1rem",
                backgroundColor: "#ffffff",
                fontSize: "0.90rem",
              }}
              className="font-mono"
              codeTagProps={{ style: { all: "unset", color:"#0bac4e" } }}
              wrapLines={false} // Cambiato da true a false per consistenza
              wrapLongLines={false} // Cambiato da true a false per consistenza
            >
              {children.trim()}
            </SyntaxHighlighter>
          </div>
      </>
    );
  }

  return <code className="break-words">{children}</code>;
}