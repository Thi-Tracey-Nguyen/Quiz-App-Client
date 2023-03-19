import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const UserProfile = () => {

  const [user, setUser] = useState(null)
  const { userId } = useParams()
  const nav = useNavigate()

  useEffect(() => {
    async function fetchUser() {
      const res = await fetch(`http://localhost:4001/auth/user/${userId}`, {
        credentials: 'include',
      })

      if (!res.ok) {
        const message = `An error has occurred ${res.status}`
        throw new Error(message)
      }

      const data = await res.json()
      console.log(data)
      setUser(data)
    }
    fetchUser()
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
    nav('/')
  }

  return (
    <>
      <div className="home">
        <h1>User Portal</h1>
        {user !== null ? <h3>Welcome back, {user.username}!</h3> : ''}
        <button onClick={handleLogOut}>Log out</button>
      </div>
    </>
  )
}

export default UserProfile