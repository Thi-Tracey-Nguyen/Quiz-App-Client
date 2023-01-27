import React from 'react'
import { Link } from 'react-router-dom'

const RandomQuiz = ({ quizzes }) => {
  // function to get a random quiz from the quizzes array
  function randomQuiz(array) { 
    const index = Math.floor(Math.random()*(array.length)) //generate a random index
    return array[index]
  }

  const quiz = randomQuiz(quizzes)
  return (
    <>
      <p>Can't choose?</p>
      <button>
        <Link to={`/quizzes/${quiz._id}`}>
          Random Quiz
        </Link>
      </button>
    </>
  )
}

export default RandomQuiz