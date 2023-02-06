import React, { useState, Image, useEffect } from 'react'
import { Link, redirect, useNavigate, useParams } from 'react-router-dom'
import "../styles/CommonStyles.css";

const EditAQuiz = ({ categories }) => {
  const { quizId } = useParams()
  const [quiz, setQuiz] = useState('')
  const [category, setCategory] = useState('')
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [image, setImage] = useState('')
  const imgArray = [
    'src/assets/brain.png', 'src/assets/fashion.png', 'src/assets/geography.png',
    'src/assets/maths.png', 'src/assets/movies.png', 'src/assets/music.png',
    'src/assets/nature.png', 'src/assets/pets.png', 'src/assets/pizza.png',
    'src/assets/question-mark.png', 'src/assets/test.png', 'src/assets/tv.png'
  ]

  const nav = useNavigate()

  useEffect(() => {
    async function getQuiz() {
      const res = await fetch(`https://quiz-app-server-production-09e8.up.railway.app/quizzes/${quizId}`)
      const data = await res.json()
      setQuiz(data)
    }
    getQuiz()
  }, [quizId])

  // Function to check if category entered and if so call addQuiz function
  async function submitQuiz(e) {
    e.preventDefault()
    if (!category) {
      alert("You need to select a category");
    } else {
      editQuiz(category, title, author, image)
      nav('/quizzes')
    }
  }

  // Add a new quiz to the API
  const editQuiz = async (category, title, author, image) => {
    // create a new quiz
    const editedQuiz = {
      category: category || quiz.category.name,
      title: title || quiz.title,
      author: author || quiz.author,
      image: image || quiz.image
    }

    console.log(editedQuiz)
    // Post new quiz to the API
    const newQuiz = await fetch(`https://quiz-app-server-production-09e8.up.railway.app/quizzes/${quiz._id}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(editedQuiz)
    })
    
    const data = await newQuiz.json()
    // Update quizzes state with the new quiz
    // const updatedQuizzes = quizzes.push(data)
    // setQuizzes(updatedQuizzes)
    // Navigate to add questions to the new quiz
    // const findTitle = data.title
    // const quiz = quizzes.find(quiz => quiz.title === findTitle)
    // console.log(quizzes)
    // nav(`/add-questions/${quiz._id}`)
    // const convertedTitle = await data.title.replaceAll(' ', '%20')
    // console.log(convertedTitle)
    // nav(`/add-questions/${convertedTitle}`)
    // console.log(convertedTitle)
  };

  // // Uses the new quiz data to get the ID of the new quiz from the DB
  function navToNewQuiz(data) {
    // Find the quiz in the DB where the title matches the quiz just created
    const quiz = quizzes.find((quiz) => quiz.title === data.title);
    // Use the ID of that quiz to navigate to the correct Add Questions page
    nav(`/add-questions/${quiz._id}`);
  }

  return (
    quiz ? 
      <>
        <div class="main-body flex-wrap" style={{ height: "100vh" }}>
          <h1>Edit quiz</h1>
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
                onChange={(e) => setAuthor(e.target.value)}
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
            <div class="d-flex justify-content-between">
              <button>
                <Link to={"/"} class="text-dark fw-bold">
                  Quit
                </Link>
              </button>
              <button  class="text-dark fw-bold" type='submit'>Save changes</button>
              {/* <button  class="text-dark fw-bold">Next</button> */}
            </div>
          </form>
        </div>
      </>
    : 'Loading...'
  )
}

export default EditAQuiz
