import React from 'react'
import './AboutIstanbul.css'
import SearchCategory from './../SearchCategory/SearchCategory'
import {SearchInformation} from '../../data/SearchInformation.js'
import our_history from './../../assets/About/our-history.png'
const AboutIstanbul = () => {
  return (
    <section className="mt-50">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-12">
                    <h1 className="fw-bold font-size-72">About Istanbul</h1>
                    <p className="">
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis etcaera praesentium
                        voluptatum
                        deleniti atque corrupti quos dolores et quas molestias et excepturi sint occaecati cupiditate
                        non
                        provident, similique sunt in culpa qui wuis officia deserunt mollitia animi, id est laborum et
                        dolorum
                        fuga. Et harum quidem et rerum facilis est et expedita distinctio. Nam libero tempore, cum
                        soluta nobis
                        est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere est possimus,
                        omnis
                        voluptas assumenda est, omnis dolor repellendus. Temporibus et autem quibusdam et aut officiis
                        debitis
                        aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non
                        recusandae.
                        Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias
                        quite.
                    </p>
                    <div className="search-category">
                       {
                        SearchInformation.map((el,index) => (
                         <SearchCategory searchName={el.name} searchImage={el.image} /> 
                        ))
                       }
                    </div>
                </div>
                <div className="col-lg-6 col-12">
                    <img src={our_history} className="category-img p-50px" alt="About Program" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutIstanbul
