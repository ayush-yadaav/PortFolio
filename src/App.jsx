import React from 'react'
import Navbar from './components/Navbar'
import AnimatedCursor from 'react-animated-cursor'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skill from './components/Skill'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Bg from './components/Bg' // Particle or animated background

function App() {
  return (
    <div className="bg-black min-h-screen w-full text-white relative overflow-hidden">
      {/* Custom animated cursor */}
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        color="0, 255, 255"
        outerAlpha={0.3}
        innerScale={0.7}
        outerScale={1.5}
        trailingSpeed={6}
      />

      {/* Background animation */}
      <Bg />

      {/* Main content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Skill />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App
