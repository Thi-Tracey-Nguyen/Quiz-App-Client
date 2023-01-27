import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Timer from './Timer'
// import ShowQuestion from './ShowQuestion'

const TakeAQuiz= ({ quiz }) => {

  const [ index, setIndex ] = useState(0)
  const [ answer, setAnswer ] = useState('')
  const [ answers, setAnswers ] = useState([])
  const [ points, setPoints ] = useState(0)

  const question = quiz.questions[index]
  

  // when a radio button is chosen, set the target value as the answer
  const handleChange = (e) => {
    setAnswer(e.target.value)
  }
  
  // // when Next is clicked, move to the next question and add answer to answers array
  const handleClickNext = (e) => {
    setIndex(index+1)
    // onChange(answer)
    setAnswer('')
    setAnswers([...answers, answer])

    //calculate points
    if (answer === question.correctAnswer) {
      setPoints(points + 1)
    }
  }

  console.log(answer)
  console.log(answers)
  console.log(points)

  return (
    <> 
      <h1>{quiz.title}</h1>
      {/* <ShowQuestion onChange={getData} quiz={quiz} /> */}
      <h4>{question.question}</h4>
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
          key='3'
          checked={answer === question.incorrectAnswers[2]}
        /> {question.incorrectAnswers[2]} <br />
      </div>
        { index < quiz.questions.length-1 ? 
          <button onClick={ handleClickNext }> Next </button> : 
          (
          <>
            <button onClick={ handleClickNext }> 
              <Link to='/result'> Submit </Link> 
            </button>
            <p>Your points are {points}</p>
          </>
          )
        }
        <button>
          <Link to='/quizzes'> Quit </Link>
        </button>
    </>
  )

  // return <h4>{quiz.title}</h4>
}

export default TakeAQuiz