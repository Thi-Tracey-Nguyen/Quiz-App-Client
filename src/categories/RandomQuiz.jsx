import React from "react";
import { Link } from "react-router-dom";

const RandomQuiz = ({ quizzes }) => {
  // function to get a random quiz from the quizzes array
  function randomQuiz(array) {
    const index = Math.floor(Math.random() * array.length); //generate a random index
    return array[index];
  }

  const quiz = randomQuiz(quizzes);

  return (
    <>
      <div class=" flex-wrap">
        {quiz ? (
          <>
            <p class="d-flex justify-content-center text-dark fw-bold">
              Can't choose?
            </p>
            <button>
              <Link
                to={`/quizzes/${quiz._id}`}
                class="d-flex justify-content-center text-dark fw-bold"
              >
                Random Quiz
              </Link>
            </button>
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default RandomQuiz;
