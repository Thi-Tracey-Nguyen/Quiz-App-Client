import React from 'react'
import ShowQuiz from '../../components/ShowQuiz'
import logo from '../../assets/logo.png'
import getRandom from '../../utils/random-three-quizzes'

const Home = ({ quizzes }) => {

  return (
    <div className='home'>
      <div>
        <img src={logo} alt="Logo" className="logo" />
        <h2 className='mt-3'>Test your knowledge <br/> and have fun!</h2>
      </div>
      <div className='card-container'>
        {quizzes.length === 0 ? <h3>Loading...</h3> : getRandom(quizzes, 3).map((quiz, index) => (              
          <div key={index}>
            <ShowQuiz quiz={quiz}/>
          </div>
        ))}
      </div>
    </div>   
  )
}

export default Home