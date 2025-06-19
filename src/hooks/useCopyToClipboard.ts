import { useState } from "react";

export const useCopyToCLipboard = () => {
    const [copy, setCopy] = useState(false);

  const handleCopy = async (code: string) => {
    try {
        if (!copy) {
            await navigator.clipboard.writeText(code);
            setCopy(true);
            setTimeout(() => {
              setCopy(false);
            }, 1200);
          }
    } catch {
        console.log("Couldnt copy")
    }
  };

  return { copy, handleCopy }
}