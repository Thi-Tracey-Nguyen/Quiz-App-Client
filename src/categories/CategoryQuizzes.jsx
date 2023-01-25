import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

const CategoryQuizzes = ({ quizzes, categories }) => {

  const { categoryName } = useParams()

	// replace %20 in the URL's category name to space to match name in db
	let categoryNameConverted = categoryName.replaceAll('%20', ' ')

	// get the category object from the category name
	const cat = categories.find(category => category.name === categoryNameConverted)
	
	// get quizzes whose category matches categry id
	const quizzesByCat = quizzes.filter(quiz => quiz.category === cat._id)

	return (
		<>
			<h4>Quizzes of {categoryNameConverted} category</h4>
				<ul>
						{quizzesByCat.map((quizByCat, index) => (
						<li key={index}>
								<Link to={`/quizzes/${quizByCat._id}`}>{quizByCat.title}</Link>
						</li>
						))}
				</ul>
		</>
  )
}

export default CategoryQuizzes
