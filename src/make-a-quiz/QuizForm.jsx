import React from 'react'
import { Link } from 'react-router-dom'

const QuizForm = () => {
  return (
    <form>
      <div className='quiz-name-form'>
        <label>Quiz name:
          <input type='text' />
        </label>
      </div>
      <div className='created-by-form'>
        <label>Created by:
          <input type='text' />
        </label>
      </div>
      <div className='category-form'>
        <label>Category:
          <input type='text' />
        </label>
      </div>
      <div className='category-name-form'>
        <label>Category name:
          <input type='text' />
        </label>
      </div>
      <div className='category-img-form'>
        <label>Category image:
          <input type='text' />
        </label>
      </div>
      <br/>
      <button>
        <Link to={'/'}>
          Quit
        </Link>
      </button> 
      <button>
        <Link to={'/add-questions'}>
          Next
        </Link>
      </button>
    </form>
  )
}

export default QuizForm