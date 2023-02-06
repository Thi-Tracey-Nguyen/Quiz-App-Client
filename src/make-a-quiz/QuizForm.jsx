import React, { useState, Image } from 'react'
import { Link, redirect, useNavigate } from 'react-router-dom'
import "../styles/CommonStyles.css";

const QuizForm = ({ quizzes, categories, setQuizzes }) => {
  const [category, setCategory] = useState('')
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [questions, setQuestions] = useState([])
  const [image, setImage] = useState('')
  const imgArray = [
    'src/assets/brain.png', 'src/assets/fashion.png', 'src/assets/geography.png',
    'src/assets/maths.png', 'src/assets/movies.png', 'src/assets/music.png',
    'src/assets/nature.png', 'src/assets/pets.png', 'src/assets/pizza.png',
    'src/assets/question-mark.png', 'src/assets/test.png', 'src/assets/tv.png'
  ]

  const nav = useNavigate()

  // Function to check if category entered and if so call addQuiz function
  async function submitQuiz(e) {
    e.preventDefault()
    if (!category) {
      alert("You need to select a category");
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
      image: image,
    };
    // Post new quiz to the API
    const createdQuiz = await fetch('https://quiz-app-server-production-09e8.up.railway.app/quizzes', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newQuiz)
    })
    console.log(newQuiz)
    const data = await createdQuiz.json()
    // Update quizzes state with the new quiz
    const updatedQuizzes = quizzes.push(data);
    setQuizzes(updatedQuizzes);
    // Navigate to add questions to the new quiz
    navToNewQuiz(data);
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
    <>
      <div class="main-body flex-wrap" style={{ height: "100vh" }}>
        <h1>Make a new Quiz</h1>
        <form onSubmit={submitQuiz}>
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
              value={author}
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
                    value={img}
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
            <button  class="text-dark fw-bold">Next</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default QuizForm
