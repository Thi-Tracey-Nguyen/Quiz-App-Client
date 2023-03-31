import React, { useContext } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import { removeLocalStorageItems } from '../../utils/auth-utils'
import { UserContext } from '../../UserContext'
import { getData } from '../../utils/fetch-API'

const UserProfile = () => {

  const { user, setUser } = useContext(UserContext)
  const nav = useNavigate()

  const handleLogOut = async () => {

    const res = await getData('auth/logout')
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
      {user ? 
      <div className="home">
          <h2>Welcome back, {user.username}!</h2> 
          <h3>What would you like to do?</h3>
          <div className='options'>
            <button className='random'>
              <Link to={'/make-a-quiz'}>Make a quiz</Link>
            </button>
            <button className='random'>
              <Link to={'/edit-a-quiz'}>Edit my quizzes</Link>
            </button>
          </div>
          <button className='random' onClick={handleLogOut}>Log out</button>
      </div>
      : <h2 className='home'>Please log in to continue</h2>
      }
    </>

  )
}

export default UserProfile