import React from 'react';
import { AnimatedGradientText } from '@/app/components/animated-gradient-text';
import { Project, ProjectID, ProjectAccordion} from '../index'

interface ProjectDeepDivesProps {
  projects: Project[];
  expandedProjects: Partial<Record<ProjectID, boolean>>;
  onToggle: (projectId: ProjectID) => void;
  accordionRef?: React.RefObject<HTMLElement | null>;
}

export const ProjectDeepDives: React.FC<ProjectDeepDivesProps> = ({ 
  projects, 
  expandedProjects, 
  onToggle,
  accordionRef 
}) => {
  return (
    <section 
      ref={accordionRef} 
      className="relative z-10 px-4 sm:px-6 lg:px-8 py-20 bg-slate-950/50"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <AnimatedGradientText 
            as='h2'
            className="text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-purple-400 bg-clip-text text-transparent"
          >
            Project Deep Dives
          </AnimatedGradientText>
          <p className="text-slate-400 text-lg">
            Explore the technical details, challenges, and solutions for each project
          </p>
        </div>

        <div className="space-y-6">
          {projects.map((project) => (
            <ProjectAccordion
              key={project.id}
              project={project}
              isExpanded={!!expandedProjects[project.id]}
              onToggle={onToggle}
            />
          ))}
        </div>
      </div>
    </section>
  );
};