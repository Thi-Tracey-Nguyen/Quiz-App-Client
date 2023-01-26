import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import RandomQuiz from './RandomQuiz'

const Quizzes = ({ quizzes }) => {
  return (
    <>
      <h1>All Quizzes</h1>
      <ul>
        {quizzes.length === 0 ? 'Loading...' : quizzes.map((quiz, index) => (
          <p key={index}>
            <Link to={`/quizzes/${quiz._id}`}>{quiz.title}</Link>
          </p>
        ))}
        <RandomQuiz quizzes={quizzes}/>
      </ul>
    </>
  )
}

export default Quizzes
