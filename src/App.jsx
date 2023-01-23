import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './home/Home'
import NavBar from './home/NavBar'
import Categories from './categories/Categories'
import Leaderboard from './leaderboard/Leaderboard'
import LogIn from './login/LogIn'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/categories' element={<Categories />} />
          <Route path='/leaderboard' element={<Leaderboard />} />
          <Route path='/login' element={<LogIn />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App