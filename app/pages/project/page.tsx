"use client";
import React, { useState, useRef } from 'react';
import {Navbar, Footer, HeroSection, ProjectsGallery,ProjectDeepDives,projects,ProjectID, isProjectID} from '@/app/components/ProjectComponents/index'

export default function Projects() {
  const [expandedProjects, setExpandedProjects] = useState<Partial<Record<ProjectID, boolean>>>({});
  const accordionRef = useRef<HTMLElement>(null);

  const toggleProject = (projectId: ProjectID) => {
    setExpandedProjects(prev => ({
      ...prev,
      [projectId]: !prev[projectId],
    }));
  };

  const scrollToProject = (projectId: ProjectID) => {
    toggleProject(projectId);
    setTimeout(() => {
      const element = document.getElementById(`project-${projectId}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  React.useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const rawId = hash.replace('#project-', '');
      if (isProjectID(rawId)) {
        const projectId = rawId;

        setExpandedProjects(prev => ({
          ...prev,
          [projectId]: true,
        }));

        setTimeout(() => {
          const element = document.getElementById(`project-${projectId}`);
          if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 text-slate-100 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 z-0 animate-particles pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <Navbar/>

      {/* Hero Section */}
      <HeroSection/>
      <ProjectsGallery 
        projects={projects} 
        onLearnMore={scrollToProject} 
      />
      
      <ProjectDeepDives
        projects={projects}
        expandedProjects={expandedProjects}
        onToggle={toggleProject}
        accordionRef={accordionRef}
      />

      <Footer/>
    </div>
  );
}