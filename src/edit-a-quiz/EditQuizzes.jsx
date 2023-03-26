import React, { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"
import '../styles/CommonStyles.css'
import ShowQuizEdit from "./ShowQuizEdit"

const EditQuizzes = () => {
  const [quizzes, setQuizzes] = useState([])
  const [username, setUsername] = useState(localStorage.getItem('username'))
  const [selectedQuiz, setSelectedQuiz] = useState(null)
  const [selectedQuizEdit, setSelectedQuizEdit] = useState(null)
  const nav = useNavigate()

  if (username === null) {
    nav('/auth/login')
  }

  useEffect(() => {
    async function getQuizzes() {
      const isAdmin = localStorage.getItem('isAdmin') 
      const userId = localStorage.getItem('userId')
      let res
      if (isAdmin === true) {
        res = await fetch(`http://localhost:4001/quizzes/`)
      } else {
        res = await fetch(`http://localhost:4001/quizzes/user/${userId}`)
      }
      setQuizzes(await res.json())
    }
    getQuizzes()
  }, [username])

  const handleConfirmDelete = () => {
    handleDeleteQuiz(selectedQuiz._id)
    alert("Quiz deleted successfully")
    setSelectedQuiz(null)
    refreshPage()
  }

  const handleDeleteQuiz = async (id) => {
    try {
      const res = await fetch(
        `https://quiz-app-server.up.railway.app/quizzes/${id}`,
        {
          method: "DELETE",
        }
      )
    } catch (error) {
      console.error(error)
    }
  }

  function DeleteConfirmation(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Are you sure you want to delete the quiz?
          </Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="primary" onClick={handleConfirmDelete}>
            Confirm
          </Button>
          <Button variant="secondary" onClick={props.onHide}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    )
  }

  const handleConfirmEdit = () => {
    console.log("calling edit quiz :", selectedQuizEdit._id)
    nav(`/edit-a-quiz/${selectedQuizEdit._id}`)
  }

  function EditConfirmation(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Are you sure you want to edit the quiz?
          </Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="primary" onClick={handleConfirmEdit}>
            Confirm
          </Button>
          <Button variant="secondary" onClick={props.onHide}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    )
  }

  const [showPopup, setShowPopup] = useState(false)
  useEffect(() => {
    setShowPopup(true)
  }, [])

  return (
    <div className='home'>
      <h1>Choose a Quiz to edit or delete</h1>
      <div className='card-container'>
        {quizzes.length === 0 ? <h1>Loading...</h1> : quizzes.map((quiz, index) => (
          <div key={index}>
            <ShowQuizEdit 
              quiz={quiz} 
              setSelectedQuizEdit={setSelectedQuizEdit} 
              setSelectedQuiz={setSelectedQuiz}
            />
          </div>
        ))}
      </div>
      {selectedQuiz && (
        <DeleteConfirmation
          show={showPopup}
          value={false}
          onHide={(e) => {
            setSelectedQuiz(null)
          }}
        />
      )}
      {selectedQuizEdit && (
        <EditConfirmation
          show={showPopup}
          value={false}
          onHide={(e) => {
            setSelectedQuizEdit(null)
          }}
        />
      )}
    </div>
  )
}

export default EditQuizzes
