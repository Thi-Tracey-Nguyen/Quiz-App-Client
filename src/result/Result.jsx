import React, { useEffect, useState } from 'react'
import '../styles/CommonStyles.css'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

function HighScorePopup(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          You got every answer correct!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>&#127881;</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

const Result = ({ answers, quiz }) => {
  const [showPopup, setShowPopup] = useState(false)

  let points = 0

  function calculatePoints(answers, quiz) {
    for (let i = 0;i < answers.length;i++) {
      if (answers[i] === quiz.questions[i].correctAnswer) {
        points = points + 1
      }
    }
  }

  calculatePoints(answers, quiz)

  useEffect(() => {
    if (points === answers.length) {
      setShowPopup(true)
    }
  }, [])

  console.log(quiz.questions)

  return (
    <>
      <div>
        <HighScorePopup
          show={showPopup}
          value={false}
          onHide={(e) => setShowPopup(e.target.value)}
        />
      </div>
      <div className='main-body flex-wrap' style={{ height: '100vh' }}>

        <h1>Result!</h1>
        <h2>{points} / {quiz.questions.length}</h2>
        <br />
        <img src={quiz.image} height={200} width={200} style={{ padding: 5 }} />
        <h4>Review Answers</h4>
        <div className='d-flex'>
          <div className='container'>
            <p className='fw-bold'>Your answers:</p>
            {
              answers.map((answer, index) =>
                <p key={index}>Question {index + 1}<br />{answer}</p>
              )
            }
          </div>          
          <div className='container'>
            <p className='fw-bold'>Correct answers:</p>
            {
              quiz.questions.map((question, index) =>
                <p key={index}>Question {index + 1}<br />{question.correctAnswer}</p>)
            }
          </div>
        </div>
      </div>
    </>

  )
}

export default Result