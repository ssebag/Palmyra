import React from 'react'
import './GetStart.css'
import Isolation_Mode from './../../assets/Home/Isolation_Mode.svg'

const GetStart = () => {
  return (
    <div className="get-started p-90px">
        <div className="row get-started-row">
            <div className="col-md-6">
                <h2 className="mb-4 pt-4 fw-bold text-white font-size-72">
                    Get Started With Us Today
                </h2>
                <p className="get-started-text">
                    Li Europan lingues es membres del sam familie. Lor separat
                    existentie es un myth. Por scientie, musica, sport etc, litot Europa
                    usa li sam vocabular.
                </p>
            </div>
            <div className="col-md-6 text-center get-started-customize">
                <img className="isolation_Mode" src={Isolation_Mode} alt="..." />
                <button type="button" className="btn get-started-btn" data-bs-toggle="modal"
                    data-bs-target="#customizeTripModal">
                    Customize your Trip
                    <i className="fas fa-location-arrow"></i>
                </button>
            </div>
        </div>
    </div>
  )
}

export default GetStart
