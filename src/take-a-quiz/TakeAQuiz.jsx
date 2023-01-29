import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const TakeAQuiz= ({ quiz, onChange }) => {

  const [ index, setIndex ] = useState(0)
  const [ answer, setAnswer ] = useState('')
  const [ answers, setAnswers ] = useState([])
  const [ timeLeft, setTimeLeft ] = useState(8)
  const nav = useNavigate()

  const question = quiz.questions[index]

  //create an array of all the answers (correct and incorrect)
  const answersArray = [question.correctAnswer]
  question.incorrectAnswers.forEach(incorrectAnswer => answersArray.push(incorrectAnswer))
  
  const [seededAnswers, setSeededAnswers] = useState([answersArray])

  // countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      if (timeLeft > 0) {
        setTimeLeft(timeLeft -1)
      } else {
        if (index < quiz.questions.length-1) {
          setAnswer('')
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

  //this section shuffle answers 
  

  // wrap in an useEffect to prevent re-running everytime the page re-renders due to timer
  useEffect(() => {

    //this function shuffles elements in an array
    function shuffle(array) {
      let currentIndex = array.length,  randomIndex;
    
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
  }, [index])
  
  // console.log(answersArray)

  return (
    <> 
      <h1>Timer: {timeLeft}</h1>
      <h1>{quiz.title}</h1>
      <h4>{question.question}</h4>
      <div>
        {/* {shuffle(answersArray).map((randomAnswer, index) => (
          <>
            <input 
              type='radio'
              name={answer}
              value={randomAnswer}
              onChange={handleChange}
              key={index}
              checked={answer === randomAnswer}
            /> {randomAnswer} <br />
          </> 
        )
        )}          */}
        <input 
          type='radio'
          name={answer}
          value={seededAnswers[0]} 
          onChange={handleChange} 
          key='0'
          checked={answer === seededAnswers[0]}
        /> {seededAnswers[0]} <br />

        <input 
          type='radio'
          name={answer}
          value={seededAnswers[1]} 
          onChange={handleChange} 
          key='1'
          checked={answer === seededAnswers[1]}
        /> {seededAnswers[1]} <br />

        <input 
          type='radio'
          name={answer}
          value={seededAnswers[2]} 
          onChange={handleChange} 
          key='2'
          checked={answer === seededAnswers[2]}
        /> {seededAnswers[2]} <br />

        <input 
          type='radio'
          name={answer}
          value={seededAnswers[3]} 
          onChange={handleChange} 
          key='3'
          checked={answer === seededAnswers[3]}
        /> {seededAnswers[3]} <br />
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