import React from "react";
import { Link } from "react-router-dom";

const ShowQuiz = ({ quiz }) => {
  return (
    <div className="d-flex justify-content-center flex-wrap">
      <div className="container">
        <img
          src={quiz.image}
          alt="Alt text for quiz image"
          className="img-fixed-size"
          style={{ width: "15rem", height: "15rem" }}
        />
        
        <p
          className="m-3 align-items-center text-dark fw-bold title"
          style={{ width: "15rem" }}
        >
          {quiz.title}
        </p>
        
        <Link
          to={`/quizzes/${quiz._id}`}
          className="content"
        >
          <div className="fw-bold">Author:</div>
          <div>{quiz.author}</div>
          <div className="fw-bold">Number of Questions:</div>
          {quiz.questions.length === 0 ? (
            "0 questions"
          ) : (
            <div>{quiz.questions.length} questions</div>
          )}
        </Link>
      </div>
    </div>
  );
};
export default ShowQuiz;
