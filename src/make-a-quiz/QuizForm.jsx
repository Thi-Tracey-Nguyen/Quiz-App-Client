import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const QuizForm = ({ addQuiz }) => {
  const [category, setCategory] = useState('')
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [questions, setQuestions] = useState([])
  const [image, setImage] = useState('')

  // Function to submit the new quiz to the API
  function submitQuiz(e) {
    e.preventDefault()
    addQuiz(category, title, author, questions, image)
  }
  
  return (
    <form onSubmit={submitQuiz} className='container'>
      <div className='quiz-name-form'>
        <label>Quiz name:
          <input 
            type='text' 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
          />
        </label>
      </div>
      <div className='created-by-form'>
        <label>Created by:
          <input 
            type='text' 
            value={author} 
            onChange={(e) => setAuthor(e.target.value)} 
          />
        </label>
      </div>
      <div className='category-form'>
        <label>Category:
          <input 
            type='text' 
            value={category} 
            onChange={(e) => setCategory(e.target.value)} 
          />
        </label>
      </div>
      <div className='category-name-form'>
        <label>Category name:
          <input 
            type='text' 
            value={category} 
            onChange={(e) => setCategory(e.target.value)} 
          />
        </label>
      </div>
      <div className='category-img-form'>
        <label>Category image:
          <input 
            type='text' 
            value={image} 
            onChange={(e) => setImage(e.target.value)} 
          />
        </label>
      </div>
      <br/>
      <button>
        <Link to={'/'}>
          Quit
        </Link>
      </button> 
      <button type='submit'>
        <Link to={`/add-questions/${title}`}>
          Next
        </Link>
      </button>
    </form>
  )
}

export default QuizForm