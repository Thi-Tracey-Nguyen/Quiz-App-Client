import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ReturnToTop from '../UI/ReturnToTop'
import RandomCat from './RandomCat'

const Categories = ({ categories }) => {

  return (
    <>
      <h2>Categories</h2>
      {categories.length === 0 ? 'Loading...' : categories.map((category, index) => (
        <p key={index}>
          <Link to={`/categories/${category.name}`}>{category.name}</Link>
        </p>
      ))}
      <RandomCat categories={categories}/>
      <div>
        <ReturnToTop />
      </div>
    </>
  )
}

export default Categories