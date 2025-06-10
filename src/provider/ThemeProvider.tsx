// components/ThemeProvider.tsx
'use client';

import { useEffect } from 'react';

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    try {
      const theme = localStorage.theme;
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      
      if (theme === 'dark' || (!theme && systemPrefersDark)) {
        document.documentElement.setAttribute('data-theme', 'dark');
      } else {
        document.documentElement.setAttribute('data-theme', 'light');
      }
    } catch (e) {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, []);

  return <>{children}</>;
}