import React, { useEffect, useState, useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"
import ShowQuizEdit from "../../components/ShowQuizEdit"
import { UserContext } from "../../UserContext"

const EditQuizzes = () => {
  const [quizzes, setQuizzes] = useState([])
  const { user, setUser } = useContext(UserContext)
  const [selectedQuiz, setSelectedQuiz] = useState(null)
  const [selectedQuizEdit, setSelectedQuizEdit] = useState(null)
  const nav = useNavigate()

  useEffect(() => {
    async function getQuizzes() {
      try {
        const token = localStorage.getItem('token')
        let res
        if (user.isAdmin) {
          res = await fetch(`http://localhost:4001/quizzes/admin`, {
            headers: { 'Authorization': token }
            })
        } else {
          res = await fetch(`http://localhost:4001/quizzes/user/${user._id}`, {
            headers: { 'Authorization': token }
            })
        }
        if (!res.ok) {
          throw new Error(res.status)
        }
        const data = await res.json()
        console.log(res)
        setQuizzes(data)
      } catch (error) {
        const message = error.message
        throw new Error(message)
      }
    }
    getQuizzes()
  }, [user])

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
