import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <a className="navbar-brand font-size-30 fw-bold" href="./index.html">
                <span className="text-warning">P</span>almira
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">
                            Destinations</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="./best-program.html">Programs</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="./about.html">About us</a>
                    </li>
                </ul>
                <div>
                    <button type="button" className="btn customize-trip-btn" data-bs-toggle="modal"
                        data-bs-target="#customizeTripModal">
                        Customize your Trip
                        <i className="fas fa-location-arrow"></i>
                    </button>
                </div>
            </div>
        </div>
    </nav>

  )
}

export default Navbar