import React, { useRef, useState } from 'react';
import { projects } from '../data';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { AnimatePresence, motion, useInView } from 'framer-motion';

function Projects() {
  const [index, setindex] = useState(0);
  const [selectedProject, setselectedProject] = useState(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const prevIndex = (index - 1 + projects.length) % projects.length;
  const nextIndex = (index + 1) % projects.length;

  const handlePrevIndex = () => setindex(prevIndex);
  const handleNextIndex = () => setindex(nextIndex);
  const handleCardClick = () => setselectedProject(projects[index]);
  const closeCard = () => setselectedProject(null);

  return (
    <section id="project" className="w-full min-h-screen text-center p-10 bg-black" ref={sectionRef}>
      {/* Section Title */}
      <motion.h1
        className="text-white md:text-5xl font-bold text-4xl"
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        Projects
      </motion.h1>

      {/* Project Card Area */}
      <motion.div
        className="flex items-center flex-col relative mt-12"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.2, duration: 0.7 }}
      >
        <div className="relative w-[350px] h-[420px]">
          {/* Left Arrow */}
          <button className="absolute left-[-40px] top-1/2 -translate-y-1/2 z-10" onClick={handlePrevIndex}>
            <ChevronLeft size={32} className="text-white" />
          </button>

          {/* Main Project Card */}
          <motion.div
            key={projects[index].id}
            onClick={handleCardClick}
            className="absolute top-0 left-0 w-full h-full p-4 bg-zinc-900 border-2 border-slate-900 rounded-xl shadow-2xl z-20 flex flex-col text-center cursor-pointer hover:scale-105 transition"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={projects[index].image}
              alt={projects[index].title}
              className="w-full h-40 object-cover rounded-lg mb-3"
            />
            <h2 className="text-xl font-bold mb-1 mt-3 text-white">{projects[index].title}</h2>
            <p className="text-sm text-white mb-3 py-4">{projects[index].content}</p>
            <p className="text-xs text-blue-950 py-6">Click to view</p>
          </motion.div>

          {/* Side Blurred Cards (non-clickable) */}
          <motion.div
            key={`prev-${projects[prevIndex].id}`}
            className="absolute top-0 left-[-60%] w-full h-full p-6 bg-white/70 rounded-xl shadow-xl blur-sm scale-90 opacity-60 pointer-events-none"
            animate={{ opacity: 0.6, scale: 0.9 }}
          />
          <motion.div
            key={`next-${projects[nextIndex].id}`}
            className="absolute top-0 left-[60%] w-full h-full p-6 bg-white/70 rounded-xl shadow-xl blur-sm scale-90 opacity-60 pointer-events-none"
            animate={{ opacity: 0.6, scale: 0.9 }}
          />

          {/* Right Arrow */}
          <button className="absolute right-[-40px] top-1/2 -translate-y-1/2 z-10" onClick={handleNextIndex}>
            <ChevronRight size={32} className="text-white" />
          </button>
        </div>

        {/* Modal Popup */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-zinc-900 rounded-xl shadow-2xl p-6 max-w-lg w-[90%] relative"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                transition={{ duration: 0.3 }}
              >
                <button
                  onClick={closeCard}
                  className="absolute top-2 right-2 text-gray-500 hover:text-white"
                >
                  <X size={24} />
                </button>
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h2 className="text-xl text-white font-bold mb-2">{selectedProject.title}</h2>
                <p className="text-white mb-4">{selectedProject.full}</p>
                <div className="flex justify-center gap-4">
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 md:px-6 md:py-4 sm:py-3 sm:px-5 rounded-xl border-2 border-slate-800 font-bold hover:p-4.5"
                  >
                    Live
                  </a>
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 md:px-6 md:py-4 sm:py-3 sm:px-5 rounded-xl border-2 border-slate-800 font-bold hover:p-4.5"
                  >
                    GitHub
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

export default Projects;
