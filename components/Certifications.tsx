import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { Certification, Education } from '../types';

interface CertificationsProps {
  certifications: Certification[];
  education: Education[];
}

const Certifications: React.FC<CertificationsProps> = ({ certifications, education }) => {
  return (
    <section id="education" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            
            {/* Education Column */}
            <div>
                <motion.h2 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl font-extrabold text-clay-text mb-8 flex items-center gap-3"
                >
                    <span className="w-10 h-10 rounded-xl bg-clay-primary flex items-center justify-center text-white shadow-clay-btn">
                        🎓
                    </span>
                    Education
                </motion.h2>
                <div className="space-y-6">
                    {education.map((edu, idx) => (
                        <motion.div
                            key={edu.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-clay-background p-6 rounded-2xl shadow-clay-card border-l-4 border-clay-primary"
                        >
                            <h3 className="text-lg font-bold text-clay-text">{edu.degree}</h3>
                            <p className="text-clay-secondary font-medium">{edu.institution}</p>
                            <p className="text-sm text-gray-400 mt-1">{edu.year}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Certifications Column */}
            <div>
                <motion.h2 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl font-extrabold text-clay-text mb-8 flex items-center gap-3"
                >
                    <span className="w-10 h-10 rounded-xl bg-clay-accent flex items-center justify-center text-white shadow-clay-btn">
                        🏆
                    </span>
                    Certifications
                </motion.h2>
                <div className="space-y-6">
                    {certifications.map((cert, idx) => (
                        <motion.div
                            key={cert.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex items-start gap-4 bg-clay-background p-6 rounded-2xl shadow-clay-card"
                        >
                            <div className="p-3 bg-white rounded-full shadow-clay-inset">
                                <Award className="text-yellow-500" size={24} />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-clay-text">{cert.name}</h3>
                                <div className="flex items-center gap-2 mt-1">
                                    <span className="text-sm font-semibold text-gray-500">{cert.issuer}</span>
                                    <span className="text-gray-300">•</span>
                                    <span className="text-sm text-gray-400">{cert.year}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  );
};

export default Certifications;
