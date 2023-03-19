import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-transparent">
      <div className="container-fluid">
          <Link className='navbar-brand' to='/'>
            <img src={logo} alt='Logo' className='logo-nav' />
          </Link>
          <Link className="navbar-brand" to="/"></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
              <li className="nav-item">
                <Link className='nav-link' to='/quizzes'>All Quizzes</Link>
              </li>
              <li className="nav-item">
                <Link className='nav-link' to='/categories'>Categories</Link>
              </li>
              <li className="nav-item">
                <Link className='nav-link' to='/make-a-quiz'>Make a quiz</Link>
              </li>
              <li className="nav-item">
                <Link className='nav-link' to='/edit-a-quiz'>Edit a quiz</Link>
              </li>
              <li className="nav-item">
                <Link className='nav-link' to='/auth/login'>Log In</Link>
              </li>
              
          </ul>
          </div>
      </div>
    </nav>
  )
}

export default NavBar

