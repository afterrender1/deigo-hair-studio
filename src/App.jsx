import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Tutorials from "./components/Tutorials";
import Intro from "./components/Introduction";
import TypesOfCut from "./components/TypesOfCutting";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Process from "./components/Process"; // Import new page

function App() {
  return (
     <>
      <Navbar />
            <Hero />
            <Tutorials />
            <Intro />
            <TypesOfCut />
            <Process/>
            <Contact />
      <Footer /></>
  );
}

export default App;
