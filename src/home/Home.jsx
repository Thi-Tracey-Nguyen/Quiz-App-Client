import React from 'react'
import { Link } from 'react-router-dom'

const Home = ({ quizzes }) => {
  const slicedQuizzes = quizzes.slice(0, 3)
  
  return (
    <>
      <div>
        <h1>The Quiz App</h1>
        <h2>Test your knowledge and have fun!</h2>
      </div>
        <ul> 
          {slicedQuizzes.length === 0 ? 'Loading...' : slicedQuizzes.map((quiz, index) => (
              <div key={index}>
                <Link to={`quizzes/${quiz.title}`}>{quiz.title}</Link>
                <p>Author: {quiz.author}</p>
                <p>{quiz.questions.length} questions</p>
              </div>
          ))}
        </ul>
    </>
  )
}

export default Home