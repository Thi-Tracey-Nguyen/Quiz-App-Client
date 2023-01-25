import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import RandomCat from './RandomCat'

const Categories = ({ categories }) => {
  return (
    <>
      <h2>Categories</h2>
      {categories.length === 0 ? 'Loading...' : categories.map((category, index) => (
        <p key={index}>
          <Link to={`/categories/${index}`}>{category.name}</Link>
        </p>
      ))}
      <RandomCat categories={categories}/>
    </>
  )
}

export default Categories