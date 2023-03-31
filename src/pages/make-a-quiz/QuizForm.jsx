import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../../UserContext';
import { postDataWithObj } from '../../utils/fetch-API'
import './make-quiz.css'

const QuizForm = ({ quizzes, categories, setQuizzes }) => {
  const [category, setCategory] = useState('')
  const [title, setTitle] = useState('')
  const [questions, setQuestions] = useState([])
  const [image, setImage] = useState('')
  const imgArray = [
    '/brain.png', '/fashion.png', '/geography.png',
    '/maths.png', '/movies.png', '/music.png',
    '/nature.png', '/pets.png', '/pizza.png',
    '/question-mark.png', '/test.png', '/tv.png'
  ]

  const nav = useNavigate()
  const { user } = useContext(UserContext)

  // Function to check if category entered and if so call addQuiz function
  async function submitQuiz(e) {
    e.preventDefault()
    if (!category) {
      alert("You need to select a category")
    } else {
      addQuiz(category, title, user, questions, image)
    }
  }

  // Add a new quiz to the API
  const addQuiz = async (category, title, user, questions, image) => {
    // Add a new quiz
    const newQuiz = {
      category: category,
      title: title,
      authorId: user && user._id,
      author: user.username || 'Guest User',
      questions: questions,
      image: image,
    }
    console.log(newQuiz)
    // Post new quiz to the API
    const res = await postDataWithObj(newQuiz, 'quizzes')
    console.log(res)
    //catch error when quiz of the same name already exists
    if (res.status === 409) {
      alert('Quiz with the same name already exists. Please choose a different name.')
    } else if (res.status === 400) {
      alert('Quiz name has to be at least 4 character long.')
    } else { 
      const data = await res.json()
      const updatedQuizzes = quizzes.push(data)
      setQuizzes(updatedQuizzes)
      // Navigate to add questions to the new quiz
      navToNewQuiz(data)
    }
  }

  console.log(user)

  // // Uses the new quiz data to get the ID of the new quiz from the DB
  function navToNewQuiz(data) {
    // Find the quiz in the DB where the title matches the quiz just created
    const quiz = quizzes.find((quiz) => quiz.title === data.title)
    // Use the ID of that quiz to navigate to the correct Add Questions page
    nav(`/add-questions/${quiz._id}`)
  }

  return (
    <div className="home-make-quiz"> 
      <h1 className="d-flex justify-content-center">Make a new Quiz</h1>       
      <form onSubmit={submitQuiz} className='make-quiz'>
        <div className="category-dropdown-form d-flex flex-column">       
          <label>Category:</label>
          <select onChange={(e) => setCategory(e.target.value)}>
            <option>Select...</option>
            {categories.map((cat, index) => (
              <option key={index}>{cat.name}</option>
            ))}
          </select>
        </div>
        <div className="quiz-name-form d-flex flex-column">
          <label>Quiz name:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="author-form d-flex flex-column">
          <label>Created by:</label>
          <input
            type="text"
            value={user ? user.username : 'Guest User'}
            readOnly={true}
          />
        </div>
        <div className='image-form'>
          Choose an image: <br/>
          {imgArray.map((img, index) => (
            <label htmlFor='image-form' key={index}>
                <input 
                  type='radio'
                  name={image}
                  value={img}
                  onChange={(e) => setImage(e.target.value)}
                  key={index}
                  checked={image === img}
                />
              <img src={img} width={100} height={100}/>
            </label>
          ))}
        </div>
      </form>
      <div className='new-cat'>
        <p>Don't see a Category that fits your Quiz idea?</p>
        <button className='random'>
          <Link to={"/add-a-category"}>Add a new Category</Link>
        </button>
      </div>
      <div className="quit-next">
        <button className='random'>
          <Link to={"/"}>
            Quit
          </Link>
        </button>
        <button className='random' onClick={submitQuiz}>Next</button>
      </div>
      
    </div>
  )
}

export default QuizForm
