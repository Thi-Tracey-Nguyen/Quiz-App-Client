import React from 'react'
import { Link } from 'react-router-dom'

const RandomCat = ({ categories }) => {

  // function to get a random category from the categories array
  function randomCat(array) { 
    const index = Math.floor(Math.random()*(array.length)) //generate a random index
    return array[index]
  }

  const category = randomCat(categories)

  return (
    <>
      <p>Can't choose</p>
      <button>
        <Link to={`/quizzes/${category}`}>
          Random Category
        </Link>
      </button>
    </>
  )
}

export default RandomCat