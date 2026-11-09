
import React, { useState, useEffect } from 'react'

import Navi from './components/Navi'
import LandingPage from './components/LandingPage'
import Mark from './components/Mark'
import About from './components/About'
import Eye from './components/Eye'
import Feachured from './components/Feachured'
import Cards from './components/Cards'
import Footer from './components/Footer'
import AboutMe from './components/AboutMe'
import Insights from './components/Insights'

import LocomotiveScroll from 'locomotive-scroll'
import Services from './components/Services'

const App = () => {

  const [showInsights, setShowInsights] = useState(false)

  useEffect(() => {
    if (showInsights) return

    const locomotiveScroll = new LocomotiveScroll()

    return () => {
      locomotiveScroll.destroy()
    }
  }, [showInsights])

  return (
    <div className='w-full min-h-screen text-white bg-zinc-800'>

      <Navi setShowInsights={setShowInsights} />

      {showInsights ? (

        <Insights />

      ) : (
        <>
          <LandingPage />
          <Mark />
          <About />
          <Services/>
          <Eye />
          <Feachured />
          <Cards />
          <AboutMe />
          <Eye />
          <Footer />
        </>
      )}

    </div>
  )
}

export default App
