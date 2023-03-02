import React from 'react'

const Test = () => {
  return (
    <div className='main-body flex-wrap' style={{ height: "100vh" }}>
      <article className="container">
        <img src='/brain.png' />
        <div className="content">
          <h2>Movie Trivia</h2>
          <p>Author: Dev Team</p>
          <p>No. of questions: 6</p>
          <p>Difficulty: Easy</p>
        </div>
      </article>
    </div>
  )
}

export default Test