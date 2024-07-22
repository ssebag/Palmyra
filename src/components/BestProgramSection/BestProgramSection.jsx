import React from 'react'
import './BestProgramSection.css'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {ProgramInformation} from './../../data/ProgramsInformation.js'

const BestProgramSection = ({title, title_warning}) => {
  return (
    <div className="best-program mt-50">
        <div className="container">
            <h1 className="font-size-72 fw-bold">{title}</h1>
            <h1 className="text-warning font-size-72 fw-bold mb-4">{title_warning}</h1>
            <div className="row"> 
                <Swiper
                        modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
                        loop={true}
                        navigation
                        autoplay={{
                            delay:2500,
                            disabledInteraction: false
                        }}
                        breakpoints={{
                        678: {
                            slidesPerView: 1,
                            spaceBetween: 30,
                        },
                        870: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                        }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                    >        
                    {
                        ProgramInformation.map((el,index) => (
                            <SwiperSlide>
                               <div className="card program-card">
                                    <img src={el.image} className="card-img-top program-img" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            <i className="fa fa-map-marker text-warning"></i> {el.address}
                                        </h5>
                                        <p className="card-text program-text">
                                          {el.details}
                                        </p>
                                        <div className="row">
                                            <div className="col-md-4">
                                                <i className="fa fa-calendar text-warning mx-1"></i>
                                                <span className="program-detail-text">{el.day} Days</span>
                                            </div>
                                            <div className="col-md-4">
                                                <i className="fa fa-smile text-warning"></i>
                                                <span className="program-detail-text">{el.place} Places</span>
                                            </div>
                                            <div className="col-md-4">
                                                <i className="fas fa-star orange-icon text-warning"></i>
                                                <span className="program-detail-text">{el.rate}</span>
                                            </div>
                                        </div>
                                        <a href="./program-details.html" className="btn program-link">Explore</a>
                                    </div>
                                </div>
                          </SwiperSlide>
                        ))
                       }                         
                    </Swiper>
                <a className="text-warning mt-50 fw-bold best-program-link" href="#">See more</a>
            </div>
        </div>
    </div>
  )
}

export default BestProgramSection
