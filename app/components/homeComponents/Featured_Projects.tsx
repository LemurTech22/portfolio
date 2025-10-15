'use client'
import Link from 'next/link'
import { ExternalLink, Code, Briefcase} from 'lucide-react';


export default function Featured_Projects()
    {
    interface featured_projects{
        title: string,
        description: string,
        tech: string[],
        link: string
    }

    const projects: featured_projects[]=[
    {
      title: "Energy Forecasting",
      description: "A deep learning project with Startup SmartWatts using residential energy and weather data to forecast energy consumption.",
      tech: ["Python", "Numpy", "TensorFlow", "Matplotlib"],
      link: "/pages/project#project-Energy_Forecasting",
    },
    {
      title: "Library Management System",
      description: "A comprehensive library management system that enables students, faculty, and admins to borrow, track, and manage diverse items with unique IDs, borrowing limits, durations, fines, and hold requests through a unified web application.",
      tech: ["Node.Js", "React", "Tailwind", "TypeScript", "MySQL" ],
      link: "/pages/project#project-Library"
    },
    {
      title: "Urban Safety Project",
      description: "An interactive data visualization project designed to identify and analyze vehicle accident hotspots, helping raise public awareness and guide infrastructure improvements for safer urban environments.",
      tech: ["Python", "Pandas", "Seaborn", "Folium"],
      link: "/pages/project#project-Urban_Safety"
    }
  ];

  return(
    <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <Briefcase className="text-emerald-400" size={32} />
            <h2 className="text-4xl font-bold">Featured Projects</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="rounded-lg p-6 hover:transform hover:scale-105 transition-all duration-300 border-2 border-slate-400 hover:border-emerald-500 cursor-pointer"
              >
                <div className="flex justify-between items-start mb-4">
                  <Code className="text-emerald-400" size={24} />
                  <a 
                    href={project.link} 
                    className="text-slate-400 hover:text-accent transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink className="hover:text-emerald-400" size={20} />
                  </a>
                </div>
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-slate-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-gray-900 px-2 py-1 rounded text-purple-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
              </div>
              
            ))}
              <div className="flex gap-4 flex-wrap">
                <Link href='pages/project'>
                  <button className="border-2 border-purple-700 justify-center text-emerald-500 hover:bg-purple-700 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all">
                    View My Work
                  </button>
                </Link>
            </div>
          </div>
        </div>
      </section>
    )
}
