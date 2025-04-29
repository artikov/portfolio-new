import './App.css'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Line from './components/Line/Line'
import Projects from './components/Projects/Projects'
import About from './components/About/About'
import Contacts from './components/Contacts/Contacts'
import Capabilities from './components/Capabilities/Capabilities'
import Experience from './components/Experience/Experience'

import { useState } from 'react'

function App() {
  const [aboutPage, setAboutPage] = useState(false)

  return (
    <>
      <Navbar setAboutPage={setAboutPage} />
      {
        aboutPage ?
          <>
            <About aboutPage={aboutPage} />
            <Line />
            <Capabilities />
            <Line />
            <Experience />
            <Line />
          </>
          :
          <>
            <Hero />
            <Line />
            <Projects />
            <Line />
            <About setAboutPage={setAboutPage} />
            <Line />
          </>
      }
      <Contacts />
    </>
  )
}

export default App
