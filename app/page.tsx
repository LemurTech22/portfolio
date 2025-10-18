"use client";
import {React, Navbar, Footer, HeroSection, AboutMe, Featured_Projects} from "./index"

export default function Portfolio() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[var(--midnight)] via-[var(--brand)] to-[var(--midnight)] text-[var(--accent)] overflow-hidden">
      {/* Particle overlay */}
      <div className="absolute inset-0 z-0 animate-particles pointer-events-none" />
      
      {/* Glowing floating blobs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-brand/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      {/*Navigation*/}
      <Navbar/>

      {/* Hero Section */}
      <HeroSection/>
      {/* About Section */}
      <AboutMe/>

      {/* Projects Section */}
      <Featured_Projects/>

      <Footer/>
    </div>
  );
}