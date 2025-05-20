import type { Metadata } from "next";
import "./globals.css";
import { eudoxus, editor, inter } from "@/lib/fonts";

export const metadata: Metadata = {
  metadataBase: new URL("https://dps-template.vercel.app/"), // Replace with your production domain
  title: "DP's Templates",
  description: "Production-Ready UI Kits for Swift & Web",
  openGraph: {
    title: "DP's Templates",
    description:
      "Effortlessly integrate a library of ready-to-use SwiftUI views and Next.js UI components—no setup or configuration required with DP's Templates. Ship pixel-perfect, production-ready interfaces in minutes and skip the boilerplate. Join our waitlist for early access.",
    type: "website",
    url: "https://dps-template.vercel.app/", // Replace with your actual domain
    images: [
      {
        url: "metadata.png", // Make sure this image exists in your public folder
        width: 1200,
        height: 630,
        alt: "DP's Templates Preview",
      },
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
