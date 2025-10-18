"use client";
import {React, ChevronDown} from "@/app/resources_index"
interface AccordionSectionProps {
  title: string;
  color: "emerald" | "amber" | "purple" | "blue";
  expanded: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}

export default function AccordionSection({
  title,
  color,
  expanded,
  onToggle,
  children,
}: AccordionSectionProps) {
  const borderClass = {
    emerald: "border-emerald-600/50 text-emerald-400",
    amber: "border-amber-600/50 text-amber-400",
    purple: "border-purple-600/50 text-purple-400",
    blue: "border-blue-600/50 text-blue-400",
  }[color];

  return (
    <div
      className={`border-2 ${borderClass.split(" ")[0]} rounded-lg overflow-hidden
                  bg-slate-900/30 backdrop-blur-sm shadow-[0_0_20px_rgba(0,0,0,0.3)] transition-all`}
    >
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-slate-800/50 transition-colors"
      >
        <h2 className={`text-2xl font-bold ${borderClass.split(" ")[1]}`}>
          {title}
        </h2>
        <ChevronDown
          className={`${borderClass.split(" ")[1]} transition-transform duration-300 ${
            expanded ? "rotate-180" : ""
          }`}
          size={28}
        />
      </button>

      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          expanded ? "max-h-[3000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-6 space-y-6">{children}</div>
      </div>
    </div>
  );
}
