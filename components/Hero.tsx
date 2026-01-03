import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, FileText, Download } from 'lucide-react';
import { ResumeData } from '../types';

interface HeroProps {
  data: ResumeData;
}

const Hero: React.FC<HeroProps> = ({ data }) => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-12 pt-20 pb-10 px-6">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 max-w-xl text-center md:text-left space-y-6"
      >
        <div className="inline-block px-4 py-2 rounded-full bg-clay-background shadow-clay-card mb-4">
          <span className="text-clay-primary font-bold tracking-wider text-sm uppercase">Available for Hire</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold text-clay-text leading-tight">
          Hi, I'm <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-clay-primary to-clay-secondary">
            {data.name}
          </span>
        </h1>
        
        <h2 className="text-2xl font-bold text-gray-500">
          {data.role}
        </h2>
        
        <p className="text-lg text-gray-600 leading-relaxed">
          {data.summary}
        </p>

        <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-4">
          <a href={data.linkedin} target="_blank" rel="noopener noreferrer" className="p-4 rounded-xl bg-clay-background shadow-clay-btn hover:text-clay-secondary active:shadow-clay-btn-active transition-all">
            <Linkedin size={24} />
          </a>
          <a href={`mailto:${data.email}`} className="p-4 rounded-xl bg-clay-background shadow-clay-btn hover:text-clay-accent active:shadow-clay-btn-active transition-all">
            <Mail size={24} />
          </a>
          <a href={data.portfolio} target="_blank" rel="noopener noreferrer" className="p-4 rounded-xl bg-clay-background shadow-clay-btn hover:text-clay-primary active:shadow-clay-btn-active transition-all">
            <FileText size={24} />
          </a>
          <button className="px-6 py-4 rounded-xl bg-clay-primary text-white font-bold shadow-clay-btn active:shadow-clay-btn-active flex items-center gap-2 hover:bg-violet-600 transition-all">
            <Download size={20} />
            Download CV
          </button>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex-1 flex justify-center relative perspective-container"
      >
        {/* Abstract 3D shape simulation using CSS shadows and layering */}
        <div className="relative w-80 h-80 md:w-96 md:h-96">
            <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute inset-0 bg-gradient-to-br from-violet-400 to-blue-400 rounded-[3rem] shadow-clay-card rotate-3"
            />
            <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.5 }}
                className="absolute inset-0 bg-white/30 backdrop-blur-md rounded-[3rem] shadow-clay-card -rotate-6 z-10 border border-white/50"
            />
            <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                className="absolute inset-4 bg-clay-background rounded-[2.5rem] shadow-clay-inset z-20 flex items-center justify-center overflow-hidden"
            >
                <img 
                    src="https://picsum.photos/400/400" 
                    alt="Prajwal DL" 
                    className="w-full h-full object-cover opacity-90 hover:scale-110 transition-transform duration-700"
                />
            </motion.div>
            
            {/* Floating badges */}
            <motion.div 
                animate={{ y: [0, 10, 0], x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 z-30 px-4 py-2 bg-white rounded-xl shadow-clay-card font-bold text-clay-secondary text-sm"
            >
                React Dev ⚛️
            </motion.div>
            <motion.div 
                animate={{ y: [0, -10, 0], x: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-8 -left-4 z-30 px-4 py-2 bg-white rounded-xl shadow-clay-card font-bold text-clay-accent text-sm"
            >
                Problem Solver 🚀
            </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
