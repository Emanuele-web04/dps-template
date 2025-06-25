const fs = require("fs");
const path = require("path");

/**
 * Script to automatically generate all -code.ts files in a directory
 * Usage: node scripts/generate-all-codes.js [directory-path]
 */

function extractComponentCode(filePath) {
  const content = fs.readFileSync(filePath, "utf8");

  // Remove "use client" directive and icon imports for the code string
  let cleanedContent = content.replace(/["']use client["'];?\n?/g, "").trim();

  // Replace icon imports with inline SVG
  cleanedContent = cleanedContent.replace(
    /import\s*{\s*([^}]+)\s*}\s*from\s*["']@\/utils\/icons["'];?\n?/g,
    (match, icons) => {
      // Convert LuStar to inline SVG for example
      return cleanedContent.includes("LuStar")
        ? `
// Replace with actual SVG or import from "lucide-react"
const LuStar = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);
`
        : "";
    }
  );

  return cleanedContent;
}

function generateCodeFile(componentPath) {
  const componentContent = extractComponentCode(componentPath);
  const componentName = path.basename(componentPath, ".tsx");
  const codeFileName = componentName + "-code.ts";
  const codeFilePath = path.join(path.dirname(componentPath), codeFileName);

  // Skip if code file already exists and is newer than component
  if (fs.existsSync(codeFilePath)) {
    const componentStat = fs.statSync(componentPath);
    const codeStat = fs.statSync(codeFilePath);
    if (codeStat.mtime > componentStat.mtime) {
      console.log(`⏭️  Skipped: ${codeFilePath} (already up to date)`);
      return;
    }
  }

  // Generate the code template
  const exportName =
    componentName.replace(/-([a-z])/g, (g) => g[1].toUpperCase()) + "Code";
  const codeTemplate = `export const ${exportName} = \`
${componentContent}
\`;`;

  fs.writeFileSync(codeFilePath, codeTemplate);
  console.log(`✅ Generated: ${codeFilePath}`);
}

function processDirectory(dirPath) {
  const items = fs.readdirSync(dirPath);

  for (const item of items) {
    const fullPath = path.join(dirPath, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      // Recursively process subdirectories
      processDirectory(fullPath);
    } else if (
      item.endsWith(".tsx") &&
      !item.includes("-code") &&
      !item.includes(".d.ts")
    ) {
      try {
        generateCodeFile(fullPath);
      } catch (error) {
        console.error(`❌ Error processing ${fullPath}:`, error.message);
      }
    }
  }
}

// Main execution
const targetPath = process.argv[2] || "src/components/components-pack";

if (!fs.existsSync(targetPath)) {
  console.error(`Path not found: ${targetPath}`);
  process.exit(1);
}

console.log(`🚀 Processing components in: ${targetPath}`);
const stat = fs.statSync(targetPath);

if (stat.isDirectory()) {
  processDirectory(targetPath);
} else {
  generateCodeFile(targetPath);
}

console.log("✨ Done!");
