import React, { useState, useEffect } from 'react'
import { Outlet, useParams, Link } from 'react-router-dom'
import EditAQuiz from './EditAQuiz'

const QuizWrapper = ({ categories }) => {
  const { quizId } = useParams()
    const [quiz, setQuiz] = useState('')
    
    useEffect(() => {
      async function getQuiz() {
        const res = await fetch(`https://quiz-app-server-production-09e8.up.railway.app/quizzes/${quizId}`)
        const data = await res.json()
        setQuiz(data)
      }
      getQuiz()
    }, [quizId])

    return (
      <>
        {quiz ? <h1>Editing {quiz.title} </h1> : <h4>Loading... </h4>}
        {/* <Link to={`./general`}> General </Link> */}
        {/* <Link to={`./questions`}> Edit questions </Link> */}
        <EditAQuiz categories={categories} quiz={quiz} />
        <Outlet context={{ quiz }} />
      </>
    )
  }

export default QuizWrapper