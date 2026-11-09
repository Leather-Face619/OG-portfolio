import React from 'react'

const Cards = () => {
    return (
        <div className=' w-full p-10 flex gap-4'>
            <div className='cardcontainer w-1/2 h-[55vh] mt-12 rounded-xl overflow-hidden'>
                <div className='card relative w-full h-full bg-[#004d43] flex items-center justify-center'>
                    <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"/>
                    <button className=' absolute bottom-8 left-5 py-1 px-3 border-[#b2ca5a] text-[#cdea68] border-[1px] rounded-3xl'>&copy;2019-2022</button>
                </div>
            </div>
            <div className='cardcontainer flex gap-2 w-1/2 h-[55vh] mt-12  overflow-hidden'>
                <div className='card relative w-1/2 h-full bg-[#212121] rounded-xl flex items-center justify-center'>
                    <img className='w-1/2 mb-16' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="image"/>
                    <button className=' absolute bottom-8 left-5 py-1 px-3 border-zinc-500 text-[#f0f0f0] border-[1px] rounded-3xl'>Rating 5.0 on Clutch</button>
                </div>
                <div className='card relative w-1/2 h-full bg-[#212121] rounded-xl flex items-center justify-center'>
                    <img className='w-1/3 mb-16' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="image"/>
                    <button className=' absolute bottom-8 left-5 py-1 px-3 border-zinc-500 text-[#f0f0f0] border-[1px] rounded-3xl'>Business Bootcamp Alumni</button>
                    </div>
            </div>


        </div>
    )
}

export default Cards