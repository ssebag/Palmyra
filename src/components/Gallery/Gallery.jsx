import React from 'react'
import './Gallery.css'
import gallery1 from './../../assets/Home/gallery1.png'
import gallery2 from './../../assets/Home/gallery2.png'
import gallery3 from './../../assets/Home/gallery3.png'
import gallery4 from './../../assets/Home/gallery4.png'
import gallery5 from './../../assets/Home/gallery5.png'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const Gallery = () => {
  return (
    <div className="gallery bg-dark p-50px">
        <h2 className="mb-4 pt-4 fw-bold text-white font-size-72">
            Our <span className="text-warning">Gallery</span>
        </h2>
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
                    <SwiperSlide><img src={gallery1} className="gallery-img galleryImage" alt="gallery" /></SwiperSlide>
                    <SwiperSlide><img src={gallery2} className="gallery-img galleryImage" alt="gallery" /></SwiperSlide>
                    <SwiperSlide><img src={gallery3} className="gallery-img galleryImage" alt="gallery" /></SwiperSlide>
                    <SwiperSlide><img src={gallery4} className="gallery-img galleryImage" alt="gallery" /></SwiperSlide>
                    <SwiperSlide><img src={gallery5} className="gallery-img galleryImage" alt="gallery" /></SwiperSlide>
                    <SwiperSlide><img src={gallery1} className="gallery-img galleryImage" alt="gallery" /></SwiperSlide>
                    <SwiperSlide><img src={gallery2} className="gallery-img galleryImage" alt="gallery" /></SwiperSlide>
                    <SwiperSlide><img src={gallery3} className="gallery-img galleryImage" alt="gallery" /></SwiperSlide>
                    <SwiperSlide><img src={gallery4} className="gallery-img galleryImage" alt="gallery" /></SwiperSlide>
                    <SwiperSlide><img src={gallery5} className="gallery-img galleryImage" alt="gallery" /></SwiperSlide>
             </Swiper>
        </div>    
        <div id="galleryModal" className="gallery-modal">
            <span className="gallery-modal-close">&times;</span>
            <img className="gallery-modal-content" id="modalImg" />
        </div>
    </div>
  )
}

export default Gallery
