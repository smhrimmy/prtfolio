import React, { useState, useEffect } from 'react';
import { Menu, X, Settings } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import { INITIAL_DATA } from './constants';
import { ResumeData } from './types';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import AdminModal from './components/AdminModal';

function App() {
  const [resumeData, setResumeData] = useState<ResumeData>(INITIAL_DATA);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Load state from local storage to simulate database persistence
  useEffect(() => {
    const savedData = localStorage.getItem('resume_data');
    if (savedData) {
      setResumeData(JSON.parse(savedData));
    }
  }, []);

  const handleUpdateData = (newData: ResumeData) => {
    setResumeData(newData);
    localStorage.setItem('resume_data', JSON.stringify(newData));
  };

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
  ];

  return (
    <div className="min-h-screen font-sans selection:bg-clay-primary selection:text-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-40 px-6 py-4 bg-clay-background/80 backdrop-blur-lg border-b border-white/20">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="text-2xl font-black text-clay-primary tracking-tighter">
            PDL<span className="text-clay-secondary">.dev</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="font-bold text-gray-500 hover:text-clay-primary transition-colors text-sm uppercase tracking-wide"
              >
                {link.name}
              </a>
            ))}
            <button 
              onClick={() => setIsAdminOpen(true)}
              className="p-2 rounded-full hover:bg-white/50 transition-colors text-gray-400 hover:text-clay-primary"
            >
              <Settings size={20} />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <button 
              onClick={() => setIsAdminOpen(true)}
              className="text-gray-400"
            >
              <Settings size={20} />
            </button>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-xl bg-white shadow-clay-btn active:shadow-clay-btn-active text-clay-text"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Nav Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-20 left-0 right-0 bg-clay-background z-30 p-6 shadow-xl border-b border-white/50 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="p-4 rounded-xl bg-white shadow-clay-card text-center font-bold text-clay-text"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="overflow-x-hidden">
        <Hero data={resumeData} />
        <Skills skills={resumeData.skills} />
        <Projects projects={resumeData.projects} />
        <Experience experiences={resumeData.experiences} />
        <Certifications 
            certifications={resumeData.certifications} 
            education={resumeData.education}
        />
        
        {/* Footer */}
        <footer className="py-12 bg-white mt-20">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="text-gray-400 font-medium">
              © {new Date().getFullYear()} Prajwal DL. All rights reserved.
            </p>
            <p className="text-sm text-gray-300 mt-2">
              Built with React, Tailwind & Claymorphism
            </p>
          </div>
        </footer>
      </main>

      {/* Admin Modal */}
      <AdminModal 
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
        isAuthenticated={isAuthenticated}
        onLogin={() => setIsAuthenticated(true)}
        onLogout={() => setIsAuthenticated(false)}
        data={resumeData}
        onUpdateData={handleUpdateData}
      />
    </div>
  );
}

export default App;
