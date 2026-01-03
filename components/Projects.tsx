import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code } from 'lucide-react';
import { Project } from '../types';

interface ProjectsProps {
  projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <section id="projects" className="py-20 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-extrabold text-clay-text mb-4">Featured Projects</h2>
        <p className="text-gray-500">
          Experimental builds and production-ready solutions.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -10 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="group bg-clay-background rounded-[2rem] p-8 shadow-clay-card hover:shadow-clay-card-hover transition-all duration-300 relative overflow-hidden"
          >
            {/* Decorative background circle */}
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-gradient-to-br from-clay-primary/10 to-clay-secondary/10 rounded-full blur-3xl group-hover:bg-clay-primary/20 transition-all" />

            <div className="relative z-10 flex flex-col h-full">
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-white rounded-2xl shadow-clay-btn">
                  <Code className="text-clay-accent" size={24} />
                </div>
                <div className="flex gap-2">
                  <a href={project.link} className="p-2 rounded-lg hover:bg-white hover:text-clay-primary transition-colors">
                    <Github size={20} />
                  </a>
                  <a href={project.demo} className="p-2 rounded-lg hover:bg-white hover:text-clay-primary transition-colors">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-clay-text mb-3">{project.title}</h3>
              <p className="text-gray-600 mb-8 flex-grow leading-relaxed">
                {project.description}
              </p>

              <div className="space-y-3">
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-3 py-1 text-sm font-semibold rounded-lg bg-white shadow-sm text-clay-secondary border border-gray-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
