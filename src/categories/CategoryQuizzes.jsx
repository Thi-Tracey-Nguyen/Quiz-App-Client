import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import ShowQuiz from './ShowQuiz'
import '../styles/CommonStyles.css'

const CategoryQuizzes = ({ quizzes, categories }) => {

	const { categoryName } = useParams()

	// replace %20 in the URL's category name to space to match name in db
	let categoryNameConverted = categoryName.replaceAll('%20', ' ')

	// get the category object from the category name
	const cat = categories.find(category => category.name === categoryNameConverted)

	// get quizzes whose category matches category id
	const quizzesByCat = quizzes.filter(quiz => quiz.category === cat._id)

	return (
		<div>
			<h1>Quizzes of {categoryNameConverted} category</h1>
			<ul>
				{quizzesByCat.map((quizByCat, index) => (
					<div key={index}>
						<ShowQuiz quiz={quizByCat} />
					</div>
				))}
			</ul>
		</div>
	)
}

export default CategoryQuizzes
