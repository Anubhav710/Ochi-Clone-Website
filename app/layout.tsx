import type { Metadata } from "next";

import "./globals.css";
import { SmoothScroll } from "@/components/smooth-scrolling";
import Loader from "@/components/Loadering";

export const metadata: Metadata = {
  title: "Ochi",
  description:
    "Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
