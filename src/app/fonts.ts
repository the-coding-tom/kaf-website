import { Inter, JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";

export const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

// Material Symbols Outlined is an icon font and is not part of the
// next/font/google catalog. The .woff2 below is the official Google Fonts
// build, subset to only the glyphs the design uses (see ICONS in
// src/components/Icon.tsx). Re-subset with:
//   https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&icon_names=<comma,separated,names>
export const materialSymbols = localFont({
  src: "./fonts/material-symbols-outlined.woff2",
  variable: "--font-icons",
  display: "block",
  weight: "400",
  style: "normal",
  adjustFontFallback: false,
  fallback: [],
});
