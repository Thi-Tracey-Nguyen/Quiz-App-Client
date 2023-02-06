import React, {useEffect, useState} from 'react'
import RandomQuiz from './RandomQuiz'
import ShowQuiz from './ShowQuiz'
import ReturnToTop from '../UI/ReturnToTop'

const Quizzes = ({ quizzes, setQuizzes, setQuestions }) => {
  useEffect(() => {
    async function getQuizzes() {
      const res = await fetch('https://quiz-app-server-production-09e8.up.railway.app/quizzes')
      const data = await res.json()
      setQuizzes(data)
    }
    getQuizzes()
  }, [])

  useEffect(() => {
    async function getQuestions() {
      const res = await fetch('https://quiz-app-server-production-09e8.up.railway.app/questions')
      const data = await res.json()
      setQuestions(data)
    }
    getQuestions()
  }, [quizzes])

  return (
    <>
      <h2>All Quizzes</h2>
      {isNaN(quizzes) ? quizzes.map((quiz, index) => (
          <div key={index}>
            <ShowQuiz quiz={quiz} />
          </div>
        )) : 'Loading...' 
      }
      <RandomQuiz quizzes={quizzes} />
      <div>
        <ReturnToTop />
      </div>
    </>
  )
}

export default Quizzes
