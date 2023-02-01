import React, { useState } from 'react'
import ReturnToTop from '../UI/ReturnToTop'
import { Link, useParams } from 'react-router-dom'

const QuestionsForm = ({ addQuestion, postQuestions, questionArray }) => {
  const { quizId } = useParams('')
  const [question, setQuestion] = useState('')
  const [correctAnswer, setCorrectAnswer] = useState('')
  const [incorrectAnswers, setIncorrectAnswers] = useState([])
  const [incorrectAns1, setIncorrectAns1] = useState('')
  const [incorrectAns2, setIncorrectAns2] = useState('')
  const [incorrectAns3, setIncorrectAns3] = useState('')
  
  // Function to submit the new quiz to the API
  function submitOneQuestion(e) {
    e.preventDefault()
    setIncorrectAnswers(incorrectAnswers.push(incorrectAns1, incorrectAns2, incorrectAns3))
    addQuestion(quizId, question, correctAnswer, incorrectAnswers)
  }

  function submitAllQuestions(e) {
    e.preventDefault()
    postQuestions(questionArray)
  }
  
  return (
    <> 
      <form onSubmit={submitOneQuestion} className='container'>
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