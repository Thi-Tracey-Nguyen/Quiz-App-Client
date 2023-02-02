import React, { useState } from 'react'
import ReturnToTop from '../UI/ReturnToTop'
import { Link, useParams, useNavigate } from 'react-router-dom'

const QuestionsForm = ({ questions, quizzes, setQuestions }) => {
  const { title } = useParams('')
  const [ quizId, setQuizId ] = useState('')
  const [question, setQuestion] = useState('')
  const [correctAnswer, setCorrectAnswer] = useState('')
  const [incorrectAnswers, setIncorrectAnswers] = useState([])
  const [incorrectAns1, setIncorrectAns1] = useState('')
  const [incorrectAns2, setIncorrectAns2] = useState('')
  const [incorrectAns3, setIncorrectAns3] = useState('')
  const [questionArray, setQuestionArray] = useState([])

  const nav = useNavigate()
  
  // Function to use quiz title to get ID
  function getQuizId() {
    // Find the quiz in the DB where the title matches the quiz just created
    const quiz = quizzes.find(quiz => quiz.title === title)
    // Use the ID of that quiz to navigate to the correct Add Questions page
    setQuizId(quizId, title)
    console.log(quizId)
  }

  // Function to create and store a new question object
  function submitQuestion(e) {
    e.preventDefault()
    setIncorrectAnswers(incorrectAnswers.push(incorrectAns1, incorrectAns2, incorrectAns3))
    addQuestion(quizId, question, correctAnswer, incorrectAnswers)
  }

  function submitAllQuestions(e) {
    e.preventDefault()
    postQuestions(questionArray)
  }

  const addQuestion = async (quizId, question, correctAnswer, incorrectAnswers) => {
    // Add a new question
    const newQuestion = {
      quizId: quizId,
      question: question,
      correctAnswer: correctAnswer,
      incorrectAnswers: incorrectAnswers
    }
    setQuestionArray([...questionArray, newQuestion])
  }

  const postQuestions = async () => {
    const returnedQuestionArray = await fetch('https://quiz-app-server-production-09e8.up.railway.app/questions', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(questionArray)
    })
    const data = await returnedQuestionArray.json()
    setQuestions(...questions, data)
    nav('/')
  }
  
  return (
    <> 
      <form onSubmit={submitQuestion} className='container'>
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
        <button onClick={submitAllQuestions}>
          <Link to={'/quizzes'}>
            Save and publish
          </Link>
        </button>
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