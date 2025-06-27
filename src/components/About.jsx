import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      id='about'
      className='w-full min-h-screen text-center bg-black px-4 md:px-10 py-10'
      ref={ref}
    >
      
      <motion.h1
        className='text-3xl md:text-5xl font-bold py-6 text-white'
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        About Me
      </motion.h1>

      <div className='w-full flex flex-col-reverse md:flex-row items-center justify-around'>

        {/* Text Content */}
        <motion.div
          className="md:w-1/2 w-full md:py-10"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          <h2 className='text-white text-2xl md:text-4xl font-semibold mb-4'>
            Introduction
          </h2>

          <div className="py-5 px-2 md:px-6 flex flex-col items-center justify-center space-y-6">
            {[
              "Hi, I'm Ayush, a passionate B.Tech Computer Science and Engineering student with a strong interest in building modern, user-friendly web applications. I enjoy turning complex problems into clean, elegant solutions through code.",
              "Currently, I'm focused on improving my skills in web development, particularly with technologies like React.js, JavaScript, and modern UI/UX principles. I’m always eager to learn and take on new challenges that help me grow as a developer.",
              "Whether it's collaborating on team projects or building something solo, I love the creative and logical process of bringing ideas to life with technology.",
            ].map((text, i) => (
              <motion.p
                key={i}
                className='text-white text-center font-medium'
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.3, duration: 0.6 }}
              >
                {text}
              </motion.p>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default About;
