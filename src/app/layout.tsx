import type { Metadata } from "next";
import "./globals.css";
import { eudoxus, editor, inter } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "DP's Templates",
  description: "Production-Ready UI Kits for Swift & Web",
  openGraph: {
    images: ["/metadata.png"]
  }
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
