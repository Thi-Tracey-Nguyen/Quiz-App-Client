import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import ShowQuiz from "../categories/ShowQuiz"
import QuestionsForm from "../make-a-quiz/QuestionsForm"


const EditQuizzes = ({ quizzes }) => {
  const [selectedQuiz, setSelectedQuiz] = useState(null)  
  const [selectedQuizEdit, setSelectedQuizEdit] = useState(null)  
    
  const nav = useNavigate()

  // function to reload page to remove deleted quiz. May not need it later on. 
  function refreshPage() {
    window.location.reload(false)
  }

  const handleConfirmDelete = () => {
    handleDeleteQuiz(selectedQuiz._id)
    alert('Quiz deleted successfully')
    setSelectedQuiz(null)        
    refreshPage()
  }

  const handleDeleteQuiz = async (id) => {
    try {
      const res = await fetch(
        `https://quiz-app-server-production-09e8.up.railway.app/quizzes/${id}`,
        {
          method: "DELETE",
        }
      )
      getQuizzes()
    } catch (error) {
      console.error(error)
    }
  }

  const handleConfirmEdit = () => {
    console.log('calling handleEditQuiz :', selectedQuizEdit._id)
    nav(`/edit-a-quiz/${selectedQuizEdit._id}`)
  }

  const handleEditQuiz = async (id) => {
    console.log('Edit quiz:', id)
    try {

    } catch (error) {
      console.error(error)
    }
  }



  return (
    <>
    <div class='main-body flex-wrap'>
      <h1>Choose a Quiz to edit or delete</h1>
      <ul class='d-flex justify-content-center flex-wrap '>
        {quizzes.length === 0 ? "Loading..." : quizzes.map((quiz, index) => (
          <div key={index} class="card m-3" style={{width: "15rem"}}>
            <ShowQuiz quiz={quiz} />
            <ul>                  
              <button onClick={() => setSelectedQuizEdit(quiz)}>Edit</button>
              <button onClick={() => setSelectedQuiz(quiz)}>Delete</button>
            </ul>
          </div>  
        ))}
      </ul>
      {selectedQuiz && (
        <div>
          <p>
            Are you sure you want to delete the quiz "{selectedQuiz.title}"?
          </p>
          <button onClick={handleConfirmDelete}>Confirm</button>
          <button onClick={() => setSelectedQuiz(null)}>Cancel</button>
        </div>
      )}
      {selectedQuizEdit && (
        <div>
          <p>
            Are you sure you want to edit the quiz "{selectedQuizEdit.title}"?
          </p>
          <button onClick={handleConfirmEdit}>Confirm</button>
          <button onClick={() => setSelectedQuizEdit(null)}>Cancel</button>
        </div>
      )}
      {/* {showConfirmEdit && (
        <div>
          <p>Quiz Editted successfully!</p>
          <button onClick={handleCloseConfirmEdit}>Close</button>
        </div>
      )}             */}
      {/* {showConfirm && (
        <div>
          <p>Quiz deleted successfully!</p>
          <button onClick={handleCloseConfirm}>Close</button>
        </div>
      )} */}
    </div>
    </>
  )
}

export default EditQuizzes
