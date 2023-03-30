import React, { useEffect, useState, useContext } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import { removeLocalStorageItems } from '../../utils/auth-utils'
import { UserContext } from '../../UserContext'

const UserProfile = () => {

  // const [user, setUser] = useState(null)
  const { user, setUser } = useContext(UserContext)
  const nav = useNavigate()

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

  return (
    <>
      <div className="home">
        {user !== null ? <h2>Welcome back, {user.username}!</h2> : <h2>Please log in to continue</h2>}
        <h3>What would you like to do?</h3>
        <button className='random'>
          <Link to={'/make-a-quiz'}>Make a quiz</Link>
        </button>
        <button className='random'>
          <Link to={'/edit-a-quiz'}>Edit my quizzes</Link>
        </button>
        <button className='random' onClick={handleLogOut}>Log out</button>
      </div>
    </>
  )
}

export default UserProfile