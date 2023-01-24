import React from 'react'
import { useParams } from 'react-router-dom'

const Quizzes = () => {

  // extract category info from the URL 
  const { category } = useParams()

  console.log(category)

  return (
    <>
      <h1>Quizzes of .... category</h1>
    </>
  )
}

export default Quizzes