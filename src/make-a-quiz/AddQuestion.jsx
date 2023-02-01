import React, { useState } from 'react'
import QuestionsForm from './QuestionsForm'

const AddQuestion = ({ addQuestion, postQuestions }) => {
	const [formQuestions, setFormQuestions] = useState([<QuestionsForm key={0}/>])

  let handleAddQuestion = (e) => {
    e.preventDefault()
    setFormQuestions([...formQuestions, <QuestionsForm key={formQuestions.length} />])
  }

	return (
    <>
      <div onSubmit={handleAddQuestion}>
        {formQuestions}
        {/* <button>Add new question</button> */}
      </div>
    </>
  )
}

export default AddQuestion