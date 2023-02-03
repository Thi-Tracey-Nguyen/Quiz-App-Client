// import React, { useState } from 'react'
// import QuestionsForm from './QuestionsForm'

// const AddQuestion = ({ questions, quizzes, setQuestions }) => {
// 	// sets the state of how many question forms appear on the page
//   const [formQuestions, setFormQuestions] = useState([
//     <QuestionsForm 
//       questions={questions}
//       quizzes={quizzes}
//       setQuestions={setQuestions}
//       key={0}
//     />
//   ])
//   // Adds a new question form to the page on button click
//   let handleAddQuestion = (e) => {
//     e.preventDefault()
//     setFormQuestions([...formQuestions, 
//       <QuestionsForm 
//         questions={questions}
//         quizzes={quizzes}
//         setQuestions={setQuestions}
//         key={formQuestions.length}
//       />
//     ])
//   }

// 	return (
//     <>
//       <div onSubmit={handleAddQuestion}>
//         {formQuestions}
//         {/* <button>Add new question</button> */}
//       </div>
//     </>
//   )
// }

// export default AddQuestion