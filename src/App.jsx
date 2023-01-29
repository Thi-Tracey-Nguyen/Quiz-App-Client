import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, useParams, useNavigate } from 'react-router-dom'
import Home from './home/Home'
import NavBar from './home/NavBar'
import Footer from './home/Footer'
import Categories from './categories/Categories'
import Leaderboard from './leaderboard/Leaderboard'
import LogIn from './login/LogIn'
import QuizForm from './make-a-quiz/QuizForm'
import Profile from './profile/Profile'
import Quizzes from './categories/Quizzes'
import CategoryQuizzes from './categories/CategoryQuizzes'
import EditQuizzes from './edit-a-quiz/EditQuizzes'
import Result from './result/Result'
// import ShowQuestion from './take-a-quiz/ShowQuestion'
import TakeAQuiz from './take-a-quiz/TakeAQuiz'
import AddQuestionsForm from './make-a-quiz/AddQuestionsForm'

const App = () => {
  const [ categories, setCategories ] = useState([])
  const [quizzes, setQuizzes] = useState([])
  // const nav = useNavigate()

  useEffect(() => {
    async function getCategories() {
      const res = await fetch('https://quiz-app-server-production-09e8.up.railway.app/categories')
      const data = await res.json()
      setCategories(data)
    }
    getCategories()
  }, [])

  useEffect(() => {
    async function getQuizzes() {
      const res = await fetch('https://quiz-app-server-production-09e8.up.railway.app/quizzes')
      const data = await res.json()
      setQuizzes(data)
    }
    getQuizzes()
  }, [])

  const [answers, setAnswers] = useState([])

  //HOC for TakeAQuiz to access quizId in the URL
  // const { quizId } = useParams()
  // console.log(useParams())
  
  // // get quiz object from quizId
  // const quiz = quizzes.find(quiz => quiz._id === quizId)
  // console.log(quizId)

  // const [index, setIndex] = useState(0)
  // // const question = quiz.questions[index]
  
  //this function gets points sent from TakeAQuiz component (child to parent)
  function getAnswers(data) {
    setAnswers(data)
    console.log(data)
    // nav(`/result/${quizId}`)
  }
  
  // HOC for ShowQuestion to access quizId in the URL
  const TakeAQuizWrapper = () => {
    const { quizId } = useParams()
    
    // get quiz object from quizId
    const quiz = quizzes.find(quiz => quiz._id === quizId)

    return quiz ? <TakeAQuiz quiz={quiz} onChange={getAnswers} /> : <h4>Loading... </h4>
  }

  // HOC for Result to access quizId in the URL
  const ResultWrapper = () => {
    const { quizId } = useParams()
    
    // get quiz object from quizId
    const quiz = quizzes.find(quiz => quiz._id === quizId)

    return quiz ? <Result quiz={quiz} answers={answers} /> : <h4>Loading... </h4>
  }

  // take a quiz
   
  // const [ answers, setAnswers ] = useState([])
  // // const [ points, setPoints ] = useState(0)

  // callback function to get answer from ShowQuestion (passing props from child -> parent)
  // function getData(data) {
  //   setAnswers([...answers, data])
  // }

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
    // Add newly created quiz data to the state
    setQuizzes(quizzes.push(newQuiz), data)
  }

  // Add a new question to the Quiz
  const addQuestion = async (quizId, question, image, correctAnswer, incorrectAnswers) => {
    // Add a new question
    const newQuestion = {
      quizId: AddQuestionWrapper(), // How will this fetch the quiz ID from previous page?
      question: question,
      image: image,
      correctAnswer: correctAnswer,
      incorrectAnswers: incorrectAnswers
    }
    // Post new question to quiz in the API
    const createdQuestion = await fetch('https://quiz-app-server-production-09e8.up.railway.app/questions', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newQuestion)
    })
    const data = await createdQuestion.json()
    // I think what we need to do here is push this question to the quiz questions array
    setQuizzes(questions.push(newQuestion), data)
  }
  
  // HOC for AddQuestionsForm to access quizTitle in the URL
  const AddQuestionWrapper = () => {
    const { quizTitle } = useParams()
    
    // get quiz ObjectId from quizTitle
    const quiz = quizzes.find(quiz => quiz.title === quizTitle)
    return quiz._id
  }

  return (
    <>
      <NavBar />
        <Routes>
          <Route path='/' element={<Home quizzes={quizzes}/>} />
          <Route path='/quizzes' element={<Quizzes quizzes={quizzes}/>} />
          <Route path='/categories' element={<Categories categories={categories} />} />
          <Route path='/categories/:categoryName' element={<CategoryQuizzes categories={categories} quizzes={quizzes}/>} />
          {/* <Route path='/quizzes/:quizId' element={<TakeAQuizWrapper />} /> */}
          <Route path='/quizzes/:quizId' element={<TakeAQuizWrapper />} />
          <Route path='/make-a-quiz' element={<QuizForm />} />
          <Route path='/add-questions/:quizTitle' element={<AddQuestionsForm />} />
          <Route path='/edit-a-quiz' element={<EditQuizzes quizzes={quizzes}/>} />
          <Route path='/leaderboard' element={<Leaderboard />} />
          <Route path='/log-in' element={<LogIn />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/result/:quizId' element={<ResultWrapper />} />
          <Route path='*' element={<h4>Page not found</h4>} />
        </Routes>
      <Footer />
    </>
  )
}

export default App