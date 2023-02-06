import React from 'react'
import { Link } from 'react-router-dom'

const ShowQuiz = ({ quiz }) => {
	return (
    <>
      <img src={quiz.image} alt='Alt text for quiz image'/>
			<br />
			<Link to={`/quizzes/${quiz._id}`}>{quiz.title}</Link>
    	<p>Author: {quiz.author} <br />
    	{quiz.questions.length} questions</p>
    </>
  )
}

export default ShowQuiz