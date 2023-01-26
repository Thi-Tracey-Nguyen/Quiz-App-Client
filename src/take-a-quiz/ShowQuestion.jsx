import React, { useState } from 'react'

const ShowQuestions = ({ quiz }) => {

  const [ index, setIndex ] = useState(0)
  const question = quiz.questions[index]

  const handleClick = (e) => {
    setIndex(index+1)
  }

  return (
    <>
      <h3 >{question.question}</h3>
      <p>{question.correctAnswer}</p>
      {question.incorrectAnswers.map((answer, index) => <p key={index}>{answer}</p>
      )}
      { index < quiz.questions.length-1 ? <button onClick={ handleClick }>Next</button> : <h4>End of quiz</h4>}
    </>
  )
}

export default ShowQuestions