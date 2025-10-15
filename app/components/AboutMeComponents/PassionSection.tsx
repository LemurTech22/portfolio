"use client";
import React from "react";
import AccordionSection from "./AccordionSection";

interface Props {
  expanded: boolean;
  onToggle: () => void;
}

export default function PassionSection({ expanded, onToggle }: Props) {
  return (
    <AccordionSection
      title="Beyond the Code"
      color="blue"
      expanded={expanded}
      onToggle={onToggle}
    >
      <h3 className="text-xl font-semibold text-emerald-400 mb-3">🎵 Music Enthusiast</h3>
      <p className="text-lg text-slate-300 leading-relaxed">
        I love listening to music — my go-to artists include <span className="text-purple-300">Tatsuro Yamashita</span>, 
        <span className="text-purple-300"> Last Dinosaurs</span>, and <span className="text-purple-300">The Midnight</span>.  
        I also play trumpet, bass, and guitar — skills I still keep sharp today!
      </p>

      <h3 className="text-xl font-semibold text-emerald-400 mt-6 mb-3">✈️ Travel & Culture</h3>
      <p className="text-lg text-slate-300 leading-relaxed">
        I enjoy exploring new places and cultures — from New York to Mexico, and one day Sweden, Japan, and Alaska.
      </p>

      <h3 className="text-xl font-semibold text-emerald-400 mt-6 mb-3">🖥️ PC Building</h3>
      <p className="text-lg text-slate-300 leading-relaxed">
        I build and repair PCs — my current rig runs a Ryzen 3600 and an MSI 3060 Ti.
      </p>

      <h3 className="text-xl font-semibold text-emerald-400 mt-6 mb-3">🏎️ Automotive Passion</h3>
      <p className="text-lg text-slate-300 leading-relaxed">
        I’m a gearhead who loves restoring and modifying cars like my 2001 Mustang GT and future C4 Corvette project.
      </p>
    </AccordionSection>
  );
}
