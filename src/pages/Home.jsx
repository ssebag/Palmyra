import React from 'react'
import HomeHero from '../components/HomeHero/HomeHero' 
import Statics from '../components/Statics/Statics' 
import Services from '../components/Services/Services' 
import Destinations from '../components/Destinations/Destinations' 
import BestProgramSection from './../components/BestProgramSection/BestProgramSection' 
import AboutUs from '../components/AboutUs/AboutUs' 
import Gallery from '../components/Gallery/Gallery' 
import GetStart from '../components/GetStart/GetStart'
const Home = () => {
  return (
    <div>
        <HomeHero />
        <Statics />
        <Services />
        <Destinations />
        <BestProgramSection title="Our Best" title_warning="Programs" />
        <AboutUs />
        <Gallery />
        <GetStart />
    </div>
  )
}

export default Home