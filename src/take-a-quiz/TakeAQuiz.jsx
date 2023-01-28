import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const TakeAQuiz= ({ quiz, onChange }) => {

  const [ index, setIndex ] = useState(0)
  const [ answer, setAnswer ] = useState('')
  const [ answers, setAnswers ] = useState([])
  const [ timeLeft, setTimeLeft ] = useState(8)
  const nav = useNavigate()

  const question = quiz.questions[index]
  
  // countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      if (timeLeft > 0) {
        setTimeLeft(timeLeft -1)
      } else {
        if (index < quiz.questions.length-1) {
          setAnswer('')
          // setIndex(index+1)
          // setAnswers([...answers, answer])
          setTimeLeft(8)
          handleClickNext()
        } else {
          setAnswer('')
          handleSubmit()
        }
      }
    }, 1000)
    return () => clearInterval(timer)
  })

  //function to reset timer
  const restartTimer = () => {
    setTimeLeft(8)
  }


  // when a radio button is chosen, set the target value as the answer
  const handleChange = (e) => {
    setAnswer(e.target.value)
  }
  
  
  // when Next is clicked, move to the next question and add answer to answers array
  const handleClickNext = (e) => {

    restartTimer() //restart timer when user moves to next question

    //check if index is within range
    if (index < quiz.questions.length-1) {
      setIndex(index+1) // move to next question 
      setAnswers([...answers, answer]) // add selected answer to answers array
    } else if (index === quiz.questions.length-1) {
      setAnswers([...answers, answer]) // if question is the last question, only update setAnswers
    }
  }


  //pass points to parent component (App) upon submission (child -> parent)
  const handleSubmit = (e) => {
    answers.push(answer) // setAnswers([...answers, answer]) does not add the answer before moving to result page
    setAnswers(answers)
    onChange(answers)
    nav(`/result/${quiz._id}`)
  }

  return (
    <> 
      <h1>Timer: {timeLeft}</h1>
      <h1>{quiz.title}</h1>
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
          <button onClick={ handleSubmit }> Submit </button>
        }
        <button>
          <Link to='/quizzes'> Quit </Link>
        </button>
    </>
  )
}

export default TakeAQuiz