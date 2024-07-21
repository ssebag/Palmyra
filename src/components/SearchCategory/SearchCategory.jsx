import React from 'react'
import './SearchCategory.css'

const SearchCategory = ({searchName, searchImage}) => {
  return (
      <div className="search-category-parent">
            <span>{searchName}</span>
            <img src={searchImage} alt="" />
       </div>          
  )
}

export default SearchCategory
