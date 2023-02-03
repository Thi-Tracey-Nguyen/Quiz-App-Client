import React, {useEffect, useState} from 'react'
import RandomQuiz from './RandomQuiz'
import ShowQuiz from './ShowQuiz'
import ReturnToTop from '../UI/ReturnToTop'

const Quizzes = ({ quizzes }) => {

  return (
    <>
      <h2>All Quizzes</h2>
      {quizzes.length === 0 ? 'Loading...' : quizzes.map((quiz, index) => (
        <div key={index}>
          <ShowQuiz quiz={quiz} />
        </div>
      ))}
      <RandomQuiz quizzes={quizzes} />
      <div>
        <ReturnToTop />
      </div>
    </>
  )
}

export default Quizzes
