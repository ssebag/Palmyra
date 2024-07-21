import React from 'react'

const Hero = ({title, warning_title}) => {
  return (
    <section className="bg-dark">
        <h1 className="text-light text-center pt-4 pb-4 font-size-72">
            {title} <span className="text-warning">{warning_title}</span>
        </h1>
    </section>
  )
}

export default Hero
