import React from 'react'
import './HeroCarousel.css'

const HeroCarousel = ({title1, title2, title_warning, description, img1, img2, img3}) => {
  return (    
      <section className="program-hero program-hero-home">
        <div className="container">
            <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                <div className="row">
                    <div className="carousel-cap text-white col-lg-7 col-12">
                        <h1 className="carousel-heading fw-bold font-size-72">
                            {title1} <span className="text-warning">{title_warning}</span> {title2}
                        </h1>
                        <p className="carousel-text text-light">
                          {description}
                        </p>
                        <i className="fa fa-solid fa-arrow-down text-light"></i>
                        <div className="slider-counter">
                            <ol className="carousel-indicators">
                                <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active">01
                                </li>
                                <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1">02</li>
                                <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2">03</li>
                            </ol>
                            <p className="text-light">________________________</p>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark"
                                data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden text-light">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark"
                                data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden text-light">Next</span>
                            </button>
                        </div>
                    </div>
                    <div className="col-lg-5 col-12">
                        <div className="carousel-item category-img" data-bs-interval="10000">
                            <img className="category-img" src={img3} />
                        </div>
                        <div className="carousel-item active category-img" data-bs-interval="10000">
                            <img className="category-img" src={img1} />
                        </div>
                        <div className="carousel-item category-img" data-bs-interval="10000">
                            <img className="category-img" src={img2} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
export default HeroCarousel
