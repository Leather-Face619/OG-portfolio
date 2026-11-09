import { motion } from 'framer-motion';
import React from 'react'
import { HiArrowUpRight } from "react-icons/hi2";
const LandingPage = () => {
  
  return (

    <div data-scroll data-scroll-section data-scroll-speed="-.4"  className=' w-full h-screen pt-1  '>
      <div className='textstructure mt-32 px-12 '>
        {["WE CREATE", "EYE-OPENING", "PRESENTATIONS"].map((item, index) => {
          return <div key={index} className='mask w-fit flex items-end text-9xl leading-[8vw] font-[found]'>{index == 1 && (
          
          <motion.div initial={{width:0}} animate={{width:"9vw"}} transition={{ease:[0.68, -0.6, 0.32, 2.6],duration:1.4} } className='w-[9vw] h-[6vw] relative top-3 mr-2 bg-[url("/ghost.gif")]  bg-cover bg-center rounded-lg '>

          </motion.div>) }
            <h1 className=' pt-[2vw] -mb-[1vw] uppercase text-[9vw] leading-[0.75]'>{item}</h1>
            </div>
        })}
      </div>
      <div className=' border-t-[1px] border-zinc-700 mt-24 flex justify-between items-center px-10 py-4'>
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p className='text-md font-light tracking-tighter leading-none'>{item}</p>
        ))}
        <div className='flex gap-2 items-center  '>
          <div className='start uppercase border-[1px] rounded-3xl'><p className='py-1 px-3 font-light text-sm'>start the project</p> </div>
          <div className='border-[1px] rounded-3xl p-[6px]'><HiArrowUpRight /></div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage