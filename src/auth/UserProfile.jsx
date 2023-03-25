import React, { useEffect, useState } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import { removeLocalStorageItems } from './auth-utils'

const UserProfile = () => {

  const [user, setUser] = useState(null)
  const nav = useNavigate()

  useEffect(() => {
    const newUser = {
      userId: localStorage.getItem('userId'),
      username: localStorage.getItem('username'),
      isAdmin: localStorage.getItem('isAdmin'),
    }
    setUser(newUser)
  }, [])

  const handleLogOut = async () => {

    const res = await fetch(`http://localhost:4001/auth/logout`, {
        credentials: 'include',
    })
    if (!res.ok) {
      const msg = `An error has occurred ${res.status}`
      throw new Error(msg)
    } 
    const data = await res.json()
    alert(data.message)
    setUser(null)
    removeLocalStorageItems()
    nav('/')
  }

   const username = localStorage.getItem('username')

  return (
    <>
      <div className="home">
        <h1>User Portal</h1>
        {user !== null ? <h3>Welcome back, {user.username}!</h3> : <h3>Please log in to continue</h3>}
        <h2>What would you like to do?</h2>
        <button>
          <Link to={'/make-a-quiz'}>Make a quiz</Link>
        </button>
        <button>
          <Link to={'/edit-a-quiz'}>Edit my quizzes</Link>
        </button>
        <button className='random' onClick={handleLogOut}>Log out</button>
      </div>
    </>
  )
}

export default UserProfile