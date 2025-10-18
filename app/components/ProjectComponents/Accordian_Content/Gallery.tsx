import React from 'react';
import {Project, ProjectID, ProjectCard} from "../index"

interface ProjectsGalleryProps {
  projects: Project[];
  onLearnMore: (projectId: ProjectID) => void;
}

export const ProjectsGallery: React.FC<ProjectsGalleryProps> = ({ 
  projects, 
  onLearnMore 
}) => {
  return (
    <section className="relative z-10 px-4 sm:px-6 lg:px-8 pb-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onLearnMore={onLearnMore}
            />
          ))}
        </div>
      </div>
    </section>
  );
};