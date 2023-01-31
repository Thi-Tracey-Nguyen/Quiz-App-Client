import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const QuizForm = ({ addQuiz, categories }) => {
  const [category, setCategory] = useState('')
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [questions, setQuestions] = useState([])
  const [image, setImage] = useState('')

  // Function to submit the new quiz to the API
  async function submitQuiz(e) {
    e.preventDefault()
    if (!category) {
      alert('You need to select a category')
    } else {
      addQuiz(category, title, author, questions, image)
    }
  }

  return (
    <form onSubmit={submitQuiz} className='container'>
      <div className='quiz-name-form'>
        <label>Quiz title:
          <input 
            type='text' 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
          />
        </label>
      </div>
      <div className='author-form'>
        <label>Author:
          <input  
            type='text'
            value={author} 
            onChange={(e) => setAuthor(e.target.value)}
          /> 
        </label>
      </div>
      <div className='category-dropdown-form'>
        <label>Category:
          <select 
            onChange={(e) => setCategory(e.target.value)}
          >
            <option>Select...</option>
            {categories.map((cat, index) => 
              <option key={index}>{cat.name}</option>
            )}
          </select>
        </label>
      </div>
      {/* <div className='category-name-form'>
        <label>Category name:
          <input 
            type='text' 
            value={category} 
            onChange={(e) => setCategory(e.target.value)} 
          />
        </label>
      </div> */}
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
      <button>
          Next
      </button>
    </form>
  )
}

export default QuizForm