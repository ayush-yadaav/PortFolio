import React, { useState } from 'react'
import { MdClose, MdMenu } from 'react-icons/md'
import { AnimatePresence, motion } from 'framer-motion'
import { navItem } from '../data'
function Navbar() {

  const [menu, setmenu] = useState(false)

  const toggleMenu = ()=> setmenu(!menu)

  return (
<div className=''>

    <div className='flex  items-center justify-between md:px-22 md:py-6 sm:p-7 p-5'>
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
         className='text-2xl font-bold text-white  sm:text-4xl md:text-5xl'>PortFolio</motion.h1>
        <motion.div 
initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        className="md:flex item-center text-white justify-between gap-5 sm:hidden hidden md:text-xl font-semibold ">
          {navItem.map((item, index)=>(
            <motion.h3
            key={item}
            whileHover={{ scale: 1.1, color: '#ccc' }}
              transition={{ type: 'spring', stiffness: 300 }}
             >
               <a href={`#${item}`}>{item.charAt(0).toUpperCase() + item.slice(1)}</a>
            </motion.h3>
          ))}
        </motion.div>
        <motion.div 
         className='md:hidden text-white text-3xl sm:text-4xl cursor-pointer'
         onClick={toggleMenu}
         whileTap={{ scale: 0.9 }}

         >
          {menu ? <MdClose /> : <MdMenu />}
         </motion.div>
</div>


         {/* mobile view  */}

<AnimatePresence>
  { menu && (
   <motion.div className="md:hidden absolute top-16 left-0 w-full flex flex-col items-center gap-4 px-6 py-4 text-white text-base  bg-zinc-900 z-50 font-bold  shadow-md" 
       initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
   >
     {navItem.map((item, index)=>(
            <motion.h3
            key={item}
            whileHover={{ scale: 1.5, color: '#ccc' }}
              transition={{ type: 'spring', stiffness: 300 }}
             >
               <a href={`#${item}`}>{item.charAt(0).toUpperCase() + item.slice(1)}</a>
            </motion.h3>
          ))}
  </motion.div>
)}
</AnimatePresence>

    </div>
  )
}

export default Navbar