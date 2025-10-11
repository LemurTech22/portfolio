"use client";
import React, { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, Code, Briefcase, User, MessageSquare, ChevronDown } from 'lucide-react';
import Navbar from "../../components/navbar"
import Link from "next/link" 


export default function About() {
  const [expandedSections, setExpandedSections] = useState({
    expertise: false,
    passion: false,
    journey: false
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[var(--midnight)] via-[var(--brand)] to-[var(--midnight)] text-[var(--accent)] overflow-hidden">
      {/* Particle overlay */}
      <div className="absolute inset-0 z-0 animate-particles pointer-events-none" />

      {/* Glowing floating blobs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      {/* Navigation */}
      <Navbar/>

      {/* Hero Section */}
      <section className="pt-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-emerald-500 to-purple-300 bg-clip-text text-transparent">
              Hi, I'm Jose Conde
            </h1>
            <p className="text-xl sm:text-2xl text-slate-300 mb-8">
              Full Stack Developer & Data Scientist
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="pt-16 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold">About Me</h2>
          </div>
          
          <p className="text-center text-lg text-slate-300 mb-12">
            Hi, I'm Jose Conde — a software developer and data scientist who loves creating technology that's both smart and meaningful.
            My work lives at the intersection of code, data, and design. I enjoy building full-stack applications that don't just look great, 
            but also think — powered by data-driven insights and machine learning models that solve real-world problems.
          </p>

          {/* Accordion Sections */}
          <div className="space-y-4">
            
            {/* Technical Expertise Section */}
            <div className="border-2 border-emerald-600/50 rounded-lg overflow-hidden bg-slate-900/30 backdrop-blur-sm">
              <button
                onClick={() => toggleSection('expertise')}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-slate-800/50 transition-colors"
              >
                <h2 className="text-2xl font-bold text-emerald-400">Technical Expertise</h2>
                <ChevronDown 
                  className={`text-emerald-400 transition-transform duration-300 ${expandedSections.expertise ? 'rotate-180' : ''}`} 
                  size={28} 
                />
              </button>
              
              <div 
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  expandedSections.expertise ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 space-y-6">
                  <p className="text-lg text-slate-300 leading-relaxed">
                    I specialize in <span className="text-emerald-400 font-semibold">Python, Pandas, TensorFlow, and SQL</span> for 
                    data science and analytics, and <span className="text-purple-400 font-semibold">React, Next.js, TypeScript, Node.js, 
                    FastAPI</span> on the software side.
                  </p>
                  
                  <p className="text-lg text-slate-300 leading-relaxed">
                    Whether I'm designing an API, visualizing large datasets, or deploying a predictive model, I specialize in creating 
                    actionable solutions that are efficient, scalable, and easy to use.
                  </p>

                  <p className="text-lg text-slate-300 leading-relaxed">
                    Developing projects for Chevron, startup companies, and helping the government, I am passionate about taking up any 
                    tasks for the opportunity to learn and develop not only as a developer but as a human being.
                  </p>
                </div>
              </div>
            </div>

            {/* Continuous Learning Section */}
            <div className="border-2 border-purple-600/50 rounded-lg overflow-hidden bg-slate-900/30 backdrop-blur-sm">
              <button
                onClick={() => toggleSection('journey')}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-slate-800/50 transition-colors"
              >
                <h2 className="text-2xl font-bold text-purple-400">My Journey & Philosophy</h2>
                <ChevronDown 
                  className={`text-purple-400 transition-transform duration-300 ${expandedSections.journey ? 'rotate-180' : ''}`} 
                  size={28} 
                />
              </button>
              
              <div 
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  expandedSections.journey ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 space-y-6">
                  <p className="text-lg text-slate-300 leading-relaxed">
                    I'm passionate about continuous learning — exploring everything from AI applications and data visualization to modern 
                    front-end frameworks and cloud integration.
                  </p>
                  
                    <p className="text-lg text-slate-300 leading-relaxed">
                    I currently hold 3 certifications:
                    </p>
                    <ul className="list-disc ml-12 mt-4 mb-4">
                        
                        <li className="mb-2">NVIDIA: Fundementals of Deep Learning</li>
                        <li className="mb-2">NVIDIA: Fundementals of Accelerated Computing with CUDA C/C++</li>
                        <li className="mb-2">HPEDSI (Known as Hewlett Packard Enterprise Data Science Institute): I currently hold 7 certifications regarding programming languages, like python, Julia, working with Terminal, Data Analysis, Data Retrieval, Machine & Deep Learning</li>
                    </ul> 
                 

                    <p className="text-lg text-slate-300 leading-relaxed">
                    Part of my next step in my career i am currently working on getting my AWS Cloud Practitioner, and COMPTIA A+ certifications.
                  </p>
                  
                  <p className="text-lg text-slate-300 leading-relaxed">
                    My goal is to keep pushing boundaries, merging analytical thinking with creative development to build tools that empower 
                    people and make systems smarter.
                  </p>

                  <p className="text-lg text-slate-300 leading-relaxed">
                    When I'm not coding, you'll usually find me brainstorming project ideas, reading about emerging tech, or collaborating 
                    with other developers on something innovative.
                  </p>

                  <p className="text-lg text-slate-300 leading-relaxed">
                    I believe great technology blends creativity, data, and precision — and I love being at the center of that intersection.
                  </p>

                  <p className="text-lg text-slate-300 leading-relaxed italic border-l-4 border-emerald-500 pl-4">
                    As a wise man once said, "Those who begin the journey will become the man they dreamt of being."
                  </p>
                </div>
              </div>
            </div>

            {/* Passion & Hobbies Section */}
            <div className="border-2 border-blue-600/50 rounded-lg overflow-hidden bg-slate-900/30 backdrop-blur-sm">
              <button
                onClick={() => toggleSection('passion')}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-slate-800/50 transition-colors"
              >
                <h2 className="text-2xl font-bold text-blue-400">Beyond the Code</h2>
                <ChevronDown 
                  className={`text-blue-400 transition-transform duration-300 ${expandedSections.passion ? 'rotate-180' : ''}`} 
                  size={28} 
                />
              </button>
              
              <div 
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  expandedSections.passion ? 'max-h-[3000px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-emerald-400 mb-3">🎵 Music Enthusiast</h3>
                    <p className="text-lg text-slate-300 leading-relaxed">
                      Besides my technical side, I am also a human being with hobbies and filled with fun facts! I love listening to music 
                      and my go-to musicians are <span className="text-purple-300">Tatsuro Yamashita</span> for City Pop, 
                      <span className="text-purple-300"> Last Dinosaurs</span> for Indie Music, and 
                      <span className="text-purple-300"> The Midnight</span> for summer techno feeling.
                    </p>
                    <p className="text-lg text-slate-300 leading-relaxed mt-3">
                      I am a jack of all trades, listening to various artists from different genres so picking my favorite is difficult for me. 
                      These musicians are some of my favorites — if you're interested in seeing my entire playlist, check out my{' '}
                      <a 
                        href="https://music.youtube.com/channel/UCs2pQxPEFax2uOvVHlgzU1g?si=bYVssop3kADv5wLQ" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-400 hover:text-emerald-300 underline font-semibold transition-colors"
                      >
                        YouTube Music playlist
                      </a>!
                    </p>
                    <p className="text-lg text-slate-300 leading-relaxed mt-3">
                      Additionally, I play Trumpet, Bass & 6 string guitar coming out of high school and I still keep these lovable skills 
                      in my musical journey!
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-emerald-400 mb-3">✈️ Travel & Culture</h3>
                    <p className="text-lg text-slate-300 leading-relaxed">
                      I enjoy traveling to new places beyond Texas. I've been to New York, Colorado & Mexico as part of my bucket list! 
                      Places I want to visit: Sweden, Spain, Japan, South Korea, Alaska, California & Venezuela to see the never-ending 
                      storm in Catatumbo. I want to explore the world, learn about different cultures, and gain exposure from people with 
                      various backgrounds!
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-emerald-400 mb-3">🖥️ PC Building</h3>
                    <p className="text-lg text-slate-300 leading-relaxed">
                      I am also a custom PC builder. I built my first PC in 2020, learning to pick up a crafty skill installing components 
                      where attention to detail is important. I offer my services to people who wish to need assistance in repairing their systems. My current set up is 
                    </p>
                    <ul className="list-disc ml-12 mt-4 mb-4">
                        
                        <li className="mb-2">CPU: Ryzen 3600 6 Core 12 Thread (Currently looking for an upgrade)</li>
                        <li className="mb-2">GPU: MSI 306ti 8gb</li>
                        <li className="mb-2">RAM: 16GB DDR4 G.Skills Trident Z 3200mhz</li>
                        <li className="mb-2">Storage: 1TB SSD, 6 TB HDD</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-emerald-400 mb-3">🏎️ Automotive Passion</h3>
                    <p className="text-lg text-slate-300 leading-relaxed">
                      Lastly, I am a gear-head, learning about the inner workings of cars, modifying and restoring them to their former glory.
                    </p>
                    
                    <div className="mt-4 p-4 bg-slate-800/50 rounded-lg border border-slate-700">
                      <p className="text-lg text-slate-300 leading-relaxed">
                        <span className="font-bold text-emerald-400">2001 Mustang GT:</span> 4.6 V8 with forged internals, Comp Cams 
                        256 intake/238 exhaust duration, TCI Super Street Fighter with 2k high stall torque converter. Built with aluminum 
                        heads and exhaust manifolds with H-Pipe exhaust. Nitto Motivo 245/40/R17 fronts, BF Goodrich 315/40/17 rears. 
                        Pushing around <span className="text-purple-400 font-bold">400 HP</span>. 🔥
                      </p>
                    </div>

                    <div className="mt-4 p-4 bg-slate-800/50 rounded-lg border border-slate-700">
                      <p className="text-lg text-slate-300 leading-relaxed">
                        <span className="font-bold text-emerald-400">1993 F150:</span> Currently stock with 5.0L Coyote. Planning to swap 
                        for a built 351 Windsor pushing 400-500 HP (naturally aspirated), 5-speed manual transmission, air ride suspension, 
                        and dual gas tank system — one for daily/towing, one for street purposes. 😉
                      </p>
                    </div>

                    <div className="mt-4 p-4 bg-slate-800/50 rounded-lg border border-slate-700">
                      <p className="text-lg text-slate-300 leading-relaxed">
                        <span className="font-bold text-emerald-400">Future 1980-1996 C4 Corvette:</span> This is a future project to bring out the retro and synthwave estheic to real life. Currently looking for a good build to start driving! 
                      </p>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl sm:text-3xl font-bold mb-6 bg-gradient-to-r from-emerald-500 to-purple-300 bg-clip-text text-transparent">
            Interested in seeing my previous projects?
          </h1>
          <button className="border-2 border-purple-700 text-emerald-500 hover:bg-purple-700 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all hover:scale-105">
            View My Work
          </button>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-8">
            <MessageSquare className="text-emerald-400" size={32} />
            <h2 className="text-4xl font-bold">Get In Touch</h2>
          </div>
          
          <p className="text-xl text-slate-300 mb-12">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          
          <div className="flex justify-center gap-6 mb-8">
            <a 
              href="https://github.com/LemurTech22" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-700 p-4 rounded-full hover:bg-gray-600 hover:scale-110 transition-all duration-300"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/jose-conde-mlai/" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-700 p-4 rounded-full hover:bg-blue-600 hover:scale-110 transition-all duration-300"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:jose.a.conde@outlook.com" 
              className="bg-black p-4 rounded-full hover:bg-gray-900 hover:scale-110 transition-all duration-300"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-[var(--brand-dark)]">
        <div className="max-w-6xl mx-auto text-center text-slate-400">
          <p>&copy; 2025 Jose Conde. Built with Next.js and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}