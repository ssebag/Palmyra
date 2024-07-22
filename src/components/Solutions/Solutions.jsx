import React from 'react'
import './Solutions.css'
import star_eyes from './../../assets/star-eyes.png'
import creative_solution from './../../assets/gallery1.png'

const Solutions = () => {
  return (
    <div className="creative-solutions pt-4">
         <div className="container">
        <div className="row">
            <div className="col-lg-6 col-12">
                <img className="about-img" src={star_eyes} />
                <h1 className="about-title">
                    Distant Learning for creative Solutions
                </h1>
                <p className="about-details">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
                    consequat duis enim velit mollit.
                </p>
                <div className="statistics">
                    <div>
                        <p className="statistics-number">12+</p>
                        <p className="statistics-details">Years Experiences</p>
                    </div>
                    <div>
                        <p className="statistics-number">28K</p>
                        <p className="statistics-details">Happy Customers</p>
                    </div>
                    <div>
                        <p className="statistics-number">222</p>
                        <p className="statistics-details">Trip Destination</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 col-12">
                <img className="category-img" src={creative_solution} />
            </div>
        </div>
    </div>
    </div>
  )
}

export default Solutions
