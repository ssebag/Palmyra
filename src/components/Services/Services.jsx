import React from 'react'
import './Services.css'
import hotel from './../../assets/Home/icons/hotel.svg'
import flight from './../../assets/Home/icons/flight.svg'
import tour from './../../assets/Home/icons/tour.svg'
import vip from './../../assets/Home/icons/vip.svg'
const Services = () => {
  return (
   <div className="services">
        <div className="container">
            <h2 className="mb-4 fw-bold font-size-72">
                <span className="text-warning">Services</span> We
            </h2>
            <h2 className="fw-bold font-size-72">Provide</h2>
            <div className="row mt-50">
                <div className="col-md-3 service-item">
                    <div className="service-icon">
                        <img src={hotel} alt="..."  />
                    </div>
                    <h4>Hotel Booking</h4>
                    <p className="service-text">
                        Li Europan lingues es membres del sam familie. Lor separat
                        existentie es un myth.
                    </p>
                </div>
                <div className="col-md-3 service-item">
                    <div className="service-icon">
                      <img src={flight} alt='...' />
                    </div>
                    <h4>Flight Booking</h4>
                    <p className="service-text">
                        Li Europan lingues es membres del sam familie. Lor separat
                        existentie es un myth.
                    </p>
                </div>
                <div className="col-md-3 service-item">
                   <div className="service-icon">
                      <img src={tour} alt="..." />
                   </div>

                    <h4>Daily Tour</h4>
                    <p className="service-text">
                        Li Europan lingues es membres del sam familie. Lor separat
                        existentie es un myth.
                    </p>
                </div>
                <div className="col-md-3 service-item">
                   <div className="service-icon">
                      <img src={vip} alt="..." />
                   </div> 
                      <h4>VIP Transfer</h4>
                    <p className="service-text">
                        Li Europan lingues es membres del sam familie. Lor separat
                        existentie es un myth.
                    </p>
                </div>
            </div>
        </div>
   </div>
  )
}

export default Services
