import type { Metadata } from "next";
import { Outfit, Ovo } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar"

const outfit = Outfit({
  subsets: ["latin"], weight: ["400","500","600","700"]
});

const ovo = Ovo({
  subsets: ["latin"], weight: ["400"]
});

export const metadata: Metadata = {
  title: "Portfolio Jose Conde",
  description: "",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden`}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}




