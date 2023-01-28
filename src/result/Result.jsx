import React from 'react'

const Result = ({ answers, quiz }) => {
  return (
    <>
      <h1>Result Page</h1>
      <p>Your answers are:</p>
      {answers.map((answer, index) => <p key={index}>{answer}</p>)}
      <p>Correct answers are:</p>
      {quiz.questions.map((question, index) => <p key={index}>{question.correctAnswer}</p>)}
    </>
    
  )
}

export default Result