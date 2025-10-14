import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Tutorials from './components/Tutorials'
import Intro from './components/Introduction'
import TypesOfCut from './components/TypesOfCutting'
import Footer from './components/Footer'
import Contact from './components/Contact'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Hero/>
    <Tutorials/>
    <Intro/>
    <TypesOfCut/>
    <Contact/>
    <Footer/>
    

    </>
  )
}

export default App
