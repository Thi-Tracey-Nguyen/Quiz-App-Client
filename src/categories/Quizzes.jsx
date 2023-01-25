import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Quizzes = ({ quizzes }) => {
  return (
    <>
      <h1>All Quizzes</h1>
      <ul>
        {quizzes.length === 0 ? 'Loading...' : quizzes.map((quiz, index) => (
          <p key={index}>
            <Link to={`quizzes/${index}`}>{quiz.title}</Link>
          </p>
        ))}
      </ul>
    </>
  )
}

export default Quizzes
