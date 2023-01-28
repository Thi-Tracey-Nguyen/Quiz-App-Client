import React from 'react'
import ReturnToTop from '../UI/ReturnToTop'

const AddQuestionsForm = () => {
  return (
    <form>
      <div className='quiz-name-form'>
        <label>Question 1:
          <input type='text' />
        </label>
      </div>
      <div className='created-by-form'>
        <label>Correct answer:
          <input type='text' />
        </label>
      </div>
      <div className='category-form'>
        <label>Incorrect answers:
          <input type='text' />
        </label>
      </div>
      <div className='category-name-form'>
        <label>Upload an image:
          <input type='text' />
        </label>
      </div>
      <button>
        Delete this question
      </button>
      <button>
        Add new question
      </button>
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
        <Link to={'/quiz-form'}>
          Back
        </Link>
      </button>
      <ReturnToTop />
    </form>
  )
}

export default AddQuestionsForm