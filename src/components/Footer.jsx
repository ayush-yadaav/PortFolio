import React, { useRef } from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { motion, useInView } from 'framer-motion';

function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' }
    }),
  };

  return (
    <footer
      ref={ref}
      className='w-full flex flex-col items-center justify-center py-10 text-white bg-black'
    >
      {/* Social Icons */}
      <motion.div
        className="icons text-3xl sm:text-4xl flex gap-4 mb-6 md:text-4xl"
        variants={fadeUp}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        custom={0}
      >
        <a href="https://www.linkedin.com/in/ayush-yadaav/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className='hover:scale-110 transition-transform' />
        </a>
        <a href="https://github.com/ayush-yadaav" target="_blank" rel="noopener noreferrer">
          <FaGithub className='hover:scale-110 transition-transform' />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FaTwitter className='hover:scale-110 transition-transform' />
        </a>
      </motion.div>

      {/* Footer Text */}
      <motion.p
        className='md:text-3xl text-3xl sm:text-4xl py-2 text-center'
        variants={fadeUp}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        custom={0.3}
      >
        Created By Ayush Yadav
      </motion.p>
    </footer>
  );
}

export default Footer;
