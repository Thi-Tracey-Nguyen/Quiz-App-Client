import React, { useEffect, useState } from 'react'
import './login-register.css'

const Register = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  async function register(user) {
    const res = await fetch(`http://localhost:4001/auth/register`, {
      method: 'POST', 
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }, 
      body: JSON.stringify(user)
    })
    const data = await res.json()
    return res
  }

  async function handleSubmit(e) {
    e.preventDefault()

    const newUser = {
      username,
      password
    }

    const res = await register(newUser)
    console.log(res)

    if (res.status === 201) {
      alert('User created sucessfully!')
    }
  }
  

  return (
    <div className='home-login'>
      <h1>Register</h1>
      <form className='auth'>
        <input placeholder='username' onChange={e => setUsername(e.target.value)}/>
        <input placeholder='password' type='password' onChange={e => setPassword(e.target.value)}/>
        <button className='random' onClick={handleSubmit}> Register </button>
      </form>
    </div> 
  )
}

export default Register