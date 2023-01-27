import React from 'react'
import { Link } from 'react-router-dom'
import ShowQuiz from '../take-a-quiz/ShowQuiz'

const EditQuizzes = ({ quizzes }) => {
  return (
    <>
      <h1>Choose a Quiz to edit or delete</h1>
      <ul> 
          {quizzes.length === 0 ? 'Loading...' : quizzes.map((quiz, index) => (
              <div key={index}>
                <ShowQuiz quiz={quiz}/>
                <ul>
                    <Link to={`quizzes/${quiz.title}/edit`}>Edit</Link>
                    <Link to={`quizzes/${quiz.title}/delete`}>Delete</Link>
                </ul>
              </div>
          ))}
        </ul>
    </>
  )
}

export default EditQuizzes