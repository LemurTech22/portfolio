import AccordionSection from "@/app/components/AboutMeComponents/AccordionSection";

interface Props {
  expanded: boolean;
  onToggle: () => void;
}

export default function TechnicalExpertise({ expanded, onToggle }: Props) {
  return (
    <AccordionSection
      title="Technical Expertise"
      color="emerald"
      expanded={expanded}
      onToggle={onToggle}
    >
      <p className="text-lg text-slate-300 leading-relaxed">
        I specialize in <span className="text-emerald-400 font-semibold">Python, Pandas, TensorFlow, and SQL</span> for 
        data science and analytics, and <span className="text-purple-400 font-semibold">React, Next.js, TypeScript, Node.js, FastAPI</span> 
        on the software side.
      </p>
      <p className="text-lg text-slate-300 leading-relaxed">
        Whether I am designing APIs, visualizing large datasets, or deploying predictive models, 
        I build scalable, efficient, and user-friendly solutions.
      </p>
      <p className="text-lg text-slate-300 leading-relaxed">
        My experience includes projects for Chevron, startups, and government initiatives.
      </p>
    </AccordionSection>
  );
}
