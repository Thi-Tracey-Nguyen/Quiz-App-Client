import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import ShowQuiz from './ShowQuiz'

const CategoryQuizzes = ({ quizzes, categories }) => {

	const { categoryName } = useParams()

	// replace %20 in the URL's category name to space to match name in db
	let categoryNameConverted = categoryName.replaceAll('%20', ' ')

	// get the category object from the category name
	const cat = categories.find(category => category.name === categoryNameConverted)

	// get quizzes whose category matches category id
	const quizzesByCat = quizzes.filter(quiz => quiz.category === cat._id)

	return (
		<div className='main-body-centered'>
			<h1>{categoryNameConverted} category</h1>
			<div className='card-container'>
				{quizzesByCat.map((quizByCat, index) => (
					<div key={index}>
						<ShowQuiz quiz={quizByCat} />
					</div>
				))}
			</div>
		</div>
	)
}

export default CategoryQuizzes
