import React from 'react'

const About = () => {
    return (
        <div data-scroll data-scroll-section data-scroll-speed="-.2" className=' w-full min-h-screen bg-[#cdea68] rounded-t-3xl text-black pt-16'>
            <h1 className=' text-[4vw] leading-[4vw] px-10'>I'm a creative developer and strategic partner helping ambitious businesses grow, sell smarter, communicate ideas, and build great teams through technology and creativity.</h1>
            <div className='border-t-[1px] border-[#7d9136] mt-[4vw] -px-10'></div>
            <div className=' w-full flex justify-around py-5 text-xl'>
                <h1 className='w-1/2 '>What you can expect:</h1>
                <div className='right w-[24vw] mr-40' ><h1>We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether its live or digital, delivered for one or a hundred people.</h1>
                    <br />
                    <h1 >We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.</h1></div> </div>
            <div className='border-t-[1px] border-[#7d9136] mt-[4vw] -px-10'>
                
            </div>
            <div className='gbottom  mt-5 ml-10 flex items-start justify-between '>
                <div className='h-[78vh]'>
                    <h1 className='w-auto  text-6xl font-semibold '>Our approach:</h1>
                    <button className=' mt-6 border-2 border-none bg-zinc-900 text-zinc-50 rounded-full py-4 px-9 flex gap-2 items-center'>READ MORE
                        <div className=' ml-5 w-2 h-2 bg-zinc-100 rounded-full'></div>
                    </button>
                </div>
                <div className='w-[45vw] h-[32vw] rounded-xl bg-[url(https://wallpapers.com/images/featured/aesthetic-black-pictures-67v146k27nj6bgmp.jpg)]  bg-cover bg-center mr-12'></div>
            </div>
        </div>


    )
}

export default About