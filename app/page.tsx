"use client";
import React, { useState } from 'react';
import Link from 'next/link'
import { Menu, X, Github, Linkedin, Mail, ExternalLink, Code, Briefcase, User, MessageSquare } from 'lucide-react';
import Navbar from "./components/navbar"
import Footer from '@/app/components/Footer';

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const projects = [
    {
      title: "Energy Forecasting (Currently Reworking)",
      description: "A deep learning project in collaboration with Startup SmartWatts that uses residential energy data and weather information to model and forecast energy consumption patterns.",
      tech: ["Python", "Tableau", "Tensorflow", "Forecasting"],
      link: "./pages/project#project-Energy_Forecasting"
    },
    {
      title: "Library Management System",
      description: "ML-powered application that generates marketing content using natural language processing.",
      tech: ["Node.Js", "React", "TypeScript", "MySQL", ],
      link: "/pages/project#project-Library"
    },
    {
      title: "Urban Safety Project",
      description: "An interactive data visualization project designed to identify and analyze vehicle accident hotspots, helping raise public awareness and guide infrastructure improvements for safer urban environments.",
      tech: ["Python", "Pandas", "Folium", "Seaborn"],
      link: "/pages/project#project-Urban_Safety"
    }
  ];

  const skills = [
    { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
    { category: "Backend", items: ["Python", "SQL", "FastAPI", "Node.JS"] },    
    { category: "Data Science", items: ["Python", "Pandas", "Scikit-Learn", "PySpark", "TensorFlow", "PyCaret", "Tableau", "Power BI", "Excel", "Julia"] },    
    { category: "Tools", items: ["Git", "Docker", "AWS", "Jenkins", "VS Code", "Postman", "Jupyter Notebook", "Google Colab"] },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[var(--midnight)] via-[var(--brand)] to-[var(--midnight)] text-[var(--accent)] overflow-hidden">
      {/* Particle overlay */}
      
      <div className="absolute inset-0 z-0 animate-particles pointer-events-none" />

      {/* Glowing floating blobs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-brand/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      {/*Navigation*/}
      <Navbar/>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-emerald-500 to-purple-300 bg-clip-text text-transparent">
              Hi, I'm Jose Conde
            </h1>
            <p className="text-xl sm:text-2xl text-slate-300 mb-8">
              Full Stack Developer & Data Scientist
            </p>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-12">
              I build exceptional digital experiences that combine beautiful design with powerful functionality.
            </p>
          </div>
        </div>
      </section>
      {/* About Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <User className="text-emerald-300" size={32} />
            <h2 className="text-4xl font-bold">About Me</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                I'm a passionate developer with 5+ years of experience building web applications. 
                I specialize in creating scalable, user-friendly solutions that solve real-world problems.
              </p>
              <p className="text-slate-300 text-lg leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
                projects, or sharing knowledge with the developer community.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-accent">Skills & Technologies</h3>
              <div className="space-y-4">
                {skills.map((skillGroup) => (
                  <div key={skillGroup.category}>
                    <h4 className="font-semibold text-slate-300 mb-2">{skillGroup.category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill) => (
                        <span
                          key={skill}
                          className="bg-slate-900 text-gray-300 px-3 py-1 rounded-full text-sm hover:bg-accent hover:text-white transition-colors cursor-default"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
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
              <div className="flex justify-center gap-4 flex-wrap">
                <Link href='pages/project'>
                  <button className="border-2 border-purple-700   text-emerald-500 hover:bg-purple-700 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all">
                    View My Work
                  </button>
                </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer/>
    </div>
  );
}