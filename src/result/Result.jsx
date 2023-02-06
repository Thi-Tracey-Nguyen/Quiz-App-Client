import React from 'react'
import '../styles/CommonStyles.css'

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
    <div className='main-body flex-wrap' style = {{height: '100vh'}}>
      <h1>Result Page</h1>
      <h2>Your points: {points}</h2>
      <br/>
      <p className='fw-bold'>Your answers are:</p>
      {answers.map((answer, index) => <p key={index}>{answer}</p>)}
      <br/>           
      <p className='fw-bold'>Correct answers are:</p>
      {quiz.questions.map((question, index) => <p key={index}>{question.correctAnswer}</p>)}
    </div>
    </>
    
  )
}

export default Result