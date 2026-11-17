import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope, Playfair_Display } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/animations/SmoothScroll";
import CustomCursor from "@/components/animations/CustomCursor";
import ScrollProgress from "@/components/animations/ScrollProgress";
import Preloader from "@/components/animations/Preloader";
import AtmosphericNoise from "@/components/ui/AtmosphericNoise";
import AudioAtmosphere from "@/components/ui/AudioAtmosphere";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-bodoni",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#100F0E",
};

export const metadata: Metadata = {
  title: "Obsidian & Cacao — Haute Chocolaterie & Dark Cacao Atelier",
  description:
    "An internationally renowned luxury chocolate house. Savor rare single-origin dark chocolate, slow granite conching, and cinematic dark indulgence.",
  keywords: [
    "luxury chocolate",
    "dark chocolate house",
    "cacao atelier",
    "artisanal chocolate",
    "single origin chocolate",
    "Obsidian and Cacao",
    "haute patisserie",
  ],
  authors: [{ name: "Obsidian & Cacao Atelier" }],
  openGraph: {
    title: "Obsidian & Cacao — Haute Chocolaterie",
    description: "A darker kind of indulgence. Ancient cacao, 96-hour conching, and sculptural craft.",
    siteName: "Obsidian & Cacao",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${manrope.variable} ${playfair.variable} scroll-smooth`}
    >
      <body className="bg-obsidian text-ivory antialiased selection:bg-cacao selection:text-ivory">
        <SmoothScroll>
          <Preloader />
          <CustomCursor />
          <ScrollProgress />
          <AtmosphericNoise />
          <AudioAtmosphere />

          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
