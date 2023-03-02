import React from "react";
import { Link } from "react-router-dom";

const ShowQuizEdit = ({ quiz, setSelectedQuizEdit, setSelectedQuiz }) => {
  return (
    <div className="card">
      <img src={quiz.image} alt="Alt text for quiz image" />
      <div className="info">
        <p className="title"> {quiz.title} </p>
        <Link to={`/quizzes/${quiz._id}`}>
          <p className="fw-bold">Author: {quiz.author}</p>
          <p className="fw-bold">Number of Questions: 
            {quiz.questions.length === 0 ? (
              "0 questions"
            ) : ` ${quiz.questions.length}`}
          </p>
        </Link>
        <button className="edit" onClick={() => setSelectedQuizEdit(quiz)}>
          Edit
        </button>
        <button className="delete" onClick={() => setSelectedQuiz(quiz)}>
          Delete
        </button>
      </div>
    </div>
  );
};
export default ShowQuizEdit;
