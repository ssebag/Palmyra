import React from 'react'
import Hero from './../components/Hero/Hero' 
import Solutions from './../components/Solutions/Solutions' 
import History from './../components/History/History' 
import Journey from './../components/Journey/Journey' 
import TripInformation from './../components/TripInformation/TripInformation'  


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