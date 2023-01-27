import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Timer from './Timer'
import ShowQuestion from './ShowQuestion'

const TakeAQuiz= ({ quiz }) => {

 
  const [ answers, setAnswers ] = useState([])

  // function to compare user answer against correct answer t
  // funtcion to calculate point 


  
  // callback function to get answer from ShowQuestion (passing props from child -> parent)
  function getData(data) {
    setAnswers([...answers, data])
  }
  
  console.log(answers)
  // Function to check if the answer is correct

  return (
    <> 
      <h1>{quiz.title}</h1>
      <ShowQuestion onChange={getData} quiz={quiz} />
    </>
  )
}

export default TakeAQuiz