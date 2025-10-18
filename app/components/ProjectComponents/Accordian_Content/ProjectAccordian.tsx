"use client";
import {Project, ProjectID, getCategoryColor, getCategoryIcon} from "../index"
import {React, ChevronDown, Github, ExternalLink} from "@/app/resources_index"

interface ProjectAccordionProps {
  project: Project;
  isExpanded: boolean;
  onToggle: (projectId: ProjectID) => void;
}

export const ProjectAccordion: React.FC<ProjectAccordionProps> = ({ 
  project, 
  isExpanded, 
  onToggle 
}) => {
  const color = getCategoryColor(project.category);

  return (
    <div
      id={`project-${project.id}`}
      className={`border-2 ${color.border} rounded-lg overflow-hidden bg-slate-900/30 backdrop-blur-sm scroll-mt-24`}
    >
      {/* Accordion Header */}
      <button
        onClick={() => onToggle(project.id)}
        className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-slate-800/50 transition-colors"
      >
        <div className="flex items-center gap-4">
          <span className={color.text}>
            {getCategoryIcon(project.category)}
          </span>
          <div>
            <h3 className={`text-2xl font-bold ${color.text}`}>
              {project.title}
            </h3>
            <p className="text-slate-400 text-sm mt-1">
              {project.categoryLabel}
            </p>
          </div>
        </div>
        <ChevronDown
          className={`${color.text} transition-transform duration-300 ${
            isExpanded ? 'rotate-180' : ''
          }`}
          size={28}
        />
      </button>

      {/* Accordion Content */}
      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          isExpanded ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pb-6 space-y-8">
          {/* Overview */}
          <div>
            <h4 className={`text-xl font-semibold ${color.text} mb-3`}>
              📋 Project Overview
            </h4>
            <p className="text-lg text-slate-300 leading-relaxed">
              {project.details.overview}
            </p>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className={`text-xl font-semibold ${color.text} mb-3`}>
              🛠️ Tech Stack
            </h4>
            <div className="flex flex-wrap gap-3">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className={`px-4 py-2 text-sm font-medium ${color.bg} ${color.text} rounded-lg border ${color.border}`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Challenge */}
          <div>
            <h4 className={`text-xl font-semibold ${color.text} mb-3`}>
              🎯 The Challenge
            </h4>
            <p className="text-lg text-slate-300 leading-relaxed">
              {project.details.challenge}
            </p>
          </div>

          {/* Technical Approach */}
          <div>
            <h4 className={`text-xl font-semibold ${color.text} mb-3`}>
              ⚙️ Technical Approach
            </h4>
            <p className="text-lg text-slate-300 leading-relaxed">
              {project.details.technical}
            </p>
          </div>

          {/* Results */}
          <div>
            <h4 className={`text-xl font-semibold ${color.text} mb-3`}>
              📊 Results & Impact
            </h4>
            <p className="text-lg text-slate-300 leading-relaxed">
              {project.details.results}
            </p>
          </div>

          {/* Lessons Learned */}
          <div>
            <h4 className={`text-xl font-semibold ${color.text} mb-3`}>
              💡 Key Learnings
            </h4>
            <p className="text-lg text-slate-300 leading-relaxed">
              {project.details.learned}
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-4 pt-4 border-t border-slate-700">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 px-6 py-3 ${color.button} rounded-lg font-semibold transition-all`}
            >
              <Github size={20} />
              View on GitHub
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-slate-700 hover:bg-slate-600 rounded-lg font-semibold transition-all"
            >
              <ExternalLink size={20} />
              Live Demo (Currently in Development)
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};