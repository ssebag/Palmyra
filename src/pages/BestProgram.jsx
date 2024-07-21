import React from 'react'
import './BestProgram.css'
import BestProgramSection from './../components/BestProgramSection/BestProgramSection' 
import Best_Program_hero from './../assets/BestProgram/best-program-hero.png'
import AboutIstanbul from '../components/AboutIstanbul/AboutIstanbul'
import RelatedArticles from '../components/RelatedArticles/RelatedArticles'
import HeroCarousel from '../components/HeroCarousel/HeroCarousel'
const BestProgram = () => {
  return (
    <div>
      <HeroCarousel title1="Istanbul, the" title2="city in Turkey" title_warning="wonderful" description="All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary " img1={Best_Program_hero} img2={Best_Program_hero} img3={Best_Program_hero} />
      <AboutIstanbul />
      <BestProgramSection title="Istanbul Best" title_warning="Programs" />
      <RelatedArticles />
    </div>
  )
}

export default BestProgram
