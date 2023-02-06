import React, { useEffect, useState } from "react";
import RandomQuiz from "./RandomQuiz";
import ShowQuiz from "./ShowQuiz";
import ReturnToTop from "../UI/ReturnToTop";
import "../styles/CommonStyles.css";

const Quizzes = ({ quizzes }) => {
  return (
    <>
      <div class="main-body flex-wrap">
      <h1>All Quizzes</h1>
        <ul class="d-flex justify-content-center flex-wrap ">
          {quizzes.length === 0
            ? "Loading..."
            : quizzes.map((quiz, index) => (
                <div key={index} class="card m-3" style={{ width: "15rem" }}>
                  <ShowQuiz quiz={quiz} />
                </div>
              ))}
        </ul>
        <RandomQuiz quizzes={quizzes} />
        <div>
          <ReturnToTop />
        </div>
      </div>
    </>
  );
};

export default Quizzes;
