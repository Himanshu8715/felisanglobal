import React from "react"
import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";

import "./globals.css";

const _inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const _playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Felisan Global | Pharmaceutical & Nutraceutical Export Company India",
  description:
    "India-based WHO-cGMP compliant pharmaceutical and nutraceutical export company. Delivering quality medicines and supplements to international markets with reliability and compliance.",
  keywords:
    "pharmaceutical export company India, WHO-cGMP pharma exporter, nutraceutical exporter India, pharma contract manufacturing export, international pharmaceutical supplier",
};

export const viewport: Viewport = {
  themeColor: "#0B1F3B",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
