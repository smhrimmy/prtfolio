import React from 'react';
import { motion } from 'framer-motion';
import { Skill } from '../types';

interface SkillsProps {
  skills: Skill[];
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  // Group skills for better layout
  const categories = Array.from(new Set(skills.map(s => s.category)));

  return (
    <section id="skills" className="py-20 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-extrabold text-clay-text mb-4">Technical Arsenal</h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          A curated collection of tools and technologies I use to bring ideas to life.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {categories.map((category, catIndex) => (
          <motion.div 
            key={category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: catIndex * 0.1 }}
            className="bg-clay-background p-6 rounded-3xl shadow-clay-card flex flex-col items-center"
          >
            <h3 className="text-xl font-bold text-clay-primary mb-6">{category}</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {skills.filter(s => s.category === category).map((skill, idx) => (
                <motion.div
                  key={skill.id}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="px-4 py-2 rounded-xl bg-gray-100 shadow-clay-btn text-clay-text font-semibold text-sm cursor-default hover:text-clay-secondary transition-colors"
                >
                  {skill.name}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
