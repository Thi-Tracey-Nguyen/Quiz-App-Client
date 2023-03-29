import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ReturnToTop from '../../components/UI/ReturnToTop'
import RandomCat from '../../components/RandomCat'

const Categories = ({ categories }) => {

  return (
    <div className='home'>
      <h1>Categories</h1>
      <div className='cat-card-container'>
        {categories.length === 0 ? 'Loading...' : categories.map((category, index) => (
          <div key={index} className="cat-card">
            <Link to={`/categories/${category.name}`} class='category'>{category.name}</Link>
          </div>
        ))}
      </div>
      <RandomCat categories={categories}/>      
      <ReturnToTop />
    </div>    
  )
}

export default Categories