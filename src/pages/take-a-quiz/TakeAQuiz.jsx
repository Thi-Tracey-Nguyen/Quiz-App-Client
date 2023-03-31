import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams} from 'react-router-dom'
import joinAnswers from '../../utils/join-answers'
import shuffle from '../../utils/shuffle'
import './take-a-quiz.css'

const TakeAQuiz = ({ quiz, onChange }) => { 

  const [index, setIndex] = useState(0)
  const [answer, setAnswer] = useState('')
  const [answers, setAnswers] = useState([])
  const [timeLeft, setTimeLeft] = useState(20)
  const [seededAnswers, setSeededAnswers] = useState([])
  const nav = useNavigate()

  const question = quiz.questions[index]

  // countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      if (timeLeft > 0) {
         setTimeLeft(timeLeft -1)
      } else {
        if (index < quiz.questions.length - 1) {
          setAnswer('')
          setTimeLeft(20)
          handleClickNext()
        } else {
          setAnswer('')
          handleSubmit()
        }
      }
    }, 1000)
    return () => clearInterval(timer)
  })

  // wrap in an useEffect to prevent re-running everytime the page re-renders due to timer
  useEffect(() => {
    // call shuffle on answersArray
    const answersArray = joinAnswers(question)
    const shuffledArray = shuffle(answersArray)
    setSeededAnswers(shuffledArray)
  }, [index]) // shuffle answers when index changes (for next question)


  //pass points to parent component (App) upon submission (child -> parent)
  const handleSubmit = (e) => {
    answers.push(answer) // setAnswers([...answers, answer]) does not add the answer before moving to result page
    setAnswers(answers)
    onChange(answers)
    nav(`/result/${quiz._id}`)
  }

  // when Next is clicked, move to the next question and add answer to answers array
  const handleClickNext = (e) => {

    setTimeLeft(20) //restart timer when user moves to next question

    //check if index is within range
    if (index < quiz.questions.length - 1) {
      setIndex(index + 1) // move to next question 
      setAnswers([...answers, answer]) // add selected answer to answers array
    } else if (index === quiz.questions.length - 1) {
      setAnswers([...answers, answer]) // if question is the last question, only update setAnswers
    }
  }

  console.log(answers)

  return (
    <div className='main-body'>
      <h1>{quiz.title}</h1>
      <h3>Timer:{timeLeft}</h3>
      <div className='container'>
        <div className='wrapper'>
          <h4 className="question">{question.question}</h4>
          <div className='question-inner'>
              {seededAnswers.map((seededAnswer, index) => (
                <div key={index} className='question'>
                  <input
                    type='radio'
                    name={answer}
                    value={seededAnswer}
                    onChange={(event) => setAnswer(event.target.value)}
                    key={index}
                    checked={answer === seededAnswer}
                    className='radio'
                    id={seededAnswer}
                  /> 
                  <label htmlFor={seededAnswer}>{seededAnswer}</label>
                </div>
              ))}
            </div>
            <p>{index + 1}/{quiz.questions.length}</p> 
        </div>
        {index < quiz.questions.length - 1 ? 
          <button className='next' onClick={handleClickNext}>&#10132;</button> : ''
        }
      </div>
      
      <div className="links">
        <Link to='/quizzes' className='quit'> Quit </Link>
        {index < quiz.questions.length - 1 ? '' : <button className="submit" onClick={handleSubmit}> Submit </button>}
      </div>       
    </div>
  )
}

export default TakeAQuiz
