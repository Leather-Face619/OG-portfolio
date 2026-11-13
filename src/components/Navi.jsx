
import React from 'react'

const Navi = ({ setShowInsights }) => {

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  };
  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  };

  return (
    <div className='fixed z-[99] w-full px-10 py-5 flex justify-between items-start'>

      <div className='logo'>
        <button onClick={() => setShowInsights(false)}>
 
        <img className='w-20' src="./navLogo.png" alt="Logo" />
</button>
      </div>

      <div className='links font-[raa] cursor-pointer text-xl flex gap-5 font-semibold'>

        {["Services", "My work", "About Me", "Insights", "Contact us"].map((item, index) => (

         <a
  key={index}
  href={
    index === 1
      ? "https://github.com/Leather-Face619"
      : index === 2
      ? "#about"
      : undefined
  }
  target={index === 1 ? "_blank" : undefined}
  rel={index === 1 ? "noopener noreferrer" : undefined}
  onClick={(e) => {
    if (index === 3) {
      e.preventDefault()
      setShowInsights(true)
      window.scrollTo(0, 0)
    }

    if (index === 4) {
      scrollToContact()
    }
    if (index === 0) {
      scrollToServices()
    }
  }}
  className={`font-semibold ${index === 4 ? "ml-44" : ""}`}
>
  {item}
</a>

        ))}

      </div>
    </div>
  )
}

export default Navi
