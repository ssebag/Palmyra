import React from 'react'
import './Journey.css'
import our_journey from './../../assets/aboutus.jpg'

const Journey = () => {
  return (
    <section className="journey">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-12">
                    <h1 className="about-title">
                        Our Journey
                    </h1>
                    <p className="about-details">
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
                        consequat duis enim velit mollit.
                    </p>
                    <div className="journey-details flex-col">
                        <div>
                            <p className="date">2005 - 2007 </p>
                            <p className="details">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        <div>
                            <p className="date">2007 - 2012 </p>
                            <p className="details">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        <div>
                            <p className="date">2012 - Now</p>
                            <p className="details">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-12">
                    <img className="journey-img" src={our_journey} />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Journey
