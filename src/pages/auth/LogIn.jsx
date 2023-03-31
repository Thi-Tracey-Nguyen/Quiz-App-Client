import React, { useState, useEffect, useContext } from 'react'
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'
import { setLocalStorageItems } from '../../utils/auth-utils'
import './login-register.css'
import { UserContext } from '../../UserContext';
import { postData } from '../../utils/fetch-API'

const LogIn = () => {

  const { user, setUser } = useContext(UserContext) 
  const [username, setUsername] = useState(localStorage.getItem('username'))
  const [password, setPassword] = useState('') 
  const [message, setMessage] = useState('')
  const nav = useNavigate()


  async function login(user) {
    const res = await postData(user, 'auth/login')
    const data = await res.json()
    console.log(data)
    setMessage(data.message)
    if (!res.ok) {
      const msg = `An error occurred ${res.status}`
      throw new Error(msg)
    } 
    setLocalStorageItems(data)
    setUser(data.user)
  }
  
  function handleSubmit(e) {
    e.preventDefault()

    const user = {
      username,
      password
    }
    login(user)
    nav('/user')
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
          <span className='tips'>For testing purposes: U: tester/P: tester123</span>
      </form>
    </div>
  )
}


export default LogIn