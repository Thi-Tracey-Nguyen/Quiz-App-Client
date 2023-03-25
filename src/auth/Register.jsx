import React, { useEffect, useState } from 'react'

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

  function handleSubmit(e) {
    e.preventDefault()

    const newUser = {
      username,
      password
    }

    const res = register(newUser)
   
    if (res.status === 201) {
      alert('User created sucessfully!')
    }
  }
  

  return (
    <div className='home small'>
      <h1>Register</h1>
      <input placeholder='username' onChange={e => setUsername(e.target.value)}/>
      <input placeholder='password' onChange={e => setPassword(e.target.value)}/>
      <button onClick={handleSubmit}> Register </button>
    </div> 
  )
}

export default Register