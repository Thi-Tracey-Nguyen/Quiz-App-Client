import React, { useState } from 'react'
import ReturnToTop from '../UI/ReturnToTop'
import { Link, useParams } from 'react-router-dom'

const AddQuestionsForm = ({ addQuestion }) => {
  const { quizId } = useParams('')
  const [question, setQuestion] = useState('')
  const [correctAnswer, setCorrectAnswer] = useState('')
  const [incorrectAnswers, setIncorrectAnswers] = useState([])

  const [incorrectAns1, setIncorrectAns1] = useState('')
  const [incorrectAns2, setIncorrectAns2] = useState('')
  const [incorrectAns3, setIncorrectAns3] = useState('')
  
  // Function to submit the new quiz to the API
  function submitQuestions(e) {
    e.preventDefault()
    setIncorrectAnswers(incorrectAnswers.push([incorrectAns1, incorrectAns2, incorrectAns3]))
    addQuestion(quizId, question, correctAnswer, incorrectAnswers)
    console.log(quizId)
    console.log(incorrectAnswers)
  }

  return (
    <form onSubmit={submitQuestions} className='container'>
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
      </div>
      {/* <button>
        Delete this question
      </button>
      <button>
        Add new question
      </button> */}
      <button>
        Save
      </button> 
      <br/>
      <button>
        <Link to={'/'}>
          Quit
        </Link>
      </button> 
      <button>
        <Link to={'/quiz-form'}> {/*Want this line to link to the edit page for the quiz*/}
          Back
        </Link>
      </button>
      <ReturnToTop />
    </form>
  )
}

export default AddQuestionsForm