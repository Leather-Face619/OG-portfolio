
import React from 'react'

const Insights = () => {
  return (

    <section
      id="insights"
      className="relative min-h-screen w-full bg-[#090909] text-white flex flex-col items-center justify-center px-5 overflow-hidden"
    >


      {/* Top Label */}
      <div className="absolute top-10 left-0 w-full flex justify-center">
        <p className="font-[found] text-2xl tracking-widest">
          AP.
        </p>
      </div>


      {/* Main Content */}
      <div className="w-full max-w-5xl text-center">

        <p className="font-[raa] text-xs md:text-sm tracking-[0.4em] text-white/40 mb-10 uppercase">
          ( INSIGHTS / 001 )
        </p>


        {/* Main Joke */}
        <h1 className="font-[found] uppercase leading-[0.9] tracking-tight text-[12vw] md:text-[7vw]">

          "1t's N0T

          <br />

          <span className="font-normal font-[raa]">
            @ BuG_
          </span>

          <br />

          it%5  an

          <br />

          <span className="text-white/40">
            UND0CUMEN73D
          </span>

          <br />

          feature"

        </h1>


        {/* Small Divider */}
        <div className="flex justify-center my-10">
          <div className="w-16 h-[2px] bg-white/50" />
        </div>


        {/* Maintenance Status */}
        <div className="flex justify-center items-center gap-2">

          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
          </span>

          <p className="font-[raa] text-xs md:text-sm tracking-widest uppercase">
            UNDER MAINTENANCE
          </p>

        </div>
  <button className='absolute bottom-20 left-[45%] text-xl' onClick={() => window.location.reload()}>
  ← BACK TO HOME
</button>
        <p className="mt-5 text-white/40 text-xs md:text-sm font-[raa]">
          GOOD THINGS TAKE TIME. BAD CODE TAKES LONGER.
        </p>

      </div>


      {/* Bottom Footer */}
      <div className="absolute bottom-8 left-0 w-full px-8 md:px-12 flex justify-between items-center text-white/40 text-[10px] md:text-xs font-[raa] uppercase">

        <p>ARVIND PAL © 2026</p>

        <p>PLEASE DON'T REFRESH. IT WON'T HELP.</p>

      </div>

    </section>
  )
}

export default Insights
