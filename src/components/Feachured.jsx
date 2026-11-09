import { motion, useAnimation } from 'framer-motion'
import React from 'react'

const Feachured = () => {
    const cards = [useAnimation(), useAnimation()]

   const handleHover = (index)=>{
    
        cards[index].start({y:"0"})
    }
    return (
        <div className='w-full min-h-screen font-[found]'>
            <div className=' pl-10 mt-10 text-7xl border-b-[1px] pb-[3vw] border-zinc-700 tracking-wide'>Featured projects</div>
            <div className='px-20 py-4'>
                <div className='cards w-full  flex gap-10 '>
                    <motion.div onHoverStart={()=>handleHover(0)} className='cardContainer relative  w-1/2 h-[69vh] text-2xl'>
                        {/* /////// */}
                        <div className='text flex items-center tracking-wider gap-2 ml-1 mb-1'>
                            <div className=' gola w-[1vw] h-[1vw] bg-zinc-100 rounded-full  ' ></div>
                            <h1 >FYDE</h1>
                        </div>
                        {/* ////////// */}
                        {/* <h1 className=' absolute left-full text-[#adc557] -translate-x-1/2 right-0 overflow-hidden top-1/2-translate-y-1/2 z-10 text-8xl'>{"FYDE".split("").map((item,index)=>(
                        <motion.span initial={{y:"100%"}} animate={cards[0]} className=' inline-block'>{item}</motion.span>))}</h1> */}

                        <div className='card w-full h-full overflow-hidden  rounded-2xl'>
                            <img className=' bg-cover bg-center cursor-pointer' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="img" />
                        </div>
                    </motion.div>
                    <div className='cardContainer relative w-1/2 h-[69vh] text-2xl'>
                        {/* ///////////// */}
                    <div className='text flex items-center gap-2 tracking-wider ml-1 mb-1'>
                            <div className=' gola w-[1vw] h-[1vw] bg-zinc-100 rounded-full  ' ></div>
                            <h1 >VISE</h1>
                        </div>
                        {/* <h1 className=' absolute right-full text-[#9bb14d] translate-x-1/2 top-1/2 -translate-y-1/2 z-10 text-8xl'>{"VISE".split("").map((item,index)=>(<span>{item}</span>))}</h1> */}

                        <div className='card w-full h-full  overflow-hidden rounded-2xl'>
                            <img className=' bg-cover bg-center cursor-pointer ' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="img" />
                        </div>
                        {/* ////////////////////////// */}
                        
                    </div>
                </div>
                
            </div>


        </div>
    )
}

export default Feachured