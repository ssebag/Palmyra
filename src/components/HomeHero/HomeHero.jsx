import React from 'react'
import './HomeHero.css'
import Program1 from './../../assets/gallery1.png'
import Program2 from './../../assets/gallery2.png'
import Program3 from './../../assets/gallery3.png'
import Camping_House from './../../assets/Home/icons/Camping-House.svg'
import Carrier from './../../assets/Home/icons/Carrier.svg'
import Hagia_Sophia from './../../assets/Home/icons/Hagia-Sophia.svg'
import Romance from './../../assets/Home/icons/Romance.svg'
import Shopping from './../../assets/Home/icons/Shopping.svg'
import Sunny_cloud from './../../assets/Home/icons/Sunny-cloud.svg'
import Swimming from './../../assets/Home/icons/Swimming.svg'
import HeroCarousel from '../HeroCarousel/HeroCarousel'
const HomeHero = () => {
  return (
    
      <section className="program-hero program-hero-home">
        <HeroCarousel title1="Explore the" title2="Now" title_warning="Magic Place" description="Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular." img1={Program1} img2={Program2} img3={Program3} />
        <div className="card search-bar">
            <div className="card-body">
                <div className="row">
                    <div className="col-md-3">
                        <i className="fas fa-map-marker-alt mx-1 text-warning"></i>
                        <label>Location</label>
                        <select name="location_id" className="form-control">
                            <option value="istanbul">Istanbul</option>
                            <option value="damascus">Damascus</option>
                            <option value="aleppo">Aleppo</option>
                        </select>
                    </div>
                    <div className="col-md-3">
                        <i className="fas fa-calendar-day mx-1 text-warning"></i>
                        <label>Date</label>
                        <input type="date" name="date" className="form-control" />
                    </div>
                    <div className="col-md-3">
                        <i className="fas fa-tag mx-1 text-warning"></i>
                        <label>Category</label>
                        <select name="location_id" className="form-control">
                            <option value="swimming">Swimming</option>
                            <option value="swimming">Swimming</option>
                            <option value="swimming">Swimming</option>
                        </select>
                    </div>
                    <div className="col-md-3">
                        <button className="btn btn-warning explore">Explore</button>
                    </div>
                </div>
            </div>
        </div>

        <div className="row search-mobile-bar">
            <div className="col-10 search-mobile-bar-parent">
                <input type="search" className="form-control" placeholder="Location . Data . Activity" />
                <button type="button" className="btn explore-mobile-modal" data-bs-toggle="modal"
                    data-bs-target="#searchModal">
                    <i className="fas fa-location-arrow"></i>
                </button>
            </div>
        </div>

        <div className="modal fade" id="searchModal" tabindex="-1" aria-labelledby="searchModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-body">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        <h5 className="modal-title text-center" id="searchModalLabel">
                            Search
                        </h5>
                        <br />
                        <div className="search-category">
                            <i className="fas fa-map-marker-alt red-icon"></i>
                            <label>Location</label>
                            <select name="location_id" className="form-control">
                                <option value="istanbul">Istanbul</option>
                                <option value="damascus">Damascus</option>
                                <option value="aleppo">Aleppo</option>
                            </select>
                        </div>
                        <br />
                        <div className="search-category">
                            <i className="fas fa-tag red-icon"></i>
                            <label>Category</label>
                            <br />
                            <div className="search-category-parent">
                                <label for="image-checkbox">
                                    <span>Swimming</span>
                                    <input type="checkbox" id="image-checkbox" style={{display: "none"}} />
                                    <img src={Swimming} alt="category" />
                                </label>
                            </div>
                            <div className="search-category-parent">
                                <span>Skiing</span>
                                <img src={Carrier} alt="" />
                            </div>
                            <div className="search-category-parent">
                                <span>Camping</span>
                                <img src={Camping_House} alt="" />
                            </div>
                            <div className="search-category-parent">
                                <span>Historical tour</span>
                                <img src={Hagia_Sophia} alt="" />
                            </div>
                            <div className="search-category-parent">
                                <span>Shopping</span>
                                <img src={Shopping} alt="" />
                            </div>
                            <div className="search-category-parent">
                                <span>Hiking</span>
                                <img src={Carrier} alt="" />
                            </div>
                            <div className="search-category-parent">
                                <span>With Kids</span>
                                <img src={Shopping} alt="" />
                            </div>
                            <div className="search-category-parent">
                                <span>Romantic</span>
                                <img src={Romance} alt="" />
                            </div>
                            <div className="search-category-parent">
                                <span>Natural activity</span>
                                <img src={Sunny_cloud} alt="" />
                            </div>
                            <br />
                            <div className="row search-category-button">
                                <button type="button" className="btn">Search Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
export default HomeHero
