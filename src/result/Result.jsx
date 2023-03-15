import React, { useEffect, useState } from 'react'
import '../styles/CommonStyles.css'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import ReturnToTop from '../UI/ReturnToTop'

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
  const [slideIndex, setSlideIndex] = useState(0)

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

  function handleClickNext() {
    if (slideIndex !== quiz.questions.length - 1) {
      setSlideIndex(slideIndex+1)
    } else if (slideIndex === quiz.questions.length - 1) {
      setSlideIndex(0)
    } 
  }

  function handleClickPrev() {
    if (slideIndex !== 0) {
      setSlideIndex(slideIndex-1)
    } else if (slideIndex === 0) {
      setSlideIndex(slideIndex+1)
    } 
  }

  //function renders answers to used in carousel
  function reviewAnswer() {
    return (
      <div className="container-slider">
        {quiz.questions.map((question, index) => 
          <div className={slideIndex === index ? 'slide active' : 'slide'}>
            <div className="card-result" key={index}>
              <p className='card-header'>
                {question.question}
              </p>
              <ul className="list-group list-group-flush">
                <li className="list-group-item bg-success">{ question.correctAnswer }</li>
                {question.incorrectAnswers.map((incorrectAnswer, index2) => 
                  incorrectAnswer === answers[index] ? <li className="list-group-item bg-danger" key={index2}> {incorrectAnswer} </li> :
                  <li className="list-group-item" key={index2}>{ incorrectAnswer }</li>
                )}
              </ul>
            </div>
          </div>
        )}
      </div>
    )
  }

  console.log(slideIndex)

  return (
    <div> 
      <div>
        <HighScorePopup
          show={showPopup}
          value={false}
          onHide={(e) => setShowPopup(e.target.value)}
        />
      </div>
      <div className='home'>
        <h2>{points === 1 ? 'Your Point:' : 'Your Points:'}</h2>
        <h3>{points} / {quiz.questions.length}</h3>
        <img src={quiz.image} height={200} width={200} style={{ padding: 5 }} />
        <div className='container-result'>
          <button className="btn-slide slider-prev" onClick={handleClickPrev}>&#8656;</button>
          {reviewAnswer()}
          <button className="btn-slide slider-next" onClick={handleClickNext}>&#8658;</button>
        </div >

        <br />
        <div className='random-wrapper'>
          <button className='another-quiz'>
              <Link to={'/quizzes'}>Take another quiz</Link>
          </button>
        </div>
        <br />
      </div>
      <div>
        <ReturnToTop />
      </div>
    </div>

  )
}

export default Result