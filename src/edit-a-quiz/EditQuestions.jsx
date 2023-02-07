import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/CommonStyles.css";

const EditQuestions = ({ quiz }) => {
  const [index, setIndex] = useState(0);
  const nav = useNavigate();

  // const questionObject = quiz.questions[index]
  const [questionObject, setQuestionObject] = useState(quiz.questions[0]);
  const [question, setQuestion] = useState(questionObject.question);
  const [confirm, setConfirm] = useState(false);
  const [correctAnswer, setCorrectAnswer] = useState(
    questionObject.correctAnswer
  );
  const [incAnswersNew, setIncAnswersNew] = useState([]);
  const [incorrectAnswer1, setIncorrectAnswer1] = useState(
    questionObject.incorrectAnswers[0]
  );
  const [incorrectAnswer2, setIncorrectAnswer2] = useState(
    questionObject.incorrectAnswers[1]
  );
  const [incorrectAnswer3, setIncorrectAnswer3] = useState(
    questionObject.incorrectAnswers[2]
  );
  const [newQuestion, setNewQuestion] = useState(false);

  // this function creates a new question object and put it to the server API
  async function updateQuestion() {
    // creates a new question object to send back to server
    const updatedQuestion = {
      question,
      correctAnswer,
      incorrectAnswers: [incorrectAnswer1, incorrectAnswer2, incorrectAnswer3],
    };

    // fetch to API
    const res = await fetch(
      `https://quiz-app-server-production-09e8.up.railway.app/questions/${questionObject._id}`,
      {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedQuestion),
      }
    );

    const data = await res.json();
    console.log(data);

    // need to add logic to handle errors
    alert("Question updated successfully");
  }

  // updates index when user click next
  function handleClickNext(event) {
    event.preventDefault();
    setIndex(index + 1);
    setQuestionObject(quiz.questions[index + 1]);
  }

  // handle update question
  function handleUpdate(event) {
    event.preventDefault();
    updateQuestion();
  }

  // updates index when user click next
  function handleSubmit(event) {
    event.preventDefault();
    // updateQuestion()
    nav("/quizzes");
  }

  // handle click delete
  function handleClickDelete(event) {
    event.preventDefault();
    setConfirm(true);
  }

  // Function to reset the state of the form after submitting a question
  function resetForm() {
    const newQuestion = {
      quizId: quiz._id,
      question: "",
      correctAnswer: "",
      incorrectAnswers: ["", "", ""],
    };
    setQuestionObject(newQuestion);
  }

  // Function to post a new question to the DB
  const addQuestion = async (
    quizId,
    question,
    correctAnswer,
    incorrectAnswers
  ) => {
    // Add a new question
    const newQuestion = {
      quizId: quizId,
      question: question,
      correctAnswer: correctAnswer,
      incorrectAnswers: incorrectAnswers,
    };
    // Post new question to API
    await fetch(
      "https://quiz-app-server-production-09e8.up.railway.app/questions",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newQuestion),
      }
    );
    // console.log(createdQuestion)
    // const data = await createdQuestion.json()
    // const updatedQuestions = questions.push(data)
    // setQuestions(updatedQuestions)
    // console.log(updatedQuestions)
  };

  // handle add a new question
  function handleAddQuestion(event) {
    event.preventDefault();
    resetForm();
    setIndex(index + 1);
    setNewQuestion(true);
  }

  // handles confirming deletion of a question
  const handleConfirmDelete = async (event) => {
    event.preventDefault();
    try {
      await fetch(
        `https://quiz-app-server-production-09e8.up.railway.app/questions/${questionObject._id}`,
        {
          method: "DELETE",
        }
      );
      setIndex(index + 1);
      setConfirm(false);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(questionObject);

  // handles click on delete a question
  const confirmForm = () => {
    return (
      <>
        <p> Do you want to delete this question? </p>
        <button onClick={handleConfirmDelete}> Confirm </button>
        <button> Cancel </button>
        <br />
      </>
    );
  };

  // add new question after typing all the info
  const handleConfirmAdd = async (event) => {
    event.preventDefault();

    const newQuestion = {
      quizId: quiz._id,
      question: question,
      correctAnswer: correctAnswer,
      incorrectAnswers: [incorrectAnswer1, incorrectAnswer2, incorrectAnswer3],
    };
    // Post new question to API
    await fetch(
      "https://quiz-app-server-production-09e8.up.railway.app/questions",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newQuestion),
      }
    );
    setNewQuestion(false);
  };

  //render for last question
  const render = () => {
    return (
      <>
        <br/>
        <button onClick={handleAddQuestion} > Add a new question </button>
        <br/>
        <button onClick={handleSubmit}> Submit </button>
      </>
    );
  };
  console.log(questionObject._id);

  return (
    <>
      <div className="main-body flex-wrap" style={{ height: "100vh" }}>
        <h2>Edit {quiz.title}</h2>
        <form
          className="container d-flex flex-column flex-wrap"
          key={index}
          style={{ width: "400px" }}
        >
          <div className="question-form d-flex flex-column">
            <label> Question </label>
            <input
              type="text"
              defaultValue={questionObject.question}
              // value={questionObject.question}
              onChange={(e) => setQuestion(e.target.value)}
            />
          </div>
          <div className="correct-answer-form d-flex flex-column">
            <label>Correct answer:</label>
            <input
              type="text"
              defaultValue={questionObject.correctAnswer}
              // value={questionObject.correctAnswer}
              onChange={(e) => setCorrectAnswer(e.target.value)}
            />
          </div>
          <div className="incorrect-answers-form d-flex flex-column">
            <label>Incorrect answers:</label>
            <input
              type="text"
              defaultValue={questionObject.incorrectAnswers[0]}
              // value={questionObject.incorrectAnswers[0]}
              onChange={(e) => setIncorrectAnswer1(e.target.value)}
            />
          </div>
          <input
            type="text"
            defaultValue={questionObject.incorrectAnswers[1]}
            // value={questionObject.incorrectAnswers[1]}
            onChange={(e) => setIncorrectAnswer2(e.target.value)}
          />
          <input
            type="text"
            defaultValue={questionObject.incorrectAnswers[2]}
            // value={questionObject.incorrectAnswers[2]}
            onChange={(e) => setIncorrectAnswer3(e.target.value)}
          />

          {confirm && confirmForm()}
          {newQuestion ? (
            <button onClick={handleConfirmAdd}> Add question </button>
          ) : (
            <>
            <br/>
              <div className="d-flex justify-content-between">                
                <button
                  onClick={handleUpdate}
                  
                >
                  Save changes
                </button>
                {/* <button onClick={ handleAddQuestion }> Add a new question </button> */}
                <button onClick={handleClickDelete}>
                  Delete this question
                </button>
              </div>
              {index < quiz.questions.length - 1 ? (
                <button onClick={handleClickNext}> Next </button>
              ) : (
                render()
              )}
            </>
          )}
        </form>
      </div>
    </>
  );
};

export default EditQuestions;
