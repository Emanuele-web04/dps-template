import type { Metadata } from "next";
import "../globals.css";
import { eudoxus, editor, inter, geistMono } from "@/lib/fonts";
import ThemeProvider from "@/provider/ThemeProvider";
import NavbarWebsite from "@/components/NavbarWebsite";
import Footer from "@/components/landing/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://dpstemplates.com/"),
  title: "DP's Templates | Pricing & Plans",
  description:
    "Affordable pricing plans for production-ready UI kits, templates, and components for Swift & Web development",
  openGraph: {
    title: "DP's Templates | Pricing & Plans",
    description:
      "Explore our flexible pricing options for premium UI kits, templates, and components. Get access to production-ready Next.js templates starting at $49 and individual UI components from $12. Perfect for indie developers, startups, and design teams looking to accelerate their development workflow with high-quality, customizable solutions.",
    type: "website",
    images: [
      {
        url: "https://dpstemplates.com/placeholder.png",
        width: 1200,
        height: 630,
        alt: "DP's Templates - Pricing & Plans for UI Kits and Components",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DP's Templates | Pricing & Plans",
    description:
      "Explore our flexible pricing options for premium UI kits, templates, and components. Get access to production-ready Next.js templates starting at $49 and individual UI components from $12. Perfect for indie developers, startups, and design teams looking to accelerate their development workflow with high-quality, customizable solutions.",
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
