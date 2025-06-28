import type { Metadata } from "next";
import "../../globals.css";
import { eudoxus, editor, inter, geistMono } from "@/lib/fonts";
import NavbarWebsite from "@/components/layout/NavbarWebsite";
import Footer from "@/components/landing/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://dpstemplates.com/"),
  title: "DP's Templates",
  description: "Production-Ready UI Kits for Swift & Web",
  openGraph: {
    title: "DP's Templates",
    description:
      "Effortlessly integrate a library of ready-to-use SwiftUI views and Next.js UI components with DP's Templates. No complex setup or configuration required - just import and use. Ship pixel-perfect, production-ready interfaces in minutes and skip the boilerplate code. Our comprehensive collection includes buttons, cards, forms, navigation elements, and complete screen templates optimized for both mobile and web. Perfect for indie developers, startups, and design teams looking to accelerate their development workflow. Join our waitlist today for early access and exclusive launch discounts.",
    type: "website",
    images: [
      {
        url: "https://dpstemplates.com/placeholder.png",
        width: 1200,
        height: 630,
        alt: "DP's Templates - Ready-to-Use SwiftUI & Next.js Components",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DP's Templates",
    description:
      "Effortlessly integrate a library of ready-to-use SwiftUI views and Next.js UI components with DP's Templates. No complex setup or configuration required - just import and use. Ship pixel-perfect, production-ready interfaces in minutes and skip the boilerplate code. Our comprehensive collection includes buttons, cards, forms, navigation elements, and complete screen templates optimized for both mobile and web. Perfect for indie developers, startups, and design teams looking to accelerate their development workflow. Join our waitlist today for early access and exclusive launch discounts.",
    images: ["https://dpstemplates.com/placeholder.png"],
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
