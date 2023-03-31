import React, { useEffect, useState } from 'react'

import { Link, useParams } from 'react-router-dom'
import ReturnToTop from '../../components/UI/ReturnToTop'
import './result.css'
import { getData } from '../../utils/fetch-API'
import Loading from '../loading/Loading'
import HighScorePopup from '../../components/PopUpResult'

const Result = ({ answers }) => {
  const [showPopup, setShowPopup] = useState(false)
  const [slideIndex, setSlideIndex] = useState(0)
  const [quiz, setQuiz] = useState(null)
  const { quizId } = useParams()

  let points = 0

  useEffect(() => {
    async function fetchQuiz() {
      const res = await getData(`quizzes/${quizId}`)
      const data = await res.json()
      setQuiz(data)
    }
    fetchQuiz()
  }, [])

  function calculatePoints(answers, quiz) {
    let points = 0
    for (let i = 0;i < answers.length;i++) {
      if (answers[i] === quiz.questions[i].correctAnswer) {
        points = points + 1
      }
    }
    return points
  }

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

  // function renders answers to used in carousel
  function reviewAnswer() {
    return (
      <div className="container-slider">
        {quiz.questions.map((question, index) => 
          <div key={index} className={slideIndex === index ? 'slide active' : 'slide'}>
            <div className="card-result" >
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

  return (
    <>
      {quiz === null ? <Loading /> : 
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
          <h3>{calculatePoints(answers, quiz)} / {quiz.questions.length}</h3>
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
    }
  </>
  )
}

export default Result