import type { Metadata } from "next";
import { inter, jetbrainsMono, materialSymbols } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "KAF-AfCFTA Gateway",
  description:
    "Connecting African Startups with Korean Industry, Investment and Innovation Partners.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} ${materialSymbols.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
