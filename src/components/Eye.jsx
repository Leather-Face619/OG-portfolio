import React, { useEffect, useState } from 'react'

const Eye = () => {
    const [rotate, setRotate] = useState(0)

    useEffect(()=>{
window.addEventListener("mousemove",(e)=>{
    let mouseY = e.clientY
    let mouseX = e.clientX
    let deltaY = mouseY - innerHeight/2
    let deltaX = mouseX - innerWidth/2
    let angle = Math.atan2(deltaY,deltaX) * (180/Math.PI)
    setRotate(angle-180)
})
    })
    return (
        <div className='w-full h-screen overflow-hidden'>
            <div data-scroll data-scroll-speed="-.6"  className=' relative w-full h-full bg-center bg-cover bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")]'>
                <div className=' absolute flex gap-10 top-1/2 left-1/2  -translate-x-[50%] -translate-y-[50%]'>
                    <div className='w-[19vw]  h-[15vw] flex items-center justify-center bg-zinc-300 rounded-full'>
                        <div className='w-[10vw] h-[9vw] bg-zinc-800 rounded-full  relative'>
                        <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}}  className='line absolute  top-1/2 left-1/2  -translate-x-[50%] -translate-y-[50%] w-full rotate-45 h-10  '>
                            <div  className='w-8 h-8 rounded-full bg-zinc-100'></div>
                        </div>
                    </div>
                    </div>

                    <div className='w-[19vw]  h-[15vw] flex items-center justify-center bg-zinc-300 rounded-full'>
                        <div className='w-[10vw] h-[9vw] bg-zinc-800 rounded-full relative'>
                        <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}}  className='line absolute  top-1/2 left-1/2  -translate-x-[50%] -translate-y-[50%] w-full rotate-45 h-10  '>
                            <div className='w-8 h-8 rounded-full bg-zinc-100'></div>
                        </div>
                            </div>
                            </div>
                </div>
            </div>
        </div>
    )
}

export default Eye