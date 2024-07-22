import React from 'react'
import './RelatedArticles.css'
import {Articles} from './../../data/Articles.js'

const RelatedArticles = () => {
  return (
    <section className="related-articles mt-4">
        <div className="container">
            <h2 className="text-dark related-articles-title font-size-72">
                Related <span className="text-warning">Articles</span>
            </h2>
            <div className="row  mt-50">
             {
                Articles.map((el, index) => (
                    <div className="related-articles-card mb-4">
                        <div className="card related-articles-item">
                            <div className="card-header related-articles-header">
                                <img src={el.image} className="related-articles-img" alt="article image" />
                            </div>
                            <div className="card-body related-articles-body">
                                <div className="related-articles-body-title">
                                    <p className="related-articles-body-p">{el.person}</p><span>|</span>
                                    <p>{el.date}</p><span>|</span>
                                    <p>{el.comment} Comments</p>
                                </div>
                                <h4>{el.title}</h4>
                                <p className="overview-text">{el.description}</p>
                                <a href="#" className="related-articles-body-a">Read More </a>
                            </div>
                        </div>
                  </div>
                ))
             }
            </div>
        </div>
    </section>
  )
}

export default RelatedArticles
