import React from 'react'
import ShowQuiz from '../categories/ShowQuiz'
import '../styles/CommonStyles.css'
import logo from '../assets/logo.png'

const Home = ({ quizzes }) => {
  const slicedQuizzes = quizzes.slice(0, 3)
  
  return (
    <>
      <div>
        <div>
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <h2>Test your knowledge and have fun!</h2>
        <br />
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