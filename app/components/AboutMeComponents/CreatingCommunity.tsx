import AccordionSection from "@/app/components/AboutMeComponents/AccordionSection";

interface Props {
  expanded: boolean;
  onToggle: () => void;
}

export default function CreatingCommunity({expanded, onToggle}:Props){
    return (
        <AccordionSection
            title="Community"
            color="amber"
            expanded={expanded}
            onToggle={onToggle}
        >
        
        <p className="text-lg text-slate-300 leading-relaxed">
        At the University of Houston, I live by the motto <span className="text-amber-500 font-semibold">Get Involved</span>. 
        I strive to help others find their path through mentorship and leadership in AI-focused initiatives.
        </p>

      <p className="text-lg text-slate-300 leading-relaxed">
        As President of CougarAI, I lead a community where students explore artificial intelligence through workshops, 
        projects, and partnerships. It is where I discovered my own passion for AI.
      </p>

      <p className="text-lg text-slate-300 leading-relaxed">
        As a Coog Challengers Mentor, I guide first-generation students through academic and career challenges, helping 
        them build confidence and a sense of belonging.
      </p>
    </AccordionSection>
                    
    )
}