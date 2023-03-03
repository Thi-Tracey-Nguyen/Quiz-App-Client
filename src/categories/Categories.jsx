import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ReturnToTop from '../UI/ReturnToTop'
import RandomCat from './RandomCat'
import '../styles/CommonStyles.css'

const Categories = ({ categories }) => {

  return (
    <>
    <div className='main-body flex-wrap' style = {{height: '100vh'}}>
      <h1>Categories</h1>
      <div className='card-container'>
        {categories.length === 0 ? 'Loading...' : categories.map((category, index) => (
          <div key={index} className="cat-card">
            <Link to={`/categories/${category.name}`} class='category'>{category.name}</Link>
          </div>
        ))}
      </div>
      <RandomCat categories={categories}/>      
      <ReturnToTop />
      
    </div>    
    </>
  )
}

export default Categories