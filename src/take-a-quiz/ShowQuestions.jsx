import React, { useState } from 'react'

const ShowQuestions = ({ quiz }) => {

  // const [ index, setIndex ] = useState(0)
  const question = quiz.questions[0]

  // const handleClick = (e) => {
  //   setIndex(index ++)
  // }

  return (
    <>
      <h3 >{question.question}</h3>
      <p>{question.correctAnswer}</p>
      {question.incorrectAnswers.map((answer, index) => <p key={index}>{answer}</p>
      )}
      <button>Next</button>
    </>
  )
}

export default ShowQuestions