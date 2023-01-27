import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Timer from './Timer'

const ShowQuestion = ({ quiz, onChange }) => {

  const [answer, setAnswer] = useState('')
  const [ index, setIndex ] = useState(0)

  const question = quiz.questions[index]

  const handleClickNext = (e) => {
    setIndex(index+1)
    onChange(answer)
  }

  const handleChange = (e) => {
    setAnswer(e.target.value)
  }

  return (
    <> 
      <h3 >{question.question}</h3>
      <div>         
        <input 
          type='radio'
          name={answer}
          value={question.correctAnswer} 
          onChange={handleChange} 
          key='0'
          checked={answer === question.correctAnswer}
        /> {question.correctAnswer} <br />

        <input 
          type='radio'
          name={answer}
          value={question.incorrectAnswers[0]} 
          onChange={handleChange} 
          key='1'
          checked={answer === question.incorrectAnswers[0]}
        /> {question.incorrectAnswers[0]} <br />

        <input 
          type='radio'
          name={answer}
          value={question.incorrectAnswers[1]} 
          onChange={handleChange} 
          key='2'
          checked={answer === question.incorrectAnswers[1]}
        /> {question.incorrectAnswers[1]} <br />

        <input 
          type='radio'
          name={answer}
          value={question.incorrectAnswers[2]} 
          onChange={handleChange} 
          key='correctAnswer'
          checked={answer === question.incorrectAnswers[2]}
        /> {question.incorrectAnswers[2]} <br />
      </div>
        { index < quiz.questions.length-1 ? 
          <button onClick={ handleClickNext }> Next </button> : 
          <button onClick={ handleClickNext }> 
            <Link to='/result' > Submit </Link> 
          </button>
        }
        {/* {question.incorrectAnswers.map((incorrectAnswer, index) => (
          <>
            <input type='radio' value={incorrectAnswer} key={index} name={answer} />
            <label>{incorrectAnswer}</label> <br />
          </>
        ))} */}
    </>
  )
}

export default ShowQuestion