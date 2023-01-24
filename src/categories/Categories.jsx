import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import RandomCat from './RandomCat'

const Categories = () => {

  const [ categories, setCategories ] = useState([])

  useEffect(() => {
    async function fetchAPI() {
      const res = await fetch('https://opentdb.com/api.php?amount=10')
      const data = await res.json()
      const questions = data.results

      // see if this bit could be shortened
      const cat = []
      for (const question of questions) {
        cat.push(question.category)
      }
      setCategories(cat)
    }
    fetchAPI()
  }, [])

  return (
    <>
      <h2>Categories</h2>
      {categories.length === 0 ? 'Loading...' : categories.map((category, index) => (
        <p key={index}>
          <Link to={`/quizzes/${category}`}>{category}</Link>
        </p>
      ))}
      <RandomCat categories={categories}/>
    </>
  )
}

export default Categories