import React, {useEffect, useState} from 'react'
import RandomQuiz from './RandomQuiz'
import ShowQuiz from '../take-a-quiz/ShowQuiz'
import ReturnToTop from '../UI/ReturnToTop'

const Quizzes = ({ quizzes }) => {

  return (
    <>
      <h1>All Quizzes</h1>
      {quizzes.length === 0 ? 'Loading...' : quizzes.map((quiz, index) => (
        <div key={index}>
          <ShowQuiz quizzes={quizzes}/>
        </div>
      ))}
      <RandomQuiz quizzes={quizzes} />
      <ReturnToTop />
    </>
  )
}

export default Quizzes
