import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { Experience as ExperienceType } from '../types';

interface ExperienceProps {
  experiences: ExperienceType[];
}

const Experience: React.FC<ExperienceProps> = ({ experiences }) => {
  return (
    <section id="experience" className="py-20 px-6 bg-clay-card/30">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold text-clay-text mb-4">Journey So Far</h2>
          <p className="text-gray-500">My professional path and career milestones.</p>
        </motion.div>

        <div className="space-y-8 relative">
          {/* Timeline connector line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-clay-primary to-clay-secondary rounded-full transform -translate-x-1/2 md:translate-x-0 opacity-20 hidden md:block" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col md:flex-row gap-8 items-center ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Content Card */}
              <div className="flex-1 w-full">
                <div className="bg-clay-background p-8 rounded-3xl shadow-clay-card hover:shadow-clay-card-hover transition-all duration-300 border border-white/50">
                  <div className="flex flex-col gap-2 mb-4">
                    <h3 className="text-xl font-bold text-clay-text flex items-center gap-2">
                      <Briefcase size={20} className="text-clay-primary" />
                      {exp.role}
                    </h3>
                    <h4 className="text-lg font-semibold text-gray-500">{exp.company}</h4>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-400 mt-2">
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={14} />
                        {exp.location}
                      </span>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex gap-2 text-gray-600 text-sm leading-relaxed">
                        <span className="text-clay-secondary mt-1.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Timeline Dot */}
              <div className="relative flex items-center justify-center w-8 md:w-0">
                <div className="w-8 h-8 rounded-full bg-clay-primary shadow-clay-btn z-10 border-4 border-gray-100" />
              </div>

              {/* Spacer for alternating layout */}
              <div className="flex-1 hidden md:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
