import React from 'react'
import Hero from './sections/Hero.jsx'
import Projects from "./sections/Projects";
import Navbar from "./components/NavBar";
import LogoShowcase from "./sections/LogoShowcase";
import FeatureCards from './sections/FeatureCards.jsx';
import Experience from "./sections/Experience";
import TechStack from "./sections/TechStack";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      {/*<LogoShowcase />*/}
      <FeatureCards />
      <Experience />
      <TechStack />
      <Contact />
      <Footer />
    </>
  )
}

export default App