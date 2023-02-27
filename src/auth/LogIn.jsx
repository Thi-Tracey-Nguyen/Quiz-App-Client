import React from 'react'
import Register from './Register'
import { Link } from 'react-router-dom'

const LogIn = () => {
  return (
    <div className='main-body' style={{ height: "100vh" }}>
      <h1>Login form</h1>
      <p>Or</p>
      <Link to='/register'>Register</Link>
    </div>
  )
}

export default LogIn