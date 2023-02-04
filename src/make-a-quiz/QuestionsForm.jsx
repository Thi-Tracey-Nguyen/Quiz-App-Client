import React, { useState } from 'react'
import ReturnToTop from '../UI/ReturnToTop'
import { Link, useParams, useNavigate } from 'react-router-dom'

const QuestionsForm = ({ questions, quizzes }) => {
  const { quizId } = useParams()
  // const [quizId, setQuizId] = useState('')
  const [question, setQuestion] = useState('')
  const [correctAnswer, setCorrectAnswer] = useState('')
  const [incorrectAnswers, setIncorrectAnswers] = useState([])
  const [incorrectAns1, setIncorrectAns1] = useState('')
  const [incorrectAns2, setIncorrectAns2] = useState('')
  const [incorrectAns3, setIncorrectAns3] = useState('')
  const [lastQuestion, setLastQuestion] = useState(false)

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

  // Function to put incorrect answers into array and set quizId from URL 
  function getParams(e) {
    e.preventDefault()
    setIncorrectAnswers(incorrectAnswers.push(incorrectAns1, incorrectAns2, incorrectAns3))
    addQuestion(quizId, question, correctAnswer, incorrectAnswers)
    if (lastQuestion) {
      nav('/quizzes')
    } else {
      alert('Question added successfully!')
    }
  }

  // Function to submit final question and nav to quizzes page
  // function submitForm() {
  //   setLastQuestion(true)
  //   getParams(quizId, question, correctAnswer, incorrectAnswers)
  // }

  // Function to reset the state of the form after submitting a question
  function resetForm() {
    setQuestion('')
    setCorrectAnswer('')
    setIncorrectAnswers([])
    setIncorrectAns1('')
    setIncorrectAns2('')
    setIncorrectAns3('')
  }

  // Function to post a new question to the DB
  const addQuestion = async (quizId, question, correctAnswer, incorrectAnswers) => {
    // Add a new question
    const newQuestion = {
      quizId: quizId,
      question: question,
      correctAnswer: correctAnswer,
      incorrectAnswers: incorrectAnswers
    }
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
  }

  // const postQuestions = async () => {
    
  // }
  
  return (
    <> 
      <h2>Add questions to your new Quiz</h2>
      <p>You can always quit and do this later from the Edit a Quiz page, your quiz has been saved.</p>

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
          <button 
            onClick={() => (setLastQuestion(lastQuestion))}
            type='submit'
            name='add-question'
          >
            Add new question
          </button> 
          <button 
            onClick={() => (setLastQuestion(true))}
            type='submit'
            name='submit-form'
          >
              Save and publish
          </button>
        </form>
          <button>
            <Link to={'/'}>
              Quit
            </Link>
          </button>
    </> 
  )
}

export default QuestionsForm