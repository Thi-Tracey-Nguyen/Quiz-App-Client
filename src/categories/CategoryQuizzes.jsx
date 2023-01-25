import React, { useParams, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const CategoryQuizzes = ({ quizzes, categories }) => {
  const { category } = useParams()
	const { id } = useParams()
  
	const cat = categories[id] 
	const quiz = quizzes[category]
    
	
	return (
		<>
			<h1>Quizzes of {category.name} category</h1>
				<ul>
						{quizzes.map((quiz, index) => (
						<li key={index}>
								<Link to={`/categories/${category}/${index}`}>{quiz.title}</Link>
						</li>
						))}
				</ul>
		</>
  )
}

export default CategoryQuizzes
