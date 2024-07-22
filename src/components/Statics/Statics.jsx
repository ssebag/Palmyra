import React from 'react'
import './Statics.css'
import smile_icon from './../../assets/Home/icons/smile-icon.svg'
import google from './../../assets/Home/icons/google.png'
import Icon_Like from './../../assets/Home/icons/Icon_Like.svg'
const Statics = () => {
  return (
   <div className="statistics">
        <div className="container mt-50 w-68">
            <div className="row statistics text-center">
                <div className="col-md-4 p-50px">
                    <img src={smile_icon} />
                    <p className="mt-4"><span className="fw-bold">Friendly</span> customer support team</p>
                </div>
                <div className="col-md-4 p-50px google-img">
                    <div>
                        <img src={google} style={{width: "134px;"}} />
                        <div className="stars">
                            <i className="fas fa-star orange-icon font-size-20 text-warning"></i>
                            <i className="fas fa-star orange-icon font-size-20 text-warning"></i>
                            <i className="far fa-star orange-icon font-size-20 text-warning"></i>
                            <i className="far fa-star orange-icon font-size-20 text-warning"></i>
                            <i className="far fa-star orange-icon font-size-20 text-warning"></i>
                        </div>
                    </div>
                    <p>
                        <span className="fw-bold">4.4 out of 5 stars</span> from 70+ total
                        reviews
                    </p>
                </div>
                <div className="col-md-4 p-50px">
                    <img src={Icon_Like} />
                    <p className="mt-4">Booking <span className="fw-bold">without Previous</span> Payment</p>
                </div>
            </div>
        </div>
   </div>
  )
}

export default Statics
