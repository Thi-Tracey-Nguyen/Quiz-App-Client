import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Timer from './Timer'
// import ShowQuestion from './ShowQuestion'

const TakeAQuiz= ({ quiz, onChange }) => {

  const [ index, setIndex ] = useState(0)
  const [ answer, setAnswer ] = useState('')
  const [ answers, setAnswers ] = useState([])
  const [ points, setPoints ] = useState(0)

  const question = quiz.questions[index]
  
  // when a radio button is chosen, set the target value as the answer
  const handleChange = (e) => {
    setAnswer(e.target.value)
  }
  
  //this function calculate points
  const calculatePoints = (answers, quiz) => {
    for (let i=0; i<answers.length-1; i++) {
      if (answers[i] === quiz.questions[i].correctAnswer) {
        setPoints(points+1)
      }
  }}
  
  // // when Next is clicked, move to the next question and add answer to answers array
  const handleClickNext = (e) => {
    if (index < quiz.questions.length-1) {
      setIndex(index+1)
      // onChange(answer)
      // setAnswer(choice)
      setAnswers([...answers, answer])
    } else if (index === quiz.questions.length-1) {
      setAnswers([...answers, answer])
    }
  }

  

  //pass points to parent component (App) upon submission
  const handleSubmit = (e) => {
    answers.push(answer)
    setAnswers(answers)
    console.log(answers)
    onChange(answers)
    console.log(points)
  }



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
          <>
            <button onClick={ handleSubmit }> 
              <Link to={`/result/${quiz._id}`}> Submit </Link>
            </button>
          </>
        }
        <button>
          <Link to='/quizzes'> Quit </Link>
        </button>
    </>
  )
}

export default TakeAQuiz