import React, { useState } from 'react'
import { Link, redirect, useNavigate } from 'react-router-dom'

const QuizForm = ({ quizzes, categories, setQuizzes }) => {
  const [category, setCategory] = useState('')
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [questions, setQuestions] = useState([])
  const [image, setImage] = useState('')

  const nav = useNavigate()

  // Function to submit the new quiz to the API
  async function submitQuiz(e) {
    e.preventDefault()
    if (!category) {
      alert('You need to select a category')
    } else {
      addQuiz(category, title, author, questions, image)
    }
  }

  // Add a new quiz to the API
  const addQuiz = async (category, title, author, questions, image) => {
    // Add a new quiz
    const newQuiz = {
      category: category,
      title: title,
      author: author,
      questions: questions,
      image: image
    }
    // Post new quiz to the API
    const createdQuiz = await fetch('https://quiz-app-server-production-09e8.up.railway.app/quizzes', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newQuiz)
    })
    const data = await createdQuiz.json()
    // Update quizzes state with the new quiz
    const updatedQuizzes = quizzes.push(data)
    setQuizzes(updatedQuizzes)
    // Navigate to add questions to the new quiz
    navToNewQuiz(data)
    // const findTitle = data.title
    // const quiz = quizzes.find(quiz => quiz.title === findTitle)
    // console.log(quizzes)
    // nav(`/add-questions/${quiz._id}`)
    // const convertedTitle = await data.title.replaceAll(' ', '%20')
    // console.log(convertedTitle)
    // nav(`/add-questions/${convertedTitle}`)
    // console.log(convertedTitle)
  }

  // // Uses the new quiz data to get the ID of the new quiz from the DB
  function navToNewQuiz(data) {
    // Find the quiz in the DB where the title matches the quiz just created
    const quiz = quizzes.find(quiz => quiz.title === data.title)
    // Use the ID of that quiz to navigate to the correct Add Questions page
    nav(`/add-questions/${quiz._id}`)
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
      {/* <div className='category-img-form'>
        <label>Category image:
          <input 
            type='text' 
            value={image} 
            onChange={(e) => setImage(e.target.value)} 
          />
        </label>
      </div> */}
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