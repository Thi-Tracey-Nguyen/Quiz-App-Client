import React, { useState } from 'react'
import QuestionsForm from './QuestionsForm'

const AddQuestion = ({ addQuestion, postQuestions, questionArray }) => {
	const [formQuestions, setFormQuestions] = useState([<QuestionsForm addQuestion={addQuestion} postQuestions={postQuestions} questionArray={questionArray} key={0}/>])

  let handleAddQuestion = (e) => {
    e.preventDefault()
    setFormQuestions([...formQuestions, <QuestionsForm addQuestion={addQuestion} postQuestions={postQuestions} questionArray={questionArray} key={formQuestions.length} />])
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