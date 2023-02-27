import React, { useEffect, useState } from 'react'

const Register = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  function handleSubmit(e) {
    e.preventDefault()

    const newUser = {
      username,
      password
    }

    async function register(user) {
      const res = await fetch(`https://quiz-app-server-production-09e8.up.railway.app/register`, {
        method: 'POST', 
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }, 
        body: JSON.stringify(user)
      })
      const data = res.json()
      console.log(data)
    }

    register(newUser)
  }

  return (
    <div className='main-body flex-wrap' style={{ height: "100vh" }} onSubmit={handleSubmit}>
      <h1>Register</h1>
      <input placeholder='username' onChange={e => setUsername(e.target.value)}/>
      <input placeholder='password' onChange={e => setPassword(e.target.value)}/>
      <button type='submit'>Register</button>
    </div> 
  )
}

export default Register