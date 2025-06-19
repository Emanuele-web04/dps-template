// hooks/useKeyboardShortcut.ts
import { useEffect } from "react";

type Shortcut = string; // e.g. "alt+shift+t", "mod+k", "escape"

export default function useKeyboardShortcut(
  combo: Shortcut,
  handler: (e: KeyboardEvent) => void
) {
  useEffect(() => {
    // 1) normalize and split
    const parts = combo.toLowerCase().split("+").map(p => p.trim());
    const ctrlNeeded  = parts.includes("ctrl") || parts.includes("control");
    const shiftNeeded = parts.includes("shift");
    const altNeeded   = parts.includes("alt");
    const metaNeeded  = parts.includes("meta") || parts.includes("cmd") || parts.includes("command");
    // everything else is our “main” key (we’ll assume one letter or name)
    const mainKey = parts.find(
      p => !["ctrl","control","shift","alt","meta","cmd","command"].includes(p)
    );

    const listener = (e: KeyboardEvent) => {
      // 2) bail out early if modifiers don’t match
      if (
        e.ctrlKey  !== ctrlNeeded  ||
        e.shiftKey !== shiftNeeded ||
        e.altKey   !== altNeeded   ||
        e.metaKey  !== metaNeeded
      ) return;

      // 3) if it’s a letter (a-z), compare by e.code
      if (mainKey && mainKey.length === 1 && /^[a-z]$/.test(mainKey)) {
        if (e.code.toLowerCase() === `key${mainKey}`) {
          e.preventDefault();
          handler(e);
        }
      } else {
        // for non-letter keys (Escape, Enter, etc.) fall back to e.key
        if (e.key.toLowerCase() === mainKey) {
          e.preventDefault();
          handler(e);
        }
      }
    };

    window.addEventListener("keydown", listener);
    return () => window.removeEventListener("keydown", listener);
  }, [combo, handler]);
}
