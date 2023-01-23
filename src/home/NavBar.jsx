import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-primary bg-gradient">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src="./question-icon.svg" alt="Logo" width="30" height="24" />
          </Link>
        </div>
        <div className="container-fluid">
          {/* <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button> */}
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Quizzes
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/categories">Categories</Link></li>
                  <li><Link className="dropdown-item" to="#">Take a quiz</Link></li>
                  <li><Link className="dropdown-item" to="#">Make a quiz</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/leaderboard">Leaderboard</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">Log In</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">Profile</Link>
              </li>
            </ul>
          </div>
      </div>
    </nav>
  </>
  )
}

export default NavBar