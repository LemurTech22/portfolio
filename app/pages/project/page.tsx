"use client";
import React, { useState, useRef } from 'react';
import { Github, ExternalLink, ChevronDown, Code, Database, Brain, Server, ArrowUp, Linkedin, Mail, MessageSquare } from 'lucide-react';
import Navbar from '@/app/components/navbar';
import Footer from '@/app/components/Footer';


export default function Projects() {
  const [expandedProjects, setExpandedProjects] = useState({});
  const [showScrollTop, setShowScrollTop] = useState(false);
  const accordionRef = useRef(null);

  const toggleProject = (projectId: string) => {
    setExpandedProjects(prev => ({
      ...prev,
      [projectId]: !prev[projectId]
    }));
  };

  const scrollToProject = (projectId: string) => {
    toggleProject(projectId);
    setTimeout(() => {
      const element = document.getElementById(`project-${projectId}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  // Add this useEffect in your Projects component
    React.useEffect(() => {
      // Check if there's a hash in the URL
      const hash = window.location.hash;
      if (hash) {
        const projectId = hash.replace('#project-', '');
        
        // Wait a bit for the page to render
        setTimeout(() => {
          // Auto-expand the accordion
          setExpandedProjects(prev => ({
            ...prev,
            [projectId]: true
          }));
          
          // Scroll to the project
          const element = document.getElementById(`project-${projectId}`);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      }
    }, []);

  const projects = [
    { id: 'Medical',
      title: 'Something Medical',
      category: 'indevelopment',
      categoryLabel: 'Full Stack',
      tagline: 'Brief one-line description of the project',
      techStack: ['React', 'Next.js', 'FastAPI', 'In Development'],
      image: '🚀', // Replace with actual image URL later
      github: '/pages/project',
      demo: '/pages/project',
      details: {
        overview: 'Detailed overview of what this project does and why it was built...',
        challenge: 'The main problem or challenge this project addressed...',
        technical: 'Technical architecture and implementation details...',
        results: 'Results, metrics, and impact of the project...',
        learned: 'Key takeaways and lessons learned from this project...'
      }
    },

    { id: 'Map Navigation',
      title: 'Map Navigation',
      category: 'indevelopment',
      categoryLabel: 'Full Stack',
      tagline: 'Brief one-line description of the project',
      techStack: ['React', 'Next.js', 'FastAPI', 'In Development'],
      image: '🚀', // Replace with actual image URL later
      github: '/pages/project',
      demo: '/pages/project',
      details: {
        overview: 'Detailed overview of what this project does and why it was built...',
        challenge: 'The main problem or challenge this project addressed...',
        technical: 'Technical architecture and implementation details...',
        results: 'Results, metrics, and impact of the project...',
        learned: 'Key takeaways and lessons learned from this project...'
      }
    },
        
    {
      id: 'Volunteer Management System',
      title: 'Volunteer Management System',
      category: 'indevelopment',
      categoryLabel: 'Full Stack',
      tagline: 'Brief one-line description of the project',
      techStack: ['React', 'Next.js', 'FastAPI', 'PostgreSQL', 'In Development'],
      image: '🚀', // Replace with actual image URL later
      github: '#',
      demo: '/pages/project',
      details: {
        overview: 'Detailed overview of what this project does and why it was built...',
        challenge: 'The main problem or challenge this project addressed...',
        technical: 'Technical architecture and implementation details...',
        results: 'Results, metrics, and impact of the project...',
        learned: 'Key takeaways and lessons learned from this project...'
      }
    },
    {
      id: 'Pneumonia',
      title: 'Pneumonia Detection',
      category: 'datascience',
      categoryLabel: 'Data Science',
      tagline: 'Brief one-line description of the project',
      techStack: ['Python', 'Pandas', 'Matplotlib', 'SQL'],
      image: '📊',
      github: '/pages/project',
      demo: '#',
      details: {
        overview: 'Detailed overview of what this project does and why it was built...',
        challenge: 'The main problem or challenge this project addressed...',
        technical: 'Technical architecture and implementation details...',
        results: 'Results, metrics, and impact of the project...',
        learned: 'Key takeaways and lessons learned from this project...'
      }
    },
    {
      id: 'Chevron',
      title: 'Chevron Vehicle Prediction',
      category: 'datascience',
      categoryLabel: 'Data Science',
      tagline: 'Brief one-line description of the project',
      techStack: ['Python', 'Pandas', 'Matplotlib', 'SQL'],
      image: '📊',
      github: 'https://github.com/LemurTech22/Chevron-Vehicle-Prediction',
      demo: '/pages/project',
      details: {
        overview: 'Detailed overview of what this project does and why it was built...',
        challenge: 'The main problem or challenge this project addressed...',
        technical: 'Technical architecture and implementation details...',
        results: 'Results, metrics, and impact of the project...',
        learned: 'Key takeaways and lessons learned from this project...'
      }
    },
    {
      id: 'Urban_Safety',
      title: 'Urban Safety Project',
      category: 'datavisual',
      categoryLabel: 'Data Visualization',
      tagline: 'Brief one-line description of the project',
      techStack: ['TensorFlow', 'Python', 'Scikit-learn', 'Keras'],
      image: '🤖',
      github: 'https://github.com/LemurTech22/Urban-Safety-Project',
      demo: '/pages/project',
      details: {
        overview: 'Detailed overview of what this project does and why it was built...',
        challenge: 'The main problem or challenge this project addressed...',
        technical: 'Technical architecture and implementation details...',
        results: 'Results, metrics, and impact of the project...',
        learned: 'Key takeaways and lessons learned from this project...'
      }
    },
    {
      id: 'Energy_Forecasting',
      title: 'SmartWatts Energy Forecast',
      category: 'datascience',
      categoryLabel: 'Full Stack',
      tagline: 'Brief one-line description of the project',
      techStack: ['FastAPI', 'React', 'MongoDB', 'Docker'],
      image: '⚡',
      github: 'https://github.com/LemurTech22/COSC-4368-SmartWatt-',
      demo: '/pages/project',
      details: {
        overview: 'Detailed overview of what this project does and why it was built...',
        challenge: 'The main problem or challenge this project addressed...',
        technical: 'Technical architecture and implementation details...',
        results: 'Results, metrics, and impact of the project...',
        learned: 'Key takeaways and lessons learned from this project...'
      }
    },
    {
      id: 'Credit Card Fraud Detection',
      title: 'Credit Card Fraud Detection',
      category: 'datascience',
      categoryLabel: 'Data Science',
      tagline: 'Brief one-line description of the project',
      techStack: ['Python', 'NumPy', 'Seaborn', 'Jupyter'],
      image: '📈',
      github: 'https://github.com/LemurTech22/MATH-4323-Statisical-Learning/tree/main/Project',
      demo: '/pages/project',
      details: {
        overview: 'Detailed overview of what this project does and why it was built...',
        challenge: 'The main problem or challenge this project addressed...',
        technical: 'Technical architecture and implementation details...',
        results: 'Results, metrics, and impact of the project...',
        learned: 'Key takeaways and lessons learned from this project...'
      }
    },
    {
      id: 'Student GPA Prediction',
      title: 'Student GPA Prediction',
      category: 'datascience',
      categoryLabel: 'Machine Learning',
      tagline: 'Brief one-line description of the project',
      techStack: ['PyTorch', 'Python', 'CUDA', 'OpenCV'],
      image: '🧠',
      github: 'https://github.com/LemurTech22/Math_4322_Project',
      demo: '/pages/project',
      details: {
        overview: 'Detailed overview of what this project does and why it was built...',
        challenge: 'The main problem or challenge this project addressed...',
        technical: 'Technical architecture and implementation details...',
        results: 'Results, metrics, and impact of the project...',
        learned: 'Key takeaways and lessons learned from this project...'
        }
      },
      {
      id: 'Library',
      title: 'Library Management System',
      category: 'fullstack',
      categoryLabel: 'Full Stack',
      tagline: 'Brief one-line description of the project',
      techStack: ['PyTorch', 'Python', 'CUDA', 'OpenCV'],
      image: '🧠',
      github: 'https://github.com/nikkobaez/library-server/tree/nikko',
      demo: '/pages/project',
      details: {
        overview: 'Detailed overview of what this project does and why it was built...',
        challenge: 'The main problem or challenge this project addressed...',
        technical: 'Technical architecture and implementation details...',
        results: 'Results, metrics, and impact of the project...',
        learned: 'Key takeaways and lessons learned from this project...'
      }
    }
  ];

  const getCategoryColor = (category: string) => {
    switch(category) {
      case 'fullstack': return {
        border: 'border-purple-600/50',
        text: 'text-purple-400',
        bg: 'bg-purple-500/20',
        button: 'bg-purple-600 hover:bg-purple-700',
        //maybe fix?
        learn_more_button: 'bg-purple-600 hover:bg-slate-700',
      };
      case 'datascience': return {
        border: 'border-emerald-600/50',
        text: 'text-emerald-400',
        bg: 'bg-emerald-500/20',
        button: 'bg-emerald-600 hover:bg-emerald-700',
        learn_more_button: 'bg-emerald-600 hover:bg-slate-700',

      };
      case 'datavisual': return {
        border: 'border-blue-600/50',
        text: 'text-blue-400',
        bg: 'bg-blue-500/20',
        button: 'bg-blue-600 hover:bg-blue-700',
        learn_more_button: 'bg-blue-600 hover:bg-slate-700',

      };
      case 'indevelopment': return {
        border: 'border-orange-600/50',
        text: 'text-orange-400',
        bg: 'bg-orange-500/20',
        button: 'bg-orange-600 hover:bg-orange-800',
        //maybe fix?
        learn_more_button: 'bg-orange-600 hover:bg-slate-700',
      };
      default: return {
        border: 'border-slate-600/50',
        text: 'text-slate-400',
        bg: 'bg-slate-500/20',
        button: 'bg-slate-600 hover:bg-slate-700'
         
      };
    }
  };


  const getCategoryIcon = (category: string) => {
    switch(category) {
      case 'fullstack': return <Code size={20} />;
      case 'datascience': return <Database size={20} />;
      case 'datavisual': return <Brain size={20} />;
      
      default: return <Server size={20} />;
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 text-slate-100 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 z-0 animate-particles pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <Navbar/>
      {/* Hero Section */}
      <section className="relative z-10 pt-32 px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-purple-400 bg-clip-text text-transparent">
            My Projects
          </h1>
          <p className="text-xl sm:text-2xl text-slate-300 mb-4">
            A showcase of my work in Full Stack Development, Data Science & Machine Learning
          </p>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto">
            Click on any project card below to dive deep into the technical details, challenges, and solutions.
          </p>
        </div>
      </section>

      {/* Project Cards Gallery */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => {
              const color = getCategoryColor(project.category);
              return (
                <div
                  key={project.id}
                  className={`group relative bg-slate-900/40 backdrop-blur-sm rounded-xl border-2 ${color.border} overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-${color.button}`}
                >
                  {/* Project Image/Icon */}
                  <div className={`h-48 bg-gradient-to-br ${color.border} to-${color.bg} flex items-center justify-center text-6xl`}>
                    {project.image}
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    {/* Category Badge */}
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`text-${color}-400`}>
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
                    <div className="flex gap-3">
                      <button
                        onClick={() => scrollToProject(project.id)}
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
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 bg-slate-700 hover:bg-blue-800 hover:scale-125 rounded-lg transition-all"
                      >
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Detailed Accordion Section */}
      <section ref={accordionRef} className="relative z-10 px-4 sm:px-6 lg:px-8 py-20 bg-slate-950/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-purple-400 bg-clip-text text-transparent">
              Project Deep Dives
            </h2>
            <p className="text-slate-400 text-lg">
              Explore the technical details, challenges, and solutions for each project
            </p>
          </div>

          <div className="space-y-6">
            {projects.map((project) => {
              const color = getCategoryColor(project.category);
              return (
                <div
                  key={project.id}
                  id={`project-${project.id}`}
                  className={`border-2 ${color.border} rounded-lg overflow-hidden bg-slate-900/30 backdrop-blur-sm scroll-mt-24`}
                >
                  {/* Accordion Header */}
                  <button
                    onClick={() => toggleProject(project.id)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-slate-800/50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <span className={`text-${color}-400`}>
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
                        expandedProjects[project.id] ? 'rotate-180' : ''
                      }`}
                      size={28}
                    />
                  </button>

                  {/* Accordion Content */}
                  <div
                    className={`transition-all duration-500 ease-in-out overflow-hidden ${
                      expandedProjects[project.id] ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'
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
                        {/* Add code snippets here later */}
                        <div className="mt-4 p-4 bg-slate-950/50 rounded-lg border border-slate-700">
                          <code className="text-emerald-400 text-sm">
                            // Code snippet placeholder - add your implementation details here
                          </code>
                        </div>
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
            })}
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}