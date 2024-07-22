import React from 'react'
import './AboutUs.css'
import aboutus from './../../assets/aboutus.jpg'

const AboutUs = () => {
  return (
    <div className="aboutus mt-50">
        <div className="container">
            <h2 className="mb-4 pt-4 fw-bold font-size-72">
                What <span className="text-warning">Tourist</span>
            </h2>
            <h2 className="fw-bold font-size-72"> Says About us</h2>
            <div id="carouselAboutus" className="carousel slide mt-50" data-bs-ride="carousel">
                <div className="carousel-indicators carousel-indicators-aboutus">
                    <button type="button" data-bs-target="#carouselAboutus" data-bs-slide-to="0" className="active"
                        aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselAboutus" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselAboutus" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselAboutus" data-bs-slide-to="3"
                        aria-label="Slide 4"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="row">
                            <div className="col-md-6">
                                <p className="aboutus-text">
                                    Palmira, thank you so much for a well organized trip. We had
                                    a wonderful time. Hard to believe it's already done and
                                    past. Weather was awesome, the hotels were nice, thank you
                                    for everything!
                                </p>
                                <p className="aboutus-name">Mr.Dived Darwan</p>
                               
                            </div>
                            <div className="col-md-6">
                                <img src={aboutus} className="aboutus-img" alt="about us" />
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="row">
                            <div className="col-md-6">
                                <p className="aboutus-text">
                                    Palmira, thank you so much for a well organized trip. We had
                                    a wonderful time. Hard to believe it's already done and
                                    past. Weather was awesome, the hotels were nice, thank you
                                    for everything!
                                </p>
                                <p className="aboutus-name">Mr.Dived Darwan</p>
                                <p className="aboutus-job-title">
                                    General Manager Bus Association
                                </p>
                            </div>
                            <div className="col-md-6">
                                <img src={aboutus} className="aboutus-img" alt="about us" />
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="row">
                            <div className="col-md-6">
                                <p className="aboutus-text">
                                    Palmira, thank you so much for a well organized trip. We had
                                    a wonderful time. Hard to believe it's already done and
                                    past. Weather was awesome, the hotels were nice, thank you
                                    for everything!
                                </p>
                                <p className="aboutus-name">Mr.Dived Darwan</p>
                                <p className="aboutus-job-title">
                                    General Manager Bus Association
                                </p>
                            </div>
                            <div className="col-md-6">
                                <img src={aboutus} className="aboutus-img" alt="about us" />
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="row">
                            <div className="col-md-6">
                                <p className="aboutus-text">
                                    Palmira, thank you so much for a well organized trip. We had
                                    a wonderful time. Hard to believe it's already done and
                                    past. Weather was awesome, the hotels were nice, thank you
                                    for everything!
                                </p>
                                <p className="aboutus-name">Mr.Dived Darwan</p>
                                <p className="aboutus-job-title">
                                    General Manager Bus Association
                                </p>
                            </div>
                            <div className="col-md-6">
                                <img src={aboutus} className="aboutus-img" alt="about us" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutUs
