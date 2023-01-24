import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

// const Quizzes = ({ quizList }) => {
//   const [quizzes, setQuizzes] = useState([])

//   useEffect(() => {
//     async function getQuizzes() {
//       const res = await fetch('https://opentdb.com/api.php')
//       const data = await res.json()
//       setQuizzes(data)
//     }
//     getQuizzes()
//   }, [])

const Quizzes = () => {
  const [quizzes, setQuizzes] = useState([])

  useEffect(() => {
    async function getQuizzes() {
      const res = await fetch('https://opentdb.com/api.php')
      const data = await res.json()
      const quizData = data.results
      
      const quizArray = []
      for (const quiz of quizData) {
        quizArray.push(quiz.title)
      }
      setQuizzes(quiz)
    }
    getQuizzes()
  }, [])

  return (
    <>
      <h1>All Quizzes</h1>
      <ul>
        {quizzes.length === 0 ? 'Loading...' : quizzes.map((quiz, index) => (
          <li key={index}>
            <Link to={`/quizzes/${quiz.title}`}>{quiz.title}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Quizzes
