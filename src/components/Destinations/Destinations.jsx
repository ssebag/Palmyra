import React from 'react'
import './Destinations.css'
import destination1 from './../../assets/Home/destination1.png'
import destination2 from './../../assets/Home/destination2.png'
import destination3 from './../../assets/Home/destination3.png'
import destination4 from './../../assets/Home/destination4.png'
import destination5 from './../../assets/Home/destination5.png'
import { Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Destinations = () => {
  return (
    <div className="destination">
        <div className="mt-50 bg-dark mb-1">
            <div className="container">
                <h2 className="mb-4 pt-4 fw-bold text-white font-size-72">
                    Our <span className="text-warning">Destinations</span>
                </h2>
                
        
                <div className="row">
                    <Swiper
                        modules={[Autoplay, Pagination, Scrollbar, A11y]}
                       
                        loop={true}
                        autoplay={{
                            delay:2500,
                            disabledInteraction: false
                        }}
                        breakpoints={{
                        678: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                        870: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 50,
                        },
                        }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                    >                                  
                    <SwiperSlide><img className="destination-img" src={destination1} alt="" /></SwiperSlide>
                    <SwiperSlide><img className="destination-img destination-img-down" src={destination2} alt="" /></SwiperSlide>
                    <SwiperSlide><img className="destination-img" src={destination3} alt="" /></SwiperSlide>
                    <SwiperSlide> <img className="destination-img destination-img-down" src={destination4} alt="" /></SwiperSlide>
                    <SwiperSlide><img className="destination-img" src={destination5} alt="" /></SwiperSlide>
                    <SwiperSlide><img className="destination-img" src={destination1} alt="" /></SwiperSlide>
                    <SwiperSlide><img className="destination-img destination-img-down" src={destination2} alt="" /></SwiperSlide>
                    <SwiperSlide><img className="destination-img" src={destination3} alt="" /></SwiperSlide>
                    <SwiperSlide> <img className="destination-img destination-img-down" src={destination4} alt="" /></SwiperSlide>
                    <SwiperSlide><img className="destination-img" src={destination5} alt="" /></SwiperSlide>
                    </Swiper>
                </div>
                <h2 className="pt-4"></h2>
            </div>
        </div>
    </div>
  )
}

export default Destinations
