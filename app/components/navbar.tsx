"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import {images} from '../../assets/assets'
import Image from 'next/image'

const menuItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/pages/about" },
  { name: "Projects", href: "/pages/project" },
  
  //add features for this later
  //{ name: "Contact", href: "/contact" },
  //{ name: "Blog", href: "/blog" },
  { name: "Resume", href: "./Jose_Data_Science_Resume.pdf"}
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname(); // to highlight active link

  return (
    <nav className="fixed w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-700">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex justify-between items-center h-16 ">
          {/* Logo */}
          <Link href='/'>
          <div className="text-2xl font-bold bg-gradient-to-r from-emerald-500 to-purple-300 bg-clip-text">
            <Image
            src={images.icon}
            alt="icon" 
            width={100} 
            height={100} 
            />

          </div>
        </Link>
          {/* Desktop Menu */}
          
          <div className="hidden md:flex space-x-8 ml-auto">
            {menuItems.map((item) => (
              <Link key={item.name} href={item.href}>
                <span
                  className={` cursor-pointer transition-colors text-white hover:text-emerald-400 ${
                    pathname === item.href ? "text-emerald-400 font-semibold" : ""
                  }`}
                >
                  {item.name}
                </span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-800 border-t border-slate-700">
          <div className="px-4 py-4 space-y-3">
            {menuItems.map((item) => (
              <Link key={item.name} href={item.href}>
                <span
                  className={`block w-full text-left py-2 text-white cursor-pointer hover:text-emerald-400 transition-colors ${
                    pathname === item.href ? "text-emerald-400 font-semibold" : ""
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}