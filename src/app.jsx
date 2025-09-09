import React from 'react'
import Hero from './sections/Hero.jsx'
import ShowcaseSection from "./sections/ShowcaseSection";
import Navbar from "./components/NavBar";
import LogoShowcase from "./sections/LogoShowcase";
import FeatureCards from './sections/FeatureCards.jsx';
import Experience from "./sections/Experience";
import TechStack from "./sections/TechStack";
import Contact from "./sections/Contact";
const App = () => {
  return (
    <>
      <Navbar />
      <Hero/>
      <ShowcaseSection/>
      {/*<LogoShowcase />*/}
      <FeatureCards/>
      <Experience />
      <TechStack />
      <Contact />
    </>
  )
}

export default App