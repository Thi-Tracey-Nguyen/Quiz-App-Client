import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'
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
import ShowQuestion from './take-a-quiz/ShowQuestion'
import ShowQuiz from './take-a-quiz/ShowQuiz'

const App = () => {
  const [ categories, setCategories ] = useState([])
  const [quizzes, setQuizzes] = useState([])


  async function getCategories() {
    const res = await fetch('https://quiz-app-server-production-09e8.up.railway.app/categories')
    const data = await res.json()
    setCategories(data)
  }
  
  async function getQuizzes() {
    const res = await fetch('https://quiz-app-server-production-09e8.up.railway.app/quizzes')
    const data = await res.json()
    setQuizzes(data)
  }

  useEffect(() => {
    getCategories()
    getQuizzes()
  }, [])

  //HOC for ShowQuiz
  const ShowQuizWrapper = () => {
    const { quizId } = useParams()
    
    // get quiz object from quizId
    const quiz = quizzes.find(quiz => quiz._id === quizId)

    return quiz ? <ShowQuiz quiz={quiz} /> : <h4>Loading... </h4>
  }
  
  return (
    <>
      <NavBar />
        <Routes>
          <Route path='/' element={<Home quizzes={quizzes}/>} />
          <Route path='/quizzes' element={<Quizzes quizzes={quizzes}/>} />
          <Route path='/categories' element={<Categories categories={categories} />} />
          <Route path='/categories/:categoryName' element={<CategoryQuizzes categories={categories} quizzes={quizzes}/>} />
          <Route path='/quizzes/:quizId' element={<ShowQuizWrapper />} />
          <Route path='/make-a-quiz' element={<QuizForm />} />
          <Route path='/edit-a-quiz' element={<QuizForm />} />
          <Route path='/leaderboard' element={<Leaderboard />} />
          <Route path='/log-in' element={<LogIn />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='*' element={<h4>Page not found</h4>} />
        </Routes>
      <Footer />
    </>
  )
}

export default App