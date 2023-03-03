import React from "react";
import { Link } from "react-router-dom";

const RandomQuiz = ({ quizzes }) => {
  // function to get a random quiz from the quizzes array
  function randomQuiz(array) {
     if(array !== undefined) {
    const index = Math.floor(Math.random() * array.length); //generate a random index
    return array[index];
     }
  }

  const quiz = randomQuiz(quizzes);

  return (
    <>
      <div className='random-wrapper'>
        {quiz ? (
          <>
            <p>Can't choose?</p>
            <button className='random'>
              <Link
                to={`/quizzes/${quiz._id}`}
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
