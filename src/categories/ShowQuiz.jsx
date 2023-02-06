import React from 'react'
import { Link } from 'react-router-dom'

const ShowQuiz = ({ quiz }) => {	
	return (
    <>
      <img src={quiz.image} alt='Alt text for quiz image' className='img-fixed-size' style={{width: '15rem', height: '15rem'}}/>
			<br />
			<Link to={`/quizzes/${quiz._id}`} className='d-flex justify-content-center text-dark fw-bold'>{quiz.title}</Link>
    	<div className='d-flex  flex-column justify-content-center' >
				<div className='d-flex justify-content-center'>Author: {quiz.author} </div>
				{quiz.questions.length === 0 ? '0 questions' :
					<div className='d-flex justify-content-center'>{quiz.questions.length} questions</div>
				}
			</div>
    </>
  )
}
export default ShowQuiz