import React, { useState } from 'react'
import ReturnToTop from '../UI/ReturnToTop'
import { Link, useParams, useNavigate } from 'react-router-dom'

const QuestionsForm = ({ questions, quizzes, setQuestions }) => {
  const { quizId } = useParams()
  // const [quizId, setQuizId] = useState('')
  const [question, setQuestion] = useState('')
  const [correctAnswer, setCorrectAnswer] = useState('')
  const [incorrectAnswers, setIncorrectAnswers] = useState([])
  const [incorrectAns1, setIncorrectAns1] = useState('')
  const [incorrectAns2, setIncorrectAns2] = useState('')
  const [incorrectAns3, setIncorrectAns3] = useState('')
  const [questionArray, setQuestionArray] = useState([])

  const nav = useNavigate()
  
  // Function to use quiz title to get ID
  // function getQuizId() {
  //   const convertedTitle = title.replaceAll('%20', ' ')
  //   // Find the quiz in the DB where the title matches the quiz just created
  //   const quiz = quizzes.find(quiz => quiz.title === convertedTitle)
  //   // Use the ID of that quiz to navigate to the correct Add Questions page
  //   setQuizId(quiz._id)
  //   console.log(quizId)
  // }

  // Function to create and store a new question object
  // function submitQuestion(e) {
  //   e.preventDefault()
  //   setIncorrectAnswers(incorrectAnswers.push(incorrectAns1, incorrectAns2, incorrectAns3))
  //   addQuestion(quizId, question, correctAnswer, incorrectAnswers)
  // }

  // function submitAllQuestions(e) {
  //   e.preventDefault()
  //   postQuestions(questionArray)
  // }

  function getParams(e) {
    e.preventDefault()
    setIncorrectAnswers(incorrectAnswers.push(incorrectAns1, incorrectAns2, incorrectAns3))
    console.log(incorrectAnswers)
    addQuestion(quizId, question, correctAnswer, incorrectAnswers)
  }

  function resetForm() {
    setQuestion('')
    setCorrectAnswer('')
    setIncorrectAnswers([])
    setIncorrectAns1('')
    setIncorrectAns2('')
    setIncorrectAns3('')
  }


  const addQuestion = async (quizId, question, correctAnswer, incorrectAnswers) => {
    // getQuizId()
    // Add a new question
    const newQuestion = {
      quizId: quizId,
      question: question,
      correctAnswer: correctAnswer,
      incorrectAnswers: incorrectAnswers
    }
    console.log(newQuestion)
    // Post new question to API
    await fetch('https://quiz-app-server-production-09e8.up.railway.app/questions', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newQuestion)
    })
    // console.log(createdQuestion)
    // const data = await createdQuestion.json()
    // const updatedQuestions = questions.push(data)
    // setQuestions(updatedQuestions)
    // console.log(updatedQuestions)
    resetForm()
    alert('Question added successfully!')
  }

  // const postQuestions = async () => {
    
  // }
  
  return (
    <> 
      <form onSubmit={getParams} className='container'>
        <div className='question-form'>
          <label>Question:
            <input 
              type='text'
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            />
          </label>
        </div>
        <div className='correct-answer-form'>
          <label>Correct answer:
            <input 
              type='text'
              value={correctAnswer}
              onChange={(e) => setCorrectAnswer(e.target.value)}
            />
          </label>
        </div>
        <div className='incorrect-answers-form'>
          <label>Incorrect answers:
            <input 
              type='text'
              value={incorrectAns1}
              onChange={(e) => setIncorrectAns1(e.target.value)}
            />
          </label>
        </div>
          <input 
            type='text' 
            value={incorrectAns2}
            onChange={(e) => setIncorrectAns2(e.target.value)}
          />
          <input 
            type='text' 
            value={incorrectAns3}
            onChange={(e) => setIncorrectAns3(e.target.value)}
          />
        <button>
          Add new question
        </button> 
      </form>
        {/* <button onClick={submitAllQuestions}>
          <Link to={'/quizzes'}>
            Save and publish
          </Link>
        </button> */}
        <br/>
        <button>
          <Link to={'/'}>
            Quit
          </Link>
        </button>
    </> 
  )
}

export default QuestionsForm