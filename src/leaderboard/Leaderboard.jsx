import React, { useEffect } from 'react'

const Leaderboard = () => {


  useEffect(() => {
    async function fetchUser() {
      const res = await fetch(`http://localhost:4001/auth/user`, {
        credentials: 'include',
      })

      if (!res.ok) {
        const message = `An error has occurred ${res.status}`
        throw new Error(message)
      }

      const data = await res.json()

      console.log(data)
    }
    fetchUser()
  }, [])

  const handleLogOut = async () => {

    await fetch(`http://localhost:4001/auth/logout`, {
        credentials: 'include',
      })
  }


  return (
    <>
      <div>Leaderboard</div>
      <button onClick={handleLogOut}>Log out</button>
    </>
  )
}

export default Leaderboard