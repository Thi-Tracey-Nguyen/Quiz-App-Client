import React from 'react'
import ShowQuiz from '../categories/ShowQuiz'

const Home = ({ quizzes }) => {
  const slicedQuizzes = quizzes.slice(0, 3)
  
  return (
    <>
      <div>
        <h1>The Quiz App</h1>
        <h2>Test your knowledge and have fun!</h2>
        <h4>Featured Quizzes</h4>
      </div>
        <ul> 
          {slicedQuizzes.length === 0 ? 'Loading...' : slicedQuizzes.map((quiz, index) => (
              <div key={index}>
                <ShowQuiz quiz={quiz}/>
              </div>
          ))}
        </ul>
    </>
  )
}

export default Home