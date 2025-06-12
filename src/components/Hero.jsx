import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'

const roles = ["Frontend Developer", "React Enthusiast", "UI Designer"]

function Hero() {

    const [index, setindex] = useState(0)
    const [displayText, setdisplayText] = useState('')
    const [charIndex, setcharIndex] = useState(0)

    useEffect(() => {
      const currRole = roles[index]

      if(charIndex < currRole.length){
        const timeOut = setTimeout(() => {
            setdisplayText((prev) => prev + currRole[charIndex] )
            setcharIndex((prev) => prev + 1)
        }, 100);
        return () => clearTimeout(timeOut)
      }else{
        const timeOut = setTimeout(() => {
            setdisplayText('')
            setcharIndex(0)
            setindex((prev)=> (prev + 1) % roles.length)
        }, 2000);
        return () => clearTimeout(timeOut)
      }

    }, [charIndex, index])
    


  return (
    <section
    id='hero'
    className='flex py-16 md:py-24 items-center justify-center text-white h-screen w-full'
    >
      <div className="hero-bg">
  <motion.div className="text-center max-w-xl z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
         >
            <motion.h1 className='text-4xl md:text-5xl font-bold mb-4'
            initial={{opacity:0, y:-20}} 
            animate={{opacity:1, y:0}}
            transition={ {delay:0.2}}
            >Hi, I'm Ayush Yadav</motion.h1>
            <motion.h2 className='text-xl text-white md:text-2xl font-medium h-8'
            initial={{opacity:0, y:10}} 
            animate={{opacity:1, y:0}}
            transition={ {duration:0.3}}
            >

                {displayText}
                <span className="animate-pulse">|</span>
            </motion.h2>
            <motion.div className="btn mt-10 flex gap-7 items-center justify-center"
            initial={{opacity:0}} 
            animate={{opacity:1}}
            transition={ {delay:0.6}}
            >

                <motion.button className='p-4 md:p-6 sm:p-5 rounded-xl  font-bold border-slate-900 hover:p-4.5 border-2 '
                whileHover={{scale:1.2}}
                whileTap={{scale:0.95}}
                >Resume</motion.button>

                <motion.button className='p-4 md:p-6 sm:p-5 rounded-xl border-2 border-slate-900 font-bold hover:p-4.5 '
                whileHover={{scale:1.2}}
                whileTap={{scale:0.95}}
                ><a href="#project">View Project</a></motion.button>
            </motion.div>
        </motion.div>
      </div>
      
       
    </section>
  )
}

export default Hero