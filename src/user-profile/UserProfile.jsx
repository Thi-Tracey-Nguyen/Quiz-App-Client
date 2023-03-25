import React, { useEffect, useState } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'

const UserProfile = () => {

  // const [username, setUSername] = useState('')
  // const { userId } = useParams()
  const nav = useNavigate()

  // useEffect(() => {
  //   async function fetchUser() {
  //     const res = await fetch(`http://localhost:4001/auth/user/${userId}`, {
  //       credentials: 'include',
  //     })

  //     if (!res.ok) {
  //       const message = `An error has occurred ${res.status}`
  //       throw new Error(message)
  //     }

  //     const data = await res.json()
  //     console.log(data)
  //     setUser(data)
  //   }
  //   fetchUser()
  // }, [])

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
    nav('/')
  }

   const username = localStorage.getItem('username')

  return (
    <>
      <div className="home">
        <h1>User Portal</h1>
        {username !== null ? <h3>Welcome back, {username}!</h3> : <h3>Please log in to continue</h3>}
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