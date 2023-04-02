import React, { useEffect, useState } from "react"
import RandomQuiz from "../../components/RandomQuiz"
import ShowQuiz from "../../components/ShowQuiz"
import ReturnToTop from "../../components/UI/ReturnToTop"
import { getData } from "../../utils/fetch-API"

const AllQuizzes = ({ quizzes, setQuizzes, questions }) => {
  
  useEffect(() => {
    async function getQuizzes() {
      const res = await getData('quizzes/')
      const data = await res.json()
      setQuizzes(data)
    }
    getQuizzes()
  }, [questions])

  return (
    <div className='home'>
      <h1>All Quizzes</h1>
        <div className='card-container'>
          {isNaN(quizzes) ? quizzes.map((quiz, index) => (
              <div key={index} data-testid='quiz' >
                <ShowQuiz quiz={quiz} />
              </div>
            )) : 'Loading...' 
          }
        </div>
      <RandomQuiz quizzes={quizzes} />
      <div>
        <ReturnToTop />
      </div>
    </div>
  )
}

export default AllQuizzes