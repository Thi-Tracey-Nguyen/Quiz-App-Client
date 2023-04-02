import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { postDataWithObj } from '../../utils/fetch-API'
import './login-register.css'

const Register = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const nav = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()

    const newUser = {
      username,
      password
    }

    const res = await postDataWithObj(newUser, 'auth/register', 'POST')
    console.log(res)
    const data = await res.json()

    if (!res.ok) {
      setMessage(data.message)
      throw new Error (res.message)
    }

    alert(data.message)
    nav('/auth/login')
  }
  

  return (
    <div className='home-login'>
      <h1>Register</h1>
      <form className='auth'>
        <input placeholder='username' onChange={e => setUsername(e.target.value)}/>
        <input placeholder='password' type='password' onChange={e => setPassword(e.target.value)}/>
        {message && <span className='tips'>{message}</span>}
        <button className='random' onClick={handleSubmit}> Register </button>
      </form>
    </div> 
  )
}

export default Register