import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { postDataWithObj } from "../../utils/fetch-API"

const EditQuestions = ({ quiz, questions, setQuestions }) => {
  const [index, setIndex] = useState(0);
  const nav = useNavigate();

  // const questionObject = quiz.questions[index]
  
  const [questionObject, setQuestionObject] = useState(quiz.questions[index])
  const [question, setQuestion] = useState(questionObject.question)
  const [confirm, setConfirm] = useState(false)
  const [correctAnswer, setCorrectAnswer] = useState(questionObject.correctAnswer)
  const [incorrectAnswer1, setIncorrectAnswer1] = useState(questionObject.incorrectAnswers[0])
  const [incorrectAnswer2, setIncorrectAnswer2] = useState(questionObject.incorrectAnswers[1])
  const [incorrectAnswer3, setIncorrectAnswer3] = useState(questionObject.incorrectAnswers[2])
  const [newQuestion, setNewQuestion] = useState(false)


  // this function creates a new question object and put it to the server API
  async function updateQuestion() {
    // creates a new question object to send back to server
    const updatedQuestion = {
      quizId: quiz._id,
      question: question, 
      correctAnswer: correctAnswer,
      incorrectAnswers: [incorrectAnswer1, incorrectAnswer2, incorrectAnswer3]
    }
    // fetch to API
    const res = await postDataWithObj(
      updatedQuestion, 
      `questions/${questionObject._id}`, 
      'PUT')
  }

  // updates index when user click next
  function handleClickSaveNext(event) {
    event.preventDefault()
    setIndex(index+1)
    setQuestionObject(quiz.questions[index+1])
    setQuestion(quiz.questions[index+1].question)
    setCorrectAnswer(quiz.questions[index+1].correctAnswer)
    setIncorrectAnswer1(quiz.questions[index+1].incorrectAnswers[0])
    setIncorrectAnswer2(quiz.questions[index+1].incorrectAnswers[1])
    setIncorrectAnswer3(quiz.questions[index+1].incorrectAnswers[2])
    updateQuestion()
  }

  // updates index when user click next
  function handleClickSave(event) {
    event.preventDefault()
    updateQuestion()
  }

  // handle update question
  function handleSubmit(event) {
    event.preventDefault()
    updateQuestion()
    nav('/quizzes')
  }

  // updates index when user click next
  function handleSaveQuestion(event) {
    event.preventDefault()
    addQuestion()
    setNewQuestion(false)
  }

  // handle click delete
  function handleClickDelete(event) {
    event.preventDefault()
    setConfirm(true)
    setIndex(index+1)
  }

   // Function to reset the state of the form after deleting the last question
   function resetForm() {
    // need to set up this way, not hard setQuestion, etc because they won't be populated in the form
    const blankQuestion = {
      question: '',
      correctAnswer: '',
      incorrectAnswers: ['', '', '']
    }
    setQuestionObject(blankQuestion)
  }

  // Function to post a new question to the DB
  const addQuestion = async (
    quizId,
    question,
    correctAnswer,
    incorrectAnswers
  ) => {
    // Add a new question
    const newQuestion = {
      quizId: quizId,
      question: question,
      correctAnswer: correctAnswer,
      incorrectAnswers: incorrectAnswers,
    }
    // Post new question to API
    await fetch(
      "https://quiz-app-server-production-09e8.up.railway.app/questions",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newQuestion),
      }
    )
    // console.log(createdQuestion)
    // const data = await createdQuestion.json()
    // const updatedQuestions = questions.push(data)
    // setQuestions(updatedQuestions)
    // console.log(updatedQuestions)
  };

  // handle add a new question
  function handleAddQuestion(event) {
    event.preventDefault()
    resetForm()
    setIndex(index + 1) //need this to update the form 
    setNewQuestion(true)
  }

  // handles confirming deletion of a question
  const handleConfirmDelete = async (event) => {
    event.preventDefault()
    if (quiz.questions.length === 1) {
      alert('Cannot delete this question. Quiz is required to have at least one question.')
    } else {
      try {
        await fetch(`https://quiz-app-server-production-09e8.up.railway.app/questions/${questionObject._id}`, {
            method: "DELETE"
        })
        setIndex(index+1)
        setConfirm(false)
      } catch (error) {
        console.log(error)
      }
      // index === quiz.questions.length-1 ? resetForm() : setIndex(index+1) 
      // checks if the question is the last before moving to next question. 
      if (index !== quiz.questions.length-1) {
        setIndex(index+1)
        setQuestionObject(quiz.questions[index+1])
      } else {
        resetForm() //if last question, only reset form
      }
      setConfirm(false)
    }
  }

  // handles click on delete a question
  const confirmForm = () => {
    return (
      <>
        <p> Do you want to delete this question? </p>
        <button className='random' onClick={handleConfirmDelete}> Confirm </button>
        <button className='random' onClick={ () => setConfirm(false) }> Cancel </button>
        <br />
      </>
    );
  };

  // add new question after typing all the info
  const handleConfirmAdd = async (event) => {
    event.preventDefault();

    const newQuestion = {
      quizId: quiz._id,
      question: question,
      correctAnswer: correctAnswer,
      incorrectAnswers: [incorrectAnswer1, incorrectAnswer2, incorrectAnswer3],
    };
    // Post new question to API

    const res = await postDataWithObj(newQuestion, 'questions/', 'POST')
    const data = await res.json()
    setNewQuestion(false)
    setQuestionObject(newQuestion)
    quiz.questions.push(data)
    setQuestions([...questions, data])
    alert('Question added successfully')
  } 

  return (
    <div className='home'>
      <h2>Edit {quiz.title}</h2>
      <div className='edit-container'>
        <form
          className='edit-form'
          key={index}
        >
          <div className='edit-question'>
            <label className='edit-label'> Question: </label>
            <input
              className='edit-input'
              type="text"
              defaultValue={questionObject.question}
              onChange={(e) => setQuestion(e.target.value)}
            />
          </div>
          <div>
            <label className='edit-label'>Correct answer:</label>
            <input
              className='edit-input'
              type="text"
              defaultValue={questionObject.correctAnswer}
              onChange={(e) => setCorrectAnswer(e.target.value)}
            />
          </div>
          <div>
            <label className='edit-label'>Incorrect answers:</label>
            <input
              className='edit-input'
              type='text'
              defaultValue={questionObject.incorrectAnswers[0]}
              onChange={(e) => setIncorrectAnswer1(e.target.value)} 
              />
            <input
              className='edit-input'
              type='text'
              defaultValue={questionObject.incorrectAnswers[1]}
              onChange={(e) => setIncorrectAnswer2(e.target.value)} 
              />
            <input
              className='edit-input'
              type='text'
              defaultValue={questionObject.incorrectAnswers[2]}
              onChange={(e) => setIncorrectAnswer3(e.target.value)} 
              />
          </div> 
        </form>
      </div>
      { confirm && confirmForm() } 
      <div className='edit-button top'>
        { newQuestion && <button className='random' onClick={ handleConfirmAdd }> Add </button> } 
        { (!confirm && !newQuestion) && <button className='random' onClick={ handleClickDelete }> Delete this question </button> }  
        { (index === quiz.questions.length-1 && !confirm) &&  <button className='random' onClick={ handleAddQuestion }> Add a new question </button>}
      </div>
      
      <div className='edit-button bottom'>
        <button className='random' onClick={() => nav('/edit-a-quiz')}>Quit</button> 
        { index === quiz.questions.length-1 && <button className='random' onClick={handleSubmit}> Submit </button> }
        { (index < quiz.questions.length-1 && !confirm) && <button className='random' onClick={ handleClickSaveNext }> Save & Next </button> }
        {/* { (index !== quiz.questions.length-1 && !confirm) && <button className='random' onClick={ handleClickSave }> Save </button> } */}
      </div> 
    </div>
)
}

export default EditQuestions
