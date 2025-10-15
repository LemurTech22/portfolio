"use client";
import React, { useState } from "react";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/Footer";
import HeroSection from "@/app/components/AboutMeComponents/Hero_Section";
import ExpertiseSection from "@/app/components/AboutMeComponents/technical_expertise";
import CommunitySection from "@/app/components/AboutMeComponents/CreatingCommunity";
import JourneySection from "@/app/components/AboutMeComponents/JourneySection";
import PassionSection from "@/app/components/AboutMeComponents/PassionSection";
import AboutIntro from "@/app/components/AboutMeComponents/AboutIntro";
import MoreProjects from '@/app/components/AboutMeComponents/MoreProjects';

export default function About() {
  const [expandedSections, setExpandedSections] = useState({
    expertise: false,
    passion: false,
    journey: false,
    orgs: false,
  });

  type SectionKey = "expertise" | "passion" | "journey" | "orgs";
  const toggleSection = (section: SectionKey) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[var(--midnight)] via-[var(--brand)] to-[var(--midnight)] text-[var(--accent)] overflow-hidden">
      {/* Background visuals */}
      <div className="absolute inset-0 z-0 animate-particles pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      <Navbar />
      <HeroSection />
      <AboutIntro />

      <section className="max-w-3xl mx-auto space-y-6 mt-8">
        <ExpertiseSection
          expanded={expandedSections.expertise}
          onToggle={() => toggleSection("expertise")}
        />
        <CommunitySection
          expanded={expandedSections.orgs}
          onToggle={() => toggleSection("orgs")}
        />
        <JourneySection
          expanded={expandedSections.journey}
          onToggle={() => toggleSection("journey")}
        />
        <PassionSection
          expanded={expandedSections.passion}
          onToggle={() => toggleSection("passion")}
        />
      </section>

      <MoreProjects/>

      <Footer />
    </div>
  );
}
