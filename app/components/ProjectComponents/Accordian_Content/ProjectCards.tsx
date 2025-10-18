import React from 'react'
import { Github } from 'lucide-react'
import { Project, ProjectID, getCategoryIcon, getCategoryColor} from "../index"
interface ProjectProps{
    project: Project;
    onLearnMore: (projectID: ProjectID) => void
}

export const ProjectCard: React.FC<ProjectProps> = ({ project, onLearnMore }) => {
  const color = getCategoryColor(project.category);

  return (
    <div
      className={`group relative bg-slate-900/40 backdrop-blur-sm rounded-xl border-2 ${color.border} overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl`}
    >
      {/* Project Image/Icon */}
      <div className={`h-48 bg-gradient-to-br ${color.border} flex items-center justify-center text-6xl`}>
        {project.image}
      </div>

      {/* Card Content */}
      <div className="p-6 flex flex-col h-fit flex-grow">
        {/* Category Badge */}
        <div className="flex items-center gap-2 mb-3">
          <span className={color.text}>
            {getCategoryIcon(project.category)}
          </span>
          <span className={`text-sm font-semibold ${color.text} uppercase tracking-wider`}>
            {project.categoryLabel}
          </span>
        </div>

        {/* Title & Tagline */}
        <h3 className="text-2xl font-bold mb-2 text-white">
          {project.title}
        </h3>
        <p className="text-slate-300 mb-4">
          {project.tagline}
        </p>

        {/* Tech Stack */}
        <div className="flex text-slate-100 flex-wrap gap-2 mb-6">
          {project.techStack.map((tech, idx) => (
            <span
              key={idx}
              className={`px-3 py-1 text-xs font-medium ${color.bg} rounded-full border ${color.border}`}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-auto">
          <button
            onClick={() => onLearnMore(project.id)}
            className={`flex-1 ${color.learn_more_button} hover:scale-105 text-white px-4 py-2 rounded-lg font-semibold transition-all`}
          >
            Learn More
          </button>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-slate-700 hover:bg-slate-600 hover:scale-125 rounded-lg transition-all"
          >
            <Github size={18} />
          </a>
        {/*<a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-slate-700 hover:bg-blue-800 hover:scale-125 rounded-lg transition-all"
          >
            <ExternalLink size={20} />
            </a>
        */}
        </div>
      </div>
    </div>
  );
}