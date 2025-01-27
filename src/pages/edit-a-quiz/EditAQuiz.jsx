import React, { useState, useEffect, useContext } from 'react'
import { Link, redirect, useNavigate, useParams } from 'react-router-dom'
import { UserContext } from '../../UserContext'

const EditAQuiz = ({ categories }) => {
  const [quiz, setQuiz] = useState('')
  const [category, setCategory] = useState('')
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [image, setImage] = useState('')
  const imgArray = [
    '/brain.png', '/fashion.png', '/geography.png',
    '/maths.png', '/movies.png', '/music.png',
    '/nature.png', '/pets.png', '/pizza.png',
    '/question-mark.png', '/test.png', '/tv.png'
  ]
  const { quizId } = useParams()
  const { user } = useContext(UserContext)
  const nav = useNavigate()

  useEffect(() => {
    async function getQuiz() {
      const res = await fetch(`https://quiz-app-server.up.railway.app/quizzes/${quizId}`)
      const data = await res.json()
      setQuiz(data)
    }
    getQuiz()
  }, [quizId])

  // send edited quiz info back to the server
  async function submitQuiz(e) {
    e.preventDefault()
    editQuiz(category, title, quiz, user, image)
    nav('/quizzes/')
  }

  // Edit quiz's information
  const editQuiz = async (category, title, quiz, user, image) => {
    // create a new quiz
    const editedQuiz = {
      category: category || quiz.category.name,
      title: title || quiz.title,
      authorId: user && user._id,
      author: quiz.author,
      image: image || quiz.image
    }

    console.log(editedQuiz)
    // Post new quiz to the API
    const newQuiz = await fetch(`https://quiz-app-server.up.railway.app/quizzes/${quiz._id}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(editedQuiz)
    })
  }

  // // Uses the new quiz data to get the ID of the new quiz from the DB
  // function navToNewQuiz(data) {
  //   // Find the quiz in the DB where the title matches the quiz just created
  //   const quiz = quizzes.find((quiz) => quiz.title === data.title);
  //   // Use the ID of that quiz to navigate to the correct Add Questions page
  //   nav(`/add-questions/${quiz._id}`);
  // }

  function handleClickQuestions(event) {
    event.preventDefault()
    editQuiz(category, title, quiz, user, image)
    nav('./questions')
  }

  return (
    <div className='home'>    
      <h1>Edit quiz</h1> 
      {quiz ?
        <div>
          <form onSubmit={submitQuiz}>
            <div className="category-dropdown-form d-flex flex-column">       
              <label>Category:</label>
              <select onChange={(e) => setCategory(e.target.value)} defaultValue={quiz.category.name}>
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
                defaultValue={quiz.title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="author-form d-flex flex-column">
              <label>Created by:</label>
              <input
                type="text"
                defaultValue={quiz.author}
                readOnly = {true}
              />
            </div>
            <div className='image-form'>
              Choose an image: <br/>
              {imgArray.map((img, index) => (
                <label htmlFor='image-form' key={index}>
                    <input 
                      type='radio'
                      name={image}
                      defaultValue={img}
                      onChange={(e) => setImage(e.target.value)}
                      key={index}
                      checked={image === img}
                    />
                  <img src={img} width={100} height={100}/>
                </label>
              ))}
            </div>
            <br />
            <p>Don't see a Category that fits your Quiz idea?
              <br/>
            <Link to={"/add-a-category"}>Add a new Category</Link>
            </p>
            <br />
            <div className="edit-quiz-button">
              <button className='random'>
                <Link to="/quizzes">
                  Quit
                </Link>
              </button>
              <button  className='random' type='submit'>Save changes & Exit</button>
              <button onClick={handleClickQuestions} className='random' >Edit questions</button>
            </div>
          </form> 
        </div> : <h4>Loading...</h4>
      }
    </div>
  )
}

export default EditAQuiz
