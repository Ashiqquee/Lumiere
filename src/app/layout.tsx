import type { Metadata } from "next";
import { Playfair_Display, Cormorant_Garamond, Lato } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: ["300", "400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lumière | Fine Jewelry Collection",
  description: "Discover our exquisite collection of handcrafted fine jewelry. Elegant necklaces, earrings, and bracelets designed with passion and precision.",
  keywords: ["jewelry", "necklaces", "fine jewelry", "luxury", "handcrafted", "elegant"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${cormorant.variable} ${lato.variable}`}>
      <body className="antialiased font-cormorant">
        {children}
      </body>
    </html>
  );
}
