"use client"
import { Github, ArrowUp, Linkedin, Mail, MessageSquare } from 'lucide-react';
import React, { useState} from 'react';

export default function Footer(){
    const [showScrollTop, setShowScrollTop] = useState(false);
    const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Check scroll position for "back to top" button
  React.useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
    return(
        <>
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
              className="bg-slate-700 p-4 rounded-full hover:bg-gray-600 hover:scale-150 transition-all duration-300"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/jose-conde-mlai/" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-700 p-4 rounded-full hover:bg-blue-600 hover:scale-150 transition-all duration-300"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:jose.a.conde@outlook.com" 
              className="bg-black p-4 rounded-full hover:bg-gray-900 hover:scale-150 transition-all duration-300"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* Back to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-emerald-600 hover:bg-emerald-700 text-white p-4 rounded-full shadow-2xl transition-all hover:scale-110"
        >
          <ArrowUp size={24} />
        </button>
      )}

      {/* Footer */}
      <footer className="relative z-10 py-8 px-4 border-t border-slate-800">
        <div className="max-w-6xl mx-auto text-center text-slate-400">
          <p>&copy; 2025 Jose Conde. Built with Next.js and Tailwind CSS.</p>
        </div>
      </footer>
    </>
    );
}