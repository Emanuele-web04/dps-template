import type { Metadata } from "next";
import "../../globals.css";
import { eudoxus, editor, inter, geistMono } from "@/lib/fonts";

export const metadata: Metadata = {
  metadataBase: new URL("https://waitlist.dpstemplates.com/"),
  title: "DP's Templates – Waitlist",
  description: "Join the exclusive waitlist for DP's Templates and be the first to get early access to our production-ready UI kits for Swift & Web.",
  openGraph: {
    title: "DP's Templates Waitlist",
    description: "Sign up now to secure your spot and receive early access and launch discounts for DP's Templates – the fastest way to ship pixel-perfect interfaces.",
    type: "website",
    images: [
      {
        url: "https://waitlist.dpstemplates.com/og.png",
        width: 1200,
        height: 630,
        alt: "Join DP's Templates Waitlist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DP's Templates Waitlist",
    description: "Join the exclusive waitlist for DP's Templates – no complex setup, just plug-and-play UI components for SwiftUI and Next.js.",
    images: ["https://waitlist.dpstemplates.com/og.png"],
  },
};

export default function WaitlistLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${eudoxus.variable} ${editor.variable} ${geistMono.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
