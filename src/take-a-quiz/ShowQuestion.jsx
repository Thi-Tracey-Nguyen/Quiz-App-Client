import React, { useState,useEffect } from 'react'

const ShowQuestions = ({ quiz }) => {

  const [ index, setIndex ] = useState(0)  
  const question = quiz.questions[index]
  const [timeLeft, setTimeLeft] = useState(20)
  const [timerId, setTimerId] = useState(null)

  useEffect(() => {
    if (timeLeft > 0) {
      const id = setTimeout(() => setTimeLeft(timeLeft - 1), 1000)
      setTimerId(id)
    }
  }, [timeLeft]);

  const handleClick = (e) => {
    setIndex(index+1)
    clearTimeout(timerId)
    setTimeLeft(20)
  }
  
  return (
    <>
      <h1>{quiz.title}</h1>
      <h3 >{question.question}</h3>
      <h2>Time left: {timeLeft}</h2>            
      <p>{question.correctAnswer}</p>
      {question.incorrectAnswers.map((answer, index) => <p key={index}>{answer}</p>
      )}
      { index < quiz.questions.length-1 ? <button onClick={ handleClick }>Next  </button> : <h4>End of quiz  </h4>}
    </>
  )
}

export default ShowQuestions