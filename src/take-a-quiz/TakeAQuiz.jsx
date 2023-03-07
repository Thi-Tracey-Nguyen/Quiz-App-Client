import React, { useState, useEffect } from 'react'
import "../styles/CommonStyles.css";
import { Link, useNavigate} from 'react-router-dom'

const TakeAQuiz = ({ quiz, onChange }) => { 

  const [index, setIndex] = useState(0)
  const [answer, setAnswer] = useState('')
  const [answers, setAnswers] = useState([])
  const [timeLeft, setTimeLeft] = useState(20)
  const nav = useNavigate()

  // console.log(quiz.questions)
  const question = quiz.questions[index]

  countdown timer
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

  //function to reset timer
  const restartTimer = () => {
    setTimeLeft(20)
  }

  // when a radio button is chosen, set the target value as the answer
  const handleChange = (e) => {
    setAnswer(e.target.value)
  }

  // when Next is clicked, move to the next question and add answer to answers array
  const handleClickNext = (e) => {

    restartTimer() //restart timer when user moves to next question

    //check if index is within range
    if (index < quiz.questions.length - 1) {
      setIndex(index + 1) // move to next question 
      setAnswers([...answers, answer]) // add selected answer to answers array
    } else if (index === quiz.questions.length - 1) {
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

  //this section is for answers shuffling

  //create an array of all the answers (correct and incorrect) to shuffle answers
  const answersArray = [question.correctAnswer]
  question.incorrectAnswers.forEach(incorrectAnswer => answersArray.push(incorrectAnswer))

  // set seededAnswers as state
  const [seededAnswers, setSeededAnswers] = useState([answersArray])

  // wrap in an useEffect to prevent re-running everytime the page re-renders due to timer
  useEffect(() => {

    //this function shuffles elements in an array
    function shuffle(array) {
      let currentIndex = array.length, randomIndex;

      // While there remain elements to shuffle.
      while (currentIndex != 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex], array[currentIndex]];
      }

      return array;
    }

    // call shuffle on answersArray
    const shuffledArray = shuffle(answersArray)
    setSeededAnswers(shuffledArray)
  }, [index]) // shuffle answers when index changes (for next question)

  return (
    <div className='main-body'>
      <h1>{quiz.title}</h1>
      <h1>Timer: {timeLeft}</h1>
      <div className='container'>
        <div className='wrapper'>
          <h4 className="question">{question.question}</h4>
          <div className='question-inner'>
              {seededAnswers.map((seededAnswer, index) => (
                <div index={index} className='question'>
                  <input
                    type='radio'
                    name={answer}
                    value={seededAnswer}
                    onChange={handleChange}
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
