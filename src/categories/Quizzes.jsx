import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import RandomQuiz from './RandomQuiz'
import ShowQuiz from '../take-a-quiz/ShowQuiz'
import ReturnToTop from '../UI/ReturnToTop'

const Quizzes = ({ quizzes }) => {
  return (
    <>
      <h1>All Quizzes</h1>
      <ul>
        {quizzes.length === 0 ? 'Loading...' : quizzes.map((quiz, index) => (
          <div key={index}>
            <ShowQuiz quiz={quiz}/>
          </div>
        ))}
        <RandomQuiz quizzes={quizzes}/>
      </ul>
      <ReturnToTop />
    </>
  )
}

export default Quizzes
