import type { Metadata } from "next";
import { eudoxus, editor, inter, geistMono } from "@/lib/fonts";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
  title: "Waitlist Components",
  description: "A collection of modern and engaging waitlist components.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className={cn(eudoxus.variable, editor.variable, geistMono.variable, inter.variable, "bg-clean min-h-screen w-full")}>{children}</div>;
}
