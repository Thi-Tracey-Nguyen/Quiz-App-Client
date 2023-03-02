import React from 'react'
import ShowQuiz from '../categories/ShowQuiz'
import '../styles/CommonStyles.css'
import logo from '../assets/logo.png'

const Home = ({ quizzes }) => {
  const slicedQuizzes = quizzes.slice(0, 3)
  
  return (
    <>
      <div>
        <img src={logo} alt="Logo" className="logo" />
        <h2>Test your knowledge <br/> and have fun!</h2>
        <br />
      </div>
      <div className='card-container'>
        {slicedQuizzes.length === 0 ? <h3>Loading...</h3> : slicedQuizzes.map((quiz, index) => (              
          <div key={index}>
            <ShowQuiz quiz={quiz}/>
          </div>
        ))}
      </div>
    </>   
  )
}

export default Home