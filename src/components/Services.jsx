
import React from 'react'
import Helmet from './Helmet'

const Services = () => {

  const servicesLeft = [
    {
      number: "01",
      title: "WEB DEVELOPMENT",
      desc: "Building modern, responsive and scalable digital experiences.",
      skills: "React · Next.js · Node.js · MongoDB"
    },
    {
      number: "02",
      title: "CREATIVE DEVELOPMENT",
      desc: "Turning creative concepts into immersive web experiences.",
      skills: "GSAP · Three.js · WebGL · JavaScript"
    },
    {
      number: "03",
      title: "UI / UX & DESIGN",
      desc: "Designing intuitive interfaces and memorable visual identities.",
      skills: "Figma · Photoshop · Illustrator · Canva"
    }
  ]

  const servicesRight = [
    {
      number: "04",
      title: "DATA ANALYTICS",
      desc: "Transforming raw data into meaningful insights and decisions.",
      skills: "Python · Pandas · Excel · Power BI · MySQL"
    },
    {
      number: "05",
      title: "TECHNICAL TRAINING",
      desc: "Teaching, mentoring and helping people build technical skills.",
      skills: "Web Development · Python · SQL · Networking"
    },
    {
      number: "06",
      title: "DIGITAL STRATEGY",
      desc: "Helping businesses communicate ideas, present products and grow.",
      skills: "Digital Presence · Product Storytelling · Strategy"
    }
  ]

  const ServiceItem = ({ item }) => (
    <div className="group border-t border-white/20 py-5 cursor-default">

      {/* Number & Arrow */}
      <div className="flex justify-between items-center mb-4">

        <span className="text-white/40 text-xs font-[raa]">
          ({item.number})
        </span>

        <span className="text-white/30 text-xs group-hover:text-white transition-colors duration-300">
          ↗
        </span>

      </div>

      {/* Service Title */}
      <h3 className="font-[found] text-2xl md:text-3xl uppercase mb-3
        group-hover:translate-x-2 transition-transform duration-300">
        {item.title}
      </h3>

      {/* Description */}
      <p className="text-white/50 text-sm leading-relaxed mb-4">
        {item.desc}
      </p>

      {/* Skills */}
      <p className="text-white/30 text-[10px] md:text-xs leading-relaxed uppercase tracking-wider">
        {item.skills}
      </p>

    </div>
  )

  return (

    <section
      id="services"
      className="relative w-full bg-[#242426] text-white px-6 md:px-10 py-24 overflow-hidden"
    >

      {/* ================= HEADER ================= */}

      <div className="flex justify-between items-center border-b border-white/20 pb-5">

        <p className="font-[raa] text-sm uppercase">
          ( 02 — What I Do )
        </p>

        <p className="font-[raa] text-sm text-white/40">
          SERVICES & EXPERTISE
        </p>

      </div>


      {/* ================= MAIN TITLE ================= */}

      <div className="py-12 md:py-16">

        <h1 className="font-[found] text-[14vw] md:text-[10vw] uppercase leading-[0.85]">
          MY
          <span className="text-white/40"> SERVICES.</span>
        </h1>

        <p className="text-white/50 text-sm md:text-base mt-6 max-w-md">
          A combination of technology, creativity and strategy
          to turn ambitious ideas into meaningful experiences.
        </p>

      </div>


      {/* ================= SERVICES + 3D MODEL ================= */}

      <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr_1fr] gap-8 md:gap-5 items-center">


        {/* ================= LEFT SERVICES ================= */}

        <div className="flex flex-col gap-5 order-2 md:order-1">

          {servicesLeft.map((item) => (
            <ServiceItem
              key={item.number}
              item={item}
            />
          ))}

        </div>


        {/* ================= CENTRAL 3D MODEL ================= */}

        <div
          id="service-model-slot"
          className="relative order-1 md:order-2 w-full h-[350px] md:h-[850px] flex items-center justify-center overflow-hidden"
        >

          {/* Three.js Helmet Model */}
          <Helmet className="w-full h-full" />


        
         

        </div>


        {/* ================= RIGHT SERVICES ================= */}

        <div className="flex flex-col gap-5 order-3">

          {servicesRight.map((item) => (
            <ServiceItem
              key={item.number}
              item={item}
            />
          ))}

        </div>

      </div>


      {/* ================= BOTTOM ================= */}

      <div className="border-t border-white/20 pt-6 mt-10 flex justify-between items-center">

        <p className="text-white/40 text-xs font-[raa]">
          LET'S BUILD SOMETHING GREAT.
        </p>

        <p className="text-white/40 text-xs font-[raa]">
          06 SERVICES / 01 CREATIVE MIND
        </p>

      </div>

    </section>

  )
}

export default Services
