import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

const NavBar = () => {
  const username = localStorage.getItem('username')

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link className='navbar-brand' to='/'>
          <img src={logo} alt='Logo' className='logo-nav' />
        </Link>
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
              <Link className='nav-link'  to='/make-a-quiz'>Make a quiz</Link>
            </li>
          </ul>
          <ul className='navbar-nav icon'> 
            <li className="nav-item">
              <Link className='nav-link'  to='/auth/login/'>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                </svg>
              </Link>
            </li>
          </ul>
      </div>
    </div>
  </nav>
  )
}

export default NavBar
