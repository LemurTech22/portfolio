"use client";
import React from "react";
import AccordionSection from "./AccordionSection";

interface Props {
  expanded: boolean;
  onToggle: () => void;
}

export default function JourneySection({ expanded, onToggle }: Props) {
  return (
    <AccordionSection
      title="My Journey & Philosophy"
      color="purple"
      expanded={expanded}
      onToggle={onToggle}
    >
      <p className="text-lg text-slate-300 leading-relaxed">
        I am passionate about continuous learning — exploring everything from AI and data visualization to modern 
        front-end frameworks and cloud systems.
      </p>

      <p className="text-lg text-slate-300 leading-relaxed">
        I hold certifications from NVIDIA and HPEDSI in Deep Learning, Accelerated Computing, and Data Science. 
        Currently, I am pursuing AWS Cloud Practitioner and COMPTIA A+ certifications.
      </p>

      <p className="text-lg text-slate-300 leading-relaxed">
        My goal is to merge analytical thinking with creativity — building systems that empower people.
      </p>

      <p className="italic text-lg text-slate-300 border-l-4 border-emerald-500 pl-4">
        “Those who begin the journey will become the man they dreamt of being.”
      </p>
    </AccordionSection>
  );
}
