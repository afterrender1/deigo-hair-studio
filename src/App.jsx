import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Tutorials from './components/Tutorials'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Hero/>
    <Tutorials/>
    

    </>
  )
}

export default App
