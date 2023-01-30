import React, {useEffect, useState} from 'react'
import RandomQuiz from './RandomQuiz'
import ShowQuiz from '../take-a-quiz/ShowQuiz'
import ReturnToTop from '../UI/ReturnToTop'

const Quizzes = () => {

  const [quizzes, setQuizzes] = useState([])

  useEffect(() => {
    async function getQuizzes() {
      const res = await fetch('https://quiz-app-server-production-09e8.up.railway.app/quizzes')
      const data = await res.json()
      setQuizzes(data)
    }
    getQuizzes()
  }, [])

  return (
    <>
      <h1>All Quizzes</h1>
      {quizzes.length === 0 ? 'Loading...' : quizzes.map((quiz, index) => (
        <div key={index}>
          <ShowQuiz quiz={quiz}/>
        </div>
      ))}
      <RandomQuiz quizzes={quizzes} />
      <ReturnToTop />
    </>
  )
}

export default Quizzes
