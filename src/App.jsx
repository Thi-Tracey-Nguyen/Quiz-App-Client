import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './home/Home'
import NavBar from './home/NavBar'
import Categories from './categories/Categories'
import Leaderboard from './leaderboard/Leaderboard'
import LogIn from './login/LogIn'
import QuizForm from './make-a-quiz/QuizForm'
import Profile from './profile/Profile'

const App = () => {
  return (
    <>
      <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/categories' element={<Categories />} />
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