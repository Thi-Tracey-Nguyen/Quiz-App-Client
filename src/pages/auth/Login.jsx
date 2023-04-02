import React, { useState, useEffect, useContext } from 'react'
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'
import { setLocalStorageItems } from '../../utils/auth-utils'
import './login-register.css'
import { UserContext } from '../../UserContext';
import { postDataWithObj } from '../../utils/fetch-API'

const Login = () => {

  const { user, setUser } = useContext(UserContext) 
  const [username, setUsername] = useState(localStorage.getItem('username'))
  const [password, setPassword] = useState('') 
  const [message, setMessage] = useState(null)
  const nav = useNavigate()


  async function login(user) {
    const res = await postDataWithObj(user, 'auth/login', 'POST')
    const data = await res.json()

    if (!res.ok) {
      const msg = `An error occurred ${res.status}`
      setMessage(data.message)
      throw new Error(msg)
    } 
    setMessage(null)
    setLocalStorageItems(data)
    setUser(data.user)

    if (user) {
      nav('/user')
    }
  }
  
  function handleSubmit(e) {
    e.preventDefault()

    const loginUser = {
      username,
      password
    }
    login(loginUser)
  }

  return (
    <div className='home-login'>
      <h1>Login</h1>
      <form className='auth'>
          <input placeholder='username' onChange={e => setUsername(e.target.value)}/>
          <input placeholder='password' type='password' onChange={e => setPassword(e.target.value)}/>
          {message ? <p>{message}</p> : ''}
          <div className='buttons-login'>
            <button className='random' onClick={handleSubmit}> Login </button>
            <p>Or</p>
            <button className='random'>
              <Link to='/auth/register'>Register</Link>
            </button>
          </div>
          <span className='tips'>For testing purposes: U: tester/P: tester123</span>
      </form>
    </div>
  )
}


export default Login