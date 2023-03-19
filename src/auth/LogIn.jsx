import React, { useState } from 'react'
import { redirect, useNavigate } from "react-router-dom";
import Register from './Register'
import { Link } from 'react-router-dom'

const LogIn = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const nav = useNavigate()

  async function login(user) {
    const res = await fetch(`http://localhost:4001/auth/login`, {
      method: 'POST', 
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }, 
      credentials: 'include',
      body: JSON.stringify(user)
    })
    const data = await res.json()

    if (!res.ok) {
      // const msg = `An error occurred ${res.status}`
      // throw new Error(msg)
      setMessage(data.message)
    } else {
      nav(`/user/${data._id}`)
    }
  }
  

  function handleSubmit(e) {
    e.preventDefault()

    const user = {
      username,
      password
    }
    login(user)
  }

  return (
    <div className='home small'>
      <h1>Login</h1>
      <input placeholder='username' onChange={e => setUsername(e.target.value)}/>
      <input placeholder='password' onChange={e => setPassword(e.target.value)}/>
      {message !== '' ? <p>{message}</p> : ''}
      <button className='random' onClick={handleSubmit}> Login </button>
      <p>Or</p>
      <button className='random'>
        <Link to='/auth/register'>Register</Link>
      </button>
    </div>
  )
}


export default LogIn