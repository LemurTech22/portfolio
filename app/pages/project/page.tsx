"use client";
import React, { useState, useRef } from 'react';
import { Github, ExternalLink, ChevronDown, Code, Database, Brain, Server } from 'lucide-react';
import Navbar from '@/app/components/navbar';
import Footer from '@/app/components/Footer';
import { AnimatedGradientText } from '@/app/components/animated-gradient-text';

// Define ProjectID type at the top level
type ProjectID = 
  | 'Medical'
  | 'Map Navigation'
  | 'Volunteer Management System'
  | 'Pneumonia'
  | 'Chevron'
  | 'Urban_Safety'
  | 'Energy_Forecasting'
  | 'Credit Card Fraud Detection'
  | 'Student GPA Prediction'
  | 'Library';

// Define project type
interface Project {
  id: ProjectID;
  title: string;
  category: string;
  categoryLabel: string;
  tagline: string;
  techStack: string[];
  image?: string;
  github: string;
  demo: string;
  details: {
    overview: string;
    challenge: string;
    technical: string;
    results: string;
    learned: string;
  };
}

export default function Projects() {
  const [expandedProjects, setExpandedProjects] = useState<Partial<Record<ProjectID, boolean>>>({});
  const accordionRef = useRef(null);

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

  function isProjectID(id: string): id is ProjectID {
    return [
      'Medical', 'Map Navigation', 'Volunteer Management System', 'Pneumonia', 
      'Chevron', 'Urban_Safety', 'Energy_Forecasting', 
      'Credit Card Fraud Detection', 'Student GPA Prediction', 'Library'
    ].includes(id);
  }

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

  // Properly typed projects array
  const projects: Project[] = [
    { 
      id: 'Medical' as ProjectID,
      title: 'Something Medical',
      category: 'indevelopment',
      categoryLabel: 'Full Stack',
      tagline: 'Brief one-line description of the project',
      techStack: ['React', 'Next.js', 'FastAPI', 'In Development'],
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
      id: 'Map Navigation' as ProjectID,
      title: 'Map Navigation',
      category: 'indevelopment',
      categoryLabel: 'Full Stack',
      tagline: 'A Map Navigation app that helps users find and coordinate meeting spots based on real-time distances from their current locations.',
      techStack: ['Next.js', 'TailwindCSS', 'FastAPI', 'In Development'],
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
      id: 'Volunteer Management System' as ProjectID,
      title: 'Volunteer Management System',
      category: 'indevelopment',
      categoryLabel: 'Full Stack',
      tagline: 'A Volunteer Management app that lets users organize, track, and manage volunteers and events efficiently.',
      techStack: ['React', 'Next.js', 'FastAPI', 'PostgreSQL', 'In Development'],
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
      id: 'Pneumonia' as ProjectID,
      title: 'Disease Analysis',
      category: 'datascience',
      categoryLabel: 'Data Science',
      tagline: 'A medical imaging project that uses object detection on X-rays to identify and diagnose pneumonia in patients.',
      techStack: ['Python', 'Pandas', 'Matplotlib', 'SQL', 'Tensorflow', 'Convolutional Neural Networks'],
      github: 'https://github.com/LemurTech22/Pneumonia-Project',
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
      id: 'Chevron' as ProjectID,
      title: 'Chevron Vehicle Prediction',
      category: 'datascience',
      categoryLabel: 'Data Science',
      tagline: 'A predictive analytics project from the Spring 2025 Rice Datathon with Chevron focused on modeling and forecasting future vehicle and fuel technology trends using machine learning.',
      techStack: ['Python', 'Pandas','Matplotlib', 'Seaborn', 'Scikit-Learn', 'Pycaret'],
      github: 'https://github.com/LemurTech22/Chevron-Vehicle-Prediction',
      demo: '/pages/project',
      details: {
        overview: 'We analyzed a dataset of 41,000 vehicle records, focusing on categorical features like fuel type, vehicle category, and fuel technology, with the goal of predicting vehicle and fuel types and estimating future population sizes. To handle missing values, we applied imputation instead of dropping data, and used label encoding to convert categorical features for machine learning. Non-linear patterns in the data led us to apply logarithmic transformations, improving scaling, reducing redundancy, and mitigating overfitting. Using PyCaret to test multiple models, Random Forest emerged as the best performer, achieving 98% R² for regression and 89% accuracy for classification. Our streamlined pipeline, including imputation, robust scaling, and training, ensured reproducibility and efficiency. We are now fine-tuning models for time-based predictions and exploring interactive ways to visualize and share trends in vehicle categories and fuel technologies.',
        challenge: 'As new sources of fuel emerge for vehicles, what types of fuel can we expect to see in the future? With the rapid rise of electric vehicles, will gasoline and diesel engines eventually become obsolete?',
        technical: 'Missing Values: Implemented imputation techniques instead of dropping rows to preserve data. Converted to numerical values using label encoding. Non-linear Patterns: Visualizations (box plots, KDE plots) and correlation testing revealed non-linear relationships. Logarithmic transformations were applied to features to improve scaling, reduce redundancy, and mitigate overfitting. Modeling Process Used PyCaret to test and compare multiple machine learning algorithms quickly. Built a streamlined pipeline including: Imputation Scaling using RobustScaler (resilient to outliers).Focused on Random Forest models, which were the best performers for both regression and classification tasks.',
        results: 'So far, our models have performed well in training Regression: 98% R² score.Classification: 89% accuracy. Further testing to fine tune the model.',
        learned: 'Currently in progress'
      }
    },
    {
      id: 'Urban_Safety' as ProjectID,
      title: 'Urban Safety Project',
      category: 'datavisual',
      categoryLabel: 'Data Visualization',
      tagline: 'An interactive data visualization project that analyzes and maps vehicle accident patterns to promote public safety and inform data-driven urban planning decisions.',
      techStack: ['Python', 'pandas','Matplotlib', 'Seaborn', 'Scikit-Learn', 'Folium'],
      github: 'https://github.com/LemurTech22/Urban-Safety-Project',
      demo: '/pages/project',
      details: {
        overview: 'The Urban Safety Insights project is an interactive data visualization platform designed to identify areas with high concentrations of vehicle accidents, including intersections, highways, regions affected by severe weather, and incidents involving impaired driving. Using a comprehensive dataset from the State of Maryland, we cleaned and standardized over 38 features, removed irrelevant metadata, and addressed inconsistencies in categorical values. Leveraging Python, Pandas, Matplotlib, Seaborn, Scikit-Learn, and Folium, we applied unsupervised learning techniques, experimenting with KMeans and DBSCAN clustering to detect accident hotspots. DBSCAN proved most effective, dynamically identifying dense clusters while handling outliers, which were then plotted on interactive Folium maps for clear spatial visualization. This approach aims to raise public awareness, inform infrastructure improvements, and support proactive safety measures to reduce accidents and enhance urban safety planning.',
        challenge: 'The Urban Safety Insights project aims to identify accident hotspots and uncover patterns in vehicle collisions to support safer driving, inform infrastructure improvements, and guide data-driven urban planning. By visualizing high-risk areas interactively, it helps reduce accidents and enhance public safety.',
        technical: 'The project leveraged Python, Pandas, Matplotlib, Seaborn, Scikit-Learn, and Folium to clean, standardize, and analyze a complex accident dataset with 38 features. After removing irrelevant metadata and handling missing values, categorical inconsistencies were resolved through mapping dictionaries. Unsupervised learning methods were applied to detect accident hotspots, with KMeans initially tested but ultimately replaced by DBSCAN due to its ability to handle spatial irregularities and outliers without a predefined number of clusters. The resulting clusters were visualized interactively using Folium, plotting precise accident locations and density-based clusters for intuitive exploration.',
        results: 'This approach successfully highlighted high-risk zones, providing actionable insights for public safety, infrastructure planning, and proactive accident prevention.',
        learned: 'I learned about Data Engineering and Cleaning up missing and insconsistent values. Additionally, i learned how to apply clustering algorithms and use the foilum API to generate the interactive map.'
      }
    },
    {
      id: 'Energy_Forecasting' as ProjectID,
      title: 'SmartWatts Energy Forecast',
      category: 'datascience',
      categoryLabel: 'Data Science',
      tagline: 'A deep learning project with SmartWatts that models and forecasts residential energy consumption using RNN, LSTM, and GRU architectures on two years of smart meter and weather data.',
      techStack: ['Python', 'Excel', 'Matplotlib', 'Tensorflow','Seaborn', 'Data Engineering'],
      github: 'https://github.com/LemurTech22/COSC-4368-SmartWatt-',
      demo: '/pages/project',
      details: {
        overview: 'This project, completed in collaboration with SmartWatts, analyzed two years of residential energy usage data, totaling approximately 900,000 records collected at 15-minute intervals. The goal was to explore consumption patterns, generate insights, and develop models to forecast future energy demand. A key hypothesis was that temperature significantly influences energy use, particularly during extreme heat events in Texas, prompting integration of historical weather data via the Meteostat API.',
        challenge: 'In collaboration with a Startup Company named SmartWatts. Our Team goal is to provide insights into their data and provide a actionable solution to present to the company. Our goal was to forecast energy usage with respect to temperature within a 1 month time period.',
        technical: 'The data was first preprocessed by removing irrelevant features, handling missing values, and scaling to account for outliers. Individual user energy profiles were isolated to train models while testing generalization across different households. Time-series data was prepared to incorporate both energy usage and temperature, which enabled accurate sequential modeling. We trained and evaluated three deep learning architectures—Recurrent Neural Networks (RNNs), Long Short-Term Memory (LSTM), and Gated Recurrent Units (GRU)—to forecast energy consumption. Model performance was validated by holding out a full month of data and comparing predictions to actual readings, with confidence intervals applied to assess the reliability of the forecasts.',
        results: 'The LSTM model outperformed the others, achieving 97% accuracy in predicting energy consumption, while forecasts for held-out data matched actual values at approximately 95%. Analysis confirmed that temperature is a primary driver of energy demand, particularly during periods of extreme heat. The project\'s modeling pipeline provides reliable forecasts at the individual household level, enabling SmartWatts to optimize energy planning, anticipate peak demand, and inform proactive strategies for managing residential energy usage.',
        learned: 'Key takeaways and lessons learned from this project...'
      }
    },
    {
      id: 'Credit Card Fraud Detection' as ProjectID,
      title: 'Credit Card Fraud Detection',
      category: 'datascience',
      categoryLabel: 'Data Science',
      tagline: 'A machine learning project in R that detects fraudulent transactions using SVM and KNN models with data cleaning, visualization, and performance evaluation.',
      techStack: ['R', 'Tidyverse', 'corrplot', 'Machine Learning'],
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
      id: 'Student GPA Prediction' as ProjectID,
      title: 'Student GPA Prediction',
      category: 'datascience',
      categoryLabel: 'Machine Learning',
      tagline: 'A data-driven study analyzing how college students\' sleep habits influence academic performance using regression and neural network models to predict GPA and identify key sleep-related predictors of success.',
      techStack: ['R', 'TidyVerse', 'Data Visualization', 'Data Engineering'],
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
      id: 'Library' as ProjectID,
      title: 'Library Management System',
      category: 'fullstack',
      categoryLabel: 'Full Stack',
      tagline: 'A comprehensive library management system that enables students, faculty, and admins to borrow, track, and manage diverse items with unique IDs, borrowing limits, durations, fines, and hold requests through a unified web application.',
      techStack: ['React', 'TailwindCSS','Node.js', 'MySQL'],
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
        learn_more_button: 'bg-orange-600 hover:bg-slate-700',
      };
      default: return {
        border: 'border-slate-600/50',
        text: 'text-slate-400',
        bg: 'bg-slate-500/20',
        button: 'bg-slate-600 hover:bg-slate-700',
        learn_more_button: 'bg-slate-600 hover:bg-slate-700',
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
          <AnimatedGradientText 
            as="h1" 
            className="text-5xl sm:text-6xl md:text-7xl bg-gradient-to-r font-bold mb-6 from-emerald-400 via-cyan-400 to-purple-400 text-transparent"
          >
            My Projects
          </AnimatedGradientText>
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
                  className={`group relative bg-slate-900/40 backdrop-blur-sm rounded-xl border-2 ${color.border} overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl`}
                >
                  {/* Project Image/Icon */}
                  <div className={`h-48 bg-gradient-to-br ${color.border} flex items-center justify-center text-6xl`}>
                    {project.image}
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
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