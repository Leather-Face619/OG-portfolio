
import React from 'react'

const AboutMe = () => {

  const skills = [
    "REACT JS",
    "JAVASCRIPT",
    "NODE JS",
    "GSAP",
    "THREE JS",
    "PYTHON",
    "MYSQL",
    "FIGMA",
    "PHOTOSHOP"
  ]

  return (
    <section 
      id="about"
      className="w-full bg-[#242426] text-white px-6 md:px-10 py-24"
    >

      {/* Top Label */}
      <div className="flex justify-between items-center border-b border-white/20 pb-5">
        <p className="font-[raa] text-sm uppercase">
          ( 01 — About Me )
        </p>

        <p className="font-[raa] text-sm text-white/50">
          GET TO KNOW ME
        </p>
      </div>


      {/* Main Heading */}
      <div className="py-16 md:py-24">

        <h1 className="font-[found] uppercase text-[16vw] md:text-[11vw] leading-[0.85] tracking-tight">
          MORE THAN
          <br />
          JUST A
          <br />
          <span className="text-white/40">DEVELOPER.</span>
        </h1>

      </div>


      {/* About Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-white/20 py-12">

        <div>
          <p className="font-[raa] text-sm text-white/50 mb-6">
            WHO AM I?
          </p>

          <h2 className="font-[found] text-4xl md:text-6xl uppercase leading-none">
            I'M ARVIND PAL,
            <br />
            A CREATOR
            <br />
            & EDUCATOR.
          </h2>
        </div>


        <div className="flex flex-col justify-between gap-10">

          <p className="text-white/70 text-lg md:text-xl leading-relaxed">
            I'm a creative developer, educator and technology
            enthusiast who loves turning ideas into meaningful
            digital experiences.

            <br /><br />

            Currently working at MSME Technology Centre, Durg,
            where I work across web development, technology
            training, project management and educational
            initiatives.

            <br /><br />

            From building interactive websites to conducting
            technical workshops at institutions like NIT Raipur,
            GGU Bilaspur, JNV and Rungta, I enjoy exploring
            technology and sharing what I learn with others.
          </p>

          <div className="flex justify-between items-end border-t border-white/20 pt-6">

            <div>
              <p className="text-white/40 text-sm mb-2">
                CURRENTLY
              </p>
              <p className="text-lg">
                Developer / Technology Trainer
              </p>
            </div>

            <p className="text-white/40 text-sm">
              INDIA © 2026
            </p>

          </div>

        </div>

      </div>


      {/* Skills Section */}
      <div className="border-t border-white/20 py-12">

        <div className="flex justify-between mb-10">
          <p className="font-[raa] text-sm text-white/50">
            WHAT I WORK WITH
          </p>

          <p className="font-[raa] text-sm text-white/50">
            ( MY TOOLKIT )
          </p>
        </div>

        <div className="flex flex-wrap gap-x-4 gap-y-5">

          {skills.map((skill, index) => (
            <span
              key={index}
              className="font-[found] text-3xl md:text-5xl uppercase
              border border-white/30 rounded-full
              px-5 py-2 hover:bg-white hover:text-black
              transition-all duration-300 cursor-default"
            >
              {skill}
            </span>
          ))}

        </div>

      </div>


      {/* Bottom Statement */}
      <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between gap-5">

        <h3 className="font-[found] text-4xl md:text-6xl uppercase">
          ALWAYS LEARNING.
          <br />
          ALWAYS CREATING.
        </h3>

        <p className="text-white/50 text-sm md:text-right self-end">
          CODE. CREATE. TEACH. REPEAT.
          <br />
          THAT'S MY WAY OF WORKING.
        </p>

      </div>

    </section>
  )
}

export default AboutMe
