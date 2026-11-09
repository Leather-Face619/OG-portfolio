import { motion } from 'framer-motion'
import React from 'react'

const Mark = () => {
  
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".2" className=' w-full py-16 bg-[#004d43] rounded-t-3xl'>
        <div className='text border-t-2 border-b-2 border-zinc-700 flex items-center whitespace-nowrap overflow-hidden '>
        <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat:Infinity,ease:"linear",duration:8 }} className=' text-[20vw] leading-none font-[raa] font-thin px-12 -mb-3 '> WE ARE OCHI </motion.h1>
        <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat:Infinity,ease:"linear",duration:8 }} className=' text-[20vw] leading-none font-[raa]  font-thin -mb-3 '> WE ARE OCHI </motion.h1>
        
</div>
    </div>
  )
}

export default Mark