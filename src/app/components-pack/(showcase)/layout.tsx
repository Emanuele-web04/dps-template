import type { Metadata } from "next";
import "../../globals.css";
import { eudoxus, editor, inter, geistMono } from "@/lib/fonts";
import NavbarWebsite from "@/components/layout/NavbarWebsite";
import Footer from "@/components/landing/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://dpstemplates.com"),
  title: "Components Pack | DP's Templates",
  description:
    "Explore a collection of production-ready UI components for Next.js and Tailwind CSS. Copy, paste, and ship your next project faster.",
  openGraph: {
    title: "Components Pack | DP's Templates",
    description:
      "Explore a collection of production-ready UI components for Next.js and Tailwind CSS. Copy, paste, and ship your next project faster.",
    url: "/components-pack",
    type: "website",
    images: [
      {
        url: "https://dpstemplates.com/og-components-pack.webp",
        width: 1200,
        height: 630,
        alt: "UI Components for Next.js & Tailwind CSS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Components Pack | DP's Templates",
    description:
      "Explore a collection of production-ready UI components for Next.js and Tailwind CSS. Copy, paste, and ship your next project faster.",
    images: ["https://dpstemplates.com/og-components-pack.webp"],
  },
};

export default function ComponentsPackLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${eudoxus.variable} ${editor.variable} ${geistMono.variable} ${inter.variable} antialiased`}
      >
        <NavbarWebsite size="small" />
        <div className="bg-clean min-h-screen w-full">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
