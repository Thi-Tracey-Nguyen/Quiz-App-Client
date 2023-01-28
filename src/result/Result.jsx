import React from 'react'

const Result = ({ answers, quiz }) => {

  let points = 0

  function calculatePoints(answers, quiz) {
    for (let i = 0; i < answers.length; i++) {
      if (answers[i] === quiz.questions[i].correctAnswer) {
        points = points + 1
      }
  }}

  calculatePoints(answers, quiz)

  return (
    <>
      <h1>Result Page</h1>
      <h2>Your points: {points}</h2>
      <p>Your answers are:</p>
      {answers.map((answer, index) => <p key={index}>{answer}</p>)}
      <p>Correct answers are:</p>
      {quiz.questions.map((question, index) => <p key={index}>{question.correctAnswer}</p>)}
    </>
    
  )
}

export default Result