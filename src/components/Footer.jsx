import React from 'react'

const Footer = () => {
    return (
        <div id="contact" className='w-full h-screen py-5 px-10 flex items-center'>
            <div className='left w-1/2 h-full flex flex-col justify-between '>
                <h1 className='text-[9vw] leading-[8vw] tracking-wide font-[found]'>EYE- <br />OPENING</h1>
                <img className=' mb-5' width="100" height="30" src="./navLogo.png" alt="" />
            </div>
            <div className='left w-1/2 h-full '>
                <h1 className='text-[10vw] leading-[9vw] font-[found]'>PRESENTATIONS</h1>
                <div className=' flex justify-between'>
                    <div className='lleft'>
                        <div className='links font-[raa] cursor-pointer mt-5 text-xl gap-5 font-semibold'>
                            <h1 className='text-2xl mt-10 mb-5'>S:</h1>
                            {["Ph: +919752007084 ", "Email: rahul852369hhhhh@gmail.com", " Facebook: 404", " GitHub: Leather-Face619"].map((item, index) => (
                                <a key={index} className={`font-semibold block tracking-wider `}>{item}</a>
                            ))} </div>
                        <div className='links font-[raa] cursor-pointer mt-5 text-xl gap-5 font-semibold'>
                            <h1 className='text-2xl mt-10 mb-5'>L:</h1>
                            {["21°13'04.1 N", "81°22'50.3 E"].map((item, index) => (
                                <a key={index} className={`font-semibold block tracking-wider ${index==1 && "mb-7 "}`}>{item}</a>
                            ))} </div>
                    </div>

                    <div className='rright relative'>
                        <div className='links font-[raa] -bottom-5 -left-32 absolute cursor-pointer mt-5 text-xl gap-5 font-semibold'>
                            <h1 className='text-2xl mt-10 mb-5'>M:</h1>
                            {["home ", "services", " our work", " about us ","insights","contact us"].map((item, index) => (
                                <a key={index} className={`font-semibold block tracking-wider `}>{item}</a>
                            ))} </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer