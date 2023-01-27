import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Timer from './Timer'
import ShowQuestion from './ShowQuestion'

const TakeAQuiz= ({ quiz }) => {

 
  const [ answers, setAnswers ] = useState([])
  // const [ points, setPoints ] = useState(0)

  // callback function to get answer from ShowQuestion (passing props from child -> parent)
  function getData(data) {
    setAnswers([...answers, data])
  }

  console.log(answers)

  // function to calculate points 
  // function calculatePoints(answer) {
  //   if (answer === quiz)
  // }

  return (
    <> 
      <h1>{quiz.title}</h1>
      <ShowQuestion onChange={getData} quiz={quiz} />
    </>
  )
}

export default TakeAQuiz