import React, { useParams, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const CategoryQuizzes = ({ quizzes }) => {
	// extract category info from the URL 
	const GetCategoryQuizzesWrapper = () => {
    const { id } = useParams()
    const quizList = categories[id]
    return quizList ? <ShowQuizzes quizList={quizList} /> : <h4>Quizzes not found!</h4>
  }
    
	return (
		<>
			<h1>Quizzes of {category.name} category</h1>
				<ul>
						{quizzes.map((quiz, index) => (
						<li key={index}>
								<Link to={`/categories/${category}/${quiz.title}`}>{quiz.title}</Link>
						</li>
						))}
				</ul>
		</>
  )
}

export default CategoryQuizzes
