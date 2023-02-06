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
    <div class='flex-wrap'>
      { category ? (
      <>
        <p class = 'd-flex justify-content-center text-dark fw-bold'>Can't choose?</p>
        <button>
          <Link to={`/categories/${category.name}` } class = 'd-flex justify-content-center text-dark fw-bold' >
            Random Category
          </Link>
        </button>
      </>
      ) : '' 
    }
    </div>
    </>
  )
}

export default RandomCat