import React from 'react'
import ShowQuiz from '../categories/ShowQuiz'
import '../styles/CommonStyles.css'
import logo from '../assets/logo.png'

const Home = ({ quizzes }) => {
  const slicedQuizzes = quizzes.slice(0, 3)
  
  return (
    <>
    <div class='main-body flex-wrap'>
      <div>
        <h1 class='d-flex justify-content-center'>The Quiz App</h1>
        <div class="d-flex justify-content-center">
           <img src={logo} alt="Logo" width="200" height="200" />
        </div>

        <h2>Test your knowledge and have fun!</h2>
        <br />
        <h4 class='d-flex justify-content-center'>Featured Quizzes</h4>
      </div>
        <ul class='d-flex justify-content-center flex-wrap '> 
          {slicedQuizzes.length === 0 ? 'Loading...' : slicedQuizzes.map((quiz, index) => (              
              <div key={index} class="card m-3" style={{width: "15rem"}}>
                <ShowQuiz quiz={quiz}/>
              </div>
          ))}
        </ul>
     </div>   
    </>
  )
}

export default Home