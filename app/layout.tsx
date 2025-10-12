import type { Metadata } from "next";
import { Outfit, Ovo } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar"
import { SpeedInsights } from "@vercel/speed-insights/next";
import {Analytics} from "@vercel/analytics/next"

const outfit = Outfit({
  subsets: ["latin"], weight: ["400","500","600","700"]
});

const ovo = Ovo({
  subsets: ["latin"], weight: ["400"]
});

export const metadata: Metadata = {
  title: "Jose Conde Portfolio ",
  description: "Welcome to my Portfolio!",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden`}>
        <Navbar />
        <main>
          {children}
          <Analytics/>
          <SpeedInsights/>
          </main>
      </body>
    </html>
  );
}




