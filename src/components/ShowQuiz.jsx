import React from "react";
import { Link } from "react-router-dom";

const ShowQuiz = ({ quiz }) => {
  return (
    <div className="card">
      <img src={quiz.image} alt="Alt text for quiz image" />
      <div className="info">
        <p className="title"> {quiz.title} </p>
        <Link to={`/quizzes/${quiz._id}`}>
          <p className="fw-bold">Author: {quiz.author}</p>
          <p className="fw-bold">Number of Questions: 
            {quiz.questions.length === 0 ? (
              " 0"
            ) : ` ${quiz.questions.length}`}
          </p>
        </Link>
        <Link to={`/quizzes/${quiz._id}`} className='play'>PLAY</Link>
      </div>
    </div>
  );
};
export default ShowQuiz;
