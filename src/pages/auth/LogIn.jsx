import React, { useState, useEffect, useContext } from 'react'
import { redirect, useNavigate } from "react-router-dom";
import Register from './Register'
import { Link } from 'react-router-dom'
import { setLocalStorageItems } from '../../utils/auth-utils'
import './login-register.css'
import { UserContext } from '../../UserContext';

const LogIn = () => {

  const [jwt, setJwt] = useState(null)
  const { user, setUser } = useContext(UserContext) 
  const [username, setUsername] = useState(localStorage.getItem('username'))
  const [password, setPassword] = useState('') 
  const [message, setMessage] = useState('')
  const nav = useNavigate()

  // if (user !== null) {
  //   nav('/user')
  // } 

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
    // console.log(data)
    setMessage(data.message)
    if (!res.ok) {
      const msg = `An error occurred ${res.status}`
      throw new Error(msg)
    } 
    setJwt(data)
    setUser(data.user)
    nav('/user')
  }
  
  // setup local storage from jwt data
  useEffect(() => {
    setLocalStorageItems(jwt)
  }, [user])

  function handleSubmit(e) {
    e.preventDefault()

    const user = {
      username,
      password
    }
    login(user)
  }

  return (
    <div className='home-login'>
      <h1>Login</h1>
      <form className='auth'>
          <input placeholder='username' onChange={e => setUsername(e.target.value)}/>
          <input placeholder='password' onChange={e => setPassword(e.target.value)}/>
          {message !== '' ? <p>{message}</p> : ''}
          <div className='buttons-login'>
            <button className='random' onClick={handleSubmit}> Login </button>
            <p>Or</p>
            <button className='random'>
              <Link to='/auth/register'>Register</Link>
            </button>
          </div>
      </form>
    </div>
  )
}


export default LogIn