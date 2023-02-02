import React from 'react'
import { Link } from 'react-router-dom'

const RandomCat = ({ categories }) => {

  // function to get a random category from the categories array
  function randomCat(array) { 
    if(array !== undefined) {
    const index = Math.floor(Math.random()*(array.length)) //generate a random index
    return array[index]
    }
  }

  const category = randomCat(categories)

  return (
    <>
      { category ? (
      <>
        <h1>Can't choose?</h1>
        <button>
          <Link to={`/categories/${category.name}`}>
            Random Category
          </Link>
        </button>
      </>
      ) : '' }
    </>
  )
}

export default RandomCat