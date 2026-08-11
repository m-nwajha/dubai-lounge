import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display, Dancing_Script } from "next/font/google";
import Header from "@/components/Header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  weight: ["700", "900"],
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
  weight: ["600"],
});

export const metadata: Metadata = {
  title: "Dubai Lounge",
  description: "Premium shisha lounge, food & drinks in Dubai.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="de-DE"
      className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable} ${dancingScript.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
      </body>
    </html>
  );
}
