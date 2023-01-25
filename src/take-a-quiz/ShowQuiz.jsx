import React from 'react'
import ShowQuestions from './ShowQuestions'

const ShowQuiz = ({ quiz }) => {
  return (
    <>
      <h1>{quiz.title}</h1>
      <ShowQuestions quiz={quiz} />
    </>
    
  )
}

export default ShowQuiz