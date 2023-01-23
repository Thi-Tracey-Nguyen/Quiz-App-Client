import React, { useEffect, useState } from 'react'

const Categories = () => {

  const [ categories, setCategories ] = useState([])

  useEffect(() => {
    async function fetchAPI() {
      const res = await fetch('https://opentdb.com/api.php?amount=10')
      const data = await res.json()
      const questions = data.results
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
      {categories.map((category, index) => <p key={index}>{category}</p>)}
    </>
  )
}

export default Categories