import React, { useRef } from 'react';
import { skills } from '../data';
import { motion, useInView } from 'framer-motion';

function Skill() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
  };

  return (
    <section
      id="skill"
      className="w-full py-16 px-8 bg-black"
      ref={sectionRef}
    >
      {/* Section Title */}
      <motion.h2
        className="text-5xl text-white font-bold text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        Skills
      </motion.h2>

      {/* Skill Cards Grid */}
      <motion.div
        className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'show' : 'hidden'}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="bg-transparent border-[2px] border-slate-800 rounded-2xl shadow-md p-6 flex flex-col items-center justify-center hover:scale-105 transition-transform w-40 h-40"
          >
            <img
              src={skill.img}
              alt={skill.item}
              className="w-16 h-16 mb-5 object-contain"
            />
            <h3 className="text-white">{skill.item}</h3>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Skill;
