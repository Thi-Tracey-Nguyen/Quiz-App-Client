import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const EditAQuiz = ({ quiz }) => {
  const [index, setIndex] = useState(0)
  const nav = useNavigate()

  // const questionObject = quiz.questions[index]
  const [questionObject, setQuestionObject] = useState(quiz.questions[0])
  const [question, setQuestion] = useState(questionObject.question)
  const [confirm, setConfirm] = useState(false)
  const [correctAnswer, setCorrectAnswer] = useState(questionObject.correctAnswer)
  const [incorrectAnswer1, setIncorrectAnswer1] = useState(questionObject.incorrectAnswers[0])
  const [incorrectAnswer2, setIncorrectAnswer2] = useState(questionObject.incorrectAnswers[1])
  const [incorrectAnswer3, setIncorrectAnswer3] = useState(questionObject.incorrectAnswers[2])

  // // this function creates a new question object and put it to the server API
  // async function updateQuestion() {

  //   // creates a new question object to send back to server  
  //   const updatedQuestion = {
  //     question, 
  //     correctAnswer,
  //     incorrectAnswers: [incorrectAnswer1, incorrectAnswer2, incorrectAnswer3]
  //   }
    
  //   // fetch to API
  //   const res = await fetch(`https://quiz-app-server-production-09e8.up.railway.app/questions/${questionObject._id}`, {
  //     method: 'PUT',
  //     headers: {
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(updatedQuestion)
  //   })

  //   const data = await res.json()
  //   console.log(data)

  //   // need to add logic to handle errors
  //   alert('Question updated successfully')
  // }


  // updates index when user click next
  function handleClickNext(event) {
    event.preventDefault()
    setIndex(index+1)
    setQuestionObject(quiz.questions[index+1])
    // setQuestion(questionObject.question)
    // setCorrectAnswer(questionObject.correctAnswer)
    // setIncorrectAnswer1(questionObject.incorrectAnswers[0])
    // setIncorrectAnswer2(questionObject.incorrectAnswers[1])
    // setIncorrectAnswer3(questionObject.incorrectAnswers[2])
    // updateQuestion()
  }

  // // updates index when user click next
  // function handleSubmit(event) {
  //   event.preventDefault()
  //   updateQuestion()
  //   nav('/quizzes')
  // }

  // // handle click delete
  // function handleClickDelete(event) {
  //   event.preventDefault()
  //   setConfirm(true)
  // }

  // // handles click on delete a question
  // const confirmForm = () => {
  //   return (
  //     <>
  //       <p> Do you want to delete this question? </p>
  //       <button onClick={handleConfirmDelete}> Confirm </button>
  //       <button> Cancel </button>
  //       <br />
  //     </>
  //   )
  // }

  // // handles confirming deletion of a question
  // const handleConfirmDelete = async (event) => {
  //   const res = await fetch(`https://quiz-app-server-production-09e8.up.railway.app/questions/${questionObject._id}`, {
  //       method: "DELETE",
  //   })
  //   setIndex(index+1)
  // }
  // console.log(questionObject)

  // // group buttons in a function for conditional rendering
  // const render = () => {
  //   return (
  //     <>
  //       <button> Add a question </button>
  //       <button onClick={ handleClickDelete }> Delete this question </button>
  //       <button onClick={ handleClickNext }> Next </button>
  //     </>
  //   )
  // }
  console.log(questionObject)

  return (
    <>
      <div>Edit {quiz.title}</div>
        <form className='container' key={index}>
          <div className='question-form'>
            <label> Question
              <input 
                type='text'
                defaultValue={questionObject.question}
                // value={questionObject.question}
                onChange={(e) => setQuestion(e.target.value)}
              />
            </label>
          </div>
          <div className='correct-answer-form'>
            <label>Correct answer:
              <input 
                type='text'
                defaultValue={questionObject.correctAnswer}
                // value={questionObject.correctAnswer}
                onChange={(e) => setCorrectAnswer(e.target.value)}
              />
            </label>
          </div>
          <div className='incorrect-answers-form'>
            <label>Incorrect answers:
              <input 
                type='text'
                defaultValue={questionObject.incorrectAnswers[0]}
                // value={questionObject.incorrectAnswers[0]}
                onChange={(e) => setIncorrectAnswer1(e.target.value)}
              />
            </label>
          </div>
            <input 
              type='text'
              defaultValue={questionObject.incorrectAnswers[1]}
              // value={questionObject.incorrectAnswers[1]}
              onChange={(e) => setIncorrectAnswer2(e.target.value)}
            />
            <input
              type='text'
              defaultValue={questionObject.incorrectAnswers[2]}
              // value={questionObject.incorrectAnswers[2]}
              onChange={(e) => setIncorrectAnswer3(e.target.value)} 
              />

            { confirm && confirmForm() }
            { index < quiz.questions.length-1 ? 
              // render() :
              <button onClick={ handleClickNext }> Next </button> : 
              <button> Submit </button> 
              // <button onClick={ handleSubmit }> Submit </button> 
            }     
        </form>
    </>
  )
}

export default EditAQuiz