const fs = require("fs");
const path = require("path");

/**
 * Script to automatically generate -code.ts files from TSX components
 * Usage: node scripts/generate-code.js [component-path]
 */

function extractComponentCode(filePath) {
  const content = fs.readFileSync(filePath, "utf8");

  // Remove "use client" directive for the code string
  const cleanedContent = content
    .replace(/["']use client["'];?\n?/g, "")
    .replace(/import.*from\s+["']@\/utils\/icons["'];?\n?/g, "")
    .trim();

  // Extract the component part (everything after imports)
  const componentMatch = cleanedContent.match(/const\s+\w+\s*=.*$/s);
  if (!componentMatch) {
    throw new Error("Could not find component in file");
  }

  return componentMatch[0];
}

function generateCodeFile(componentPath) {
  const componentContent = extractComponentCode(componentPath);
  const componentName = path.basename(componentPath, ".tsx");
  const codeFileName = componentName + "-code.ts";
  const codeFilePath = path.join(path.dirname(componentPath), codeFileName);

  // Generate the code template with inline SVG instead of icon import
  const codeTemplate = `export const ${componentName.replace(/-([a-z])/g, (g) => g[1].toUpperCase())}Code = \`
import React from "react";

${componentContent.replace(/from\s+["']@\/utils\/icons["']/, 'from "lucide-react"')}
\`;`;

  fs.writeFileSync(codeFilePath, codeTemplate);
  console.log(`✅ Generated: ${codeFilePath}`);
}

// Main execution
const componentPath = process.argv[2];

if (!componentPath) {
  console.error("Usage: node scripts/generate-code.js <component-path>");
  process.exit(1);
}

if (!fs.existsSync(componentPath)) {
  console.error(`File not found: ${componentPath}`);
  process.exit(1);
}

try {
  generateCodeFile(componentPath);
} catch (error) {
  console.error("Error generating code file:", error.message);
  process.exit(1);
}
