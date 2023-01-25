import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './home/Home'
import NavBar from './home/NavBar'
import Categories from './categories/Categories'
import Leaderboard from './leaderboard/Leaderboard'
import LogIn from './login/LogIn'
import QuizForm from './make-a-quiz/QuizForm'
import Profile from './profile/Profile'
import Quizzes from './categories/Quizzes'
import CategoryQuizzes from './categories/CategoryQuizzes'

const App = () => {
  const [ categories, setCategories ] = useState([])
  const [quizzes, setQuizzes] = useState([])

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
  
  return (
    <>
      <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/quizzes' element={<Quizzes quizzes={quizzes}/>} />
          <Route path='/categories' element={<Categories categories={categories} />} />
          <Route path='/categories/:category/:id' element={<CategoryQuizzes categories={categories} quizzes={quizzes}/>} />
          <Route path='/make-a-quiz' element={<QuizForm />} />
          <Route path='/edit-a-quiz' element={<QuizForm />} />
          <Route path='/leaderboard' element={<Leaderboard />} />
          <Route path='/log-in' element={<LogIn />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='*' element={<h4>Page not found</h4>} />
        </Routes>
    </>
  )
}

export default App