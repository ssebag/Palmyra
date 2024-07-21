import React from 'react'
import Hero from './../components/Hero/Hero' 
import Solutions from './../components/About/Solutions/Solutions' 
import History from './../components/About/History/History' 
import Journey from './../components/About/Journey/Journey' 
import TripInformation from './../components/About/TripInformation/TripInformation'  


const About = () => {
  return (
    <div>
      <Hero title="About" warning_title="us" />
      <Solutions />
      <History />
      <Journey />
      <TripInformation />
    </div>
  )
}

export default About