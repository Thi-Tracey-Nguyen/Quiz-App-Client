import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import ShowQuiz from "../categories/ShowQuiz"
import QuestionsForm from "../make-a-quiz/QuestionsForm"


const EditQuizzes = ({ quizzes }) => {
  const [selectedQuiz, setSelectedQuiz] = useState(null)
  const [showConfirm, setShowConfirm] = useState(false)
  const [selectedQuizEdit, setSelectedQuizEdit] = useState(null)
  const [showConfirmEdit, setShowConfirmEdit] = useState(false)
    
  const navigateTo = useNavigate()

  const handleConfirmDelete = () => {
    console.log('calling handleDeleteQuiz :', selectedQuiz._id)
    handleDeleteQuiz(selectedQuiz._id)
    setSelectedQuiz(null)        
    setShowConfirm(true) 
    navigateTo('/edit-a-quiz/')
  }

  const handleDeleteQuiz = async (id) => {
    console.log('Deleting quiz:', id)
    try {
      await fetch(
        `https://quiz-app-server-production-09e8.up.railway.app/quizzes/${id}`,
        {
          method: "DELETE",
        }
      )
      // console.log('Quiz deleted:', title)
    } catch (error) {
      console.error(error)
    }
  }
  const handleCloseConfirm = () => {
    setShowConfirm(false)
    navigateTo('/edit-a-quiz/')
  }

  const handleConfirmEdit = () => {
    console.log('calling handleEditQuiz :', selectedQuizEdit._id)    
    //return <QuestionsForm quizId={selectedQuizEdit._id} />
    //setSelectedQuizEdit(null)    
    //setShowConfirmEdit(true) 
    //navigateTo('/edit-a-quiz/')
  }
  const handleEditQuiz = async (id) => {
    console.log('Edit quiz:', id)
    try {

      // console.log('Quiz deleted:', title)
    } catch (error) {
      console.error(error)
    }
  }


  const handleCloseConfirmEdit = () => {
    setShowConfirmEdit(false)
    navigateTo('/edit-a-quiz/')
  }
  

  return (
    <>
      <h1>Choose a Quiz to edit or delete</h1>
      <ul>
        {quizzes.length === 0
          ? "Loading..."
          : quizzes.map((quiz, index) => (
              <div key={index}>
                <ShowQuiz quiz={quiz} />
                <ul>                  
                  <button onClick={() => setSelectedQuizEdit(quiz)}>Edit</button>
                  <button onClick={() => setSelectedQuiz(quiz)}>Delete</button>
                </ul>
              </div>
            ))}
      </ul>
      {selectedQuizEdit && (
        <div>
          <p>
            Are you sure you want to edit the quiz "{selectedQuizEdit.title}"?
          </p>
          <button onClick={handleConfirmEdit}>Confirm</button>
          <button onClick={() => setSelectedQuizEdit(null)}>Cancel</button>
        </div>
      )}
      {showConfirmEdit && (
        <div>
          <p>Quiz Editted successfully!</p>
          <button onClick={handleCloseConfirmEdit}>Close</button>
        </div>
      )}            
      {selectedQuiz && (
        <div>
          <p>
            Are you sure you want to delete the quiz "{selectedQuiz.title}"?
          </p>
          <button onClick={handleConfirmDelete}>Confirm</button>
          <button onClick={() => setSelectedQuiz(null)}>Cancel</button>
        </div>
      )}
      {showConfirm && (
        <div>
          <p>Quiz deleted successfully!</p>
          <button onClick={handleCloseConfirm}>Close</button>
        </div>
      )}
      
    </>
  )
}

export default EditQuizzes
