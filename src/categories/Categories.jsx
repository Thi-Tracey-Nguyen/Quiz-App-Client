import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ReturnToTop from '../UI/ReturnToTop'
import RandomCat from './RandomCat'

const Categories = () => {

  const [ categories, setCategories ] = useState([])
  
  useEffect(() => {
    async function getCategories() {
      const res = await fetch('https://quiz-app-server-production-09e8.up.railway.app/categories')
      const data = await res.json()
      setCategories(data)
    }
    getCategories()
  }, [])

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