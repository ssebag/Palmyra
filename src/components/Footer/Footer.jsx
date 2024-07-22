import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer bg-dark">
        <div className="row">
            <div className="col-md-6">
                <a href="./index.html" className="font-size-30 fw-bold text-light">
                   <span className="text-warning">P</span>almira
                </a>
                <p className="footer-text">
                    Li Europan lingues es membres del sam familie. Lor separat
                    existentie es un myth. Por scientie, musica, sport etc, litot Europa
                    usa li sam vocabular. Li lingues differe solmen in li.
                </p>
                <div className="row social">
                    <div className="col-1">
                        <a href="#">
                            <i className="fab fa-facebook-f text-warning"></i>
                        </a>
                    </div>
                    <div className="col-1">
                        <a href="#">
                            <i className="fab fa-twitter text-warning"></i>
                        </a>
                    </div>
                    <div className="col-1">
                        <a href="#">
                            <i className="fab fa-instagram text-warning"></i>
                        </a>
                    </div>
                    <div className="col-1">
                        <a href="#">
                            <i className="fab fa-youtube text-warning"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="col-md-3 quick-links">
                <h2>Quick Links</h2>
                <div>
                    <a href="#">Destination</a>
                    <a href="./best-program.html">Programs</a>
                    <a href="#">Testimonial</a>
                    <a href="#">Contact Us</a>
                </div>
            </div>
            <div className="col-md-3 contact-us">
                <h2>Contact Us</h2>
                <div className="row">
                    <div className="col-md-1">
                        <i className="fas fa-envelope text-warning"></i>
                    </div>
                    <div className="col-md-11">
                        <p>info@palmira.com</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-1">
                        <i className="fas fa-map-marker-alt text-warning"></i>
                    </div>
                    <div className="col-md-11">
                        <p>
                           Syria / Damascus
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-1">
                        <i className="fas fa-phone text-warning"></i>
                    </div>
                    <div className="col-md-11">
                        <p>+963 999 666 555</p>
                    </div>
                </div>
            </div>
        </div>
        <hr className="text-white" />
        <div className="row">
            <p className="text-white text-center">Ⓒ 2024 All rights reserved palmira</p>
        </div>
    </footer>
  )
}

export default Footer
