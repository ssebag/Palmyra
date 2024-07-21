import React from 'react'
import './History.css'
import our_history from './../../../assets/About/our-history.png'

const History = () => {
  return (
    <section className="history pt-4">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-12">
                    <img className="category-img" src={our_history} />
                </div>
                <div className="col-lg-6 col-12">
                    <h1 className="about-title">
                        Our History
                    </h1>
                    <p className="about-details">
                        We, at Ugarit, recruit and select our team carefully and based on certain criteria, because
                        manpower is the key to success we decided to hire the most skilled, talented and qualified human
                        resources. Our team is passionate about travel And tourism has years of experience in addition
                        to academic and technical knowledge, in order to maintain a competitive advantage our team is
                        always trained and supervised by professionals to be up-to-date in terms of tourism trends and
                        challenges.
                    </p>
                    <br />
                    <p className="about-details">
                        We, at Ugarit, recruit and select our team carefully and based on certain criteria, because
                        manpower is the key to success we decided to hire the most skilled, talented and qualified human
                        resources. Our team is passionate about travel And tourism has years of experience in addition
                        to academic and technical knowledge, in order to maintain a competitive advantage
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default History
