import type { Metadata } from "next";
import "./globals.css";
import { eudoxus, editor, inter } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "DP's Templates",
  description: "Production-Ready UI Kits for Swift & Web",
  openGraph: {
    title: "DP's Templates",
    description: "Effortlessly integrate a library of ready-to-use SwiftUI views and Next.js UI components...",
    type: "website",
    images: [
      "https://dps-template.vercel.app/og.png",  // Full absolute URL
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${eudoxus.variable} ${editor.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
