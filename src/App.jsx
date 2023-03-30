import React, { useState, useEffect, useMemo } from 'react'
import { Routes, Route, useParams, useNavigate } from 'react-router-dom'
import Home from './pages/home/Home'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Categories from './pages/categories/Categories'
import QuizForm from './pages/make-a-quiz/QuizForm'
import AllQuizzes from './pages/all-quizzes/AllQuizzes'
import CategoryQuizzes from './pages/category-quizzes/CategoryQuizzes'
import EditQuizzes from './pages/edit-quizzes/EditQuizzes'
import Result from './pages/result/Result'
import TakeAQuiz from './pages/take-a-quiz/TakeAQuiz'
import QuestionsForm from './pages/make-a-quiz/QuestionsForm'
import EditQuestions from './pages/edit-questions/EditQuestions'
import EditAQuiz from './pages/edit-a-quiz/EditAQuiz'
import CategoryForm from './pages/make-a-quiz/CategoryForm'
import Loading from './pages/loading/Loading'
import Register from './pages/auth/Register'
import LogIn from './pages/auth/Login.jsx'
import UserProfile from './pages/user-profile/UserProfile'
import { getDataTest } from './utils/fetch-API'
import { UserContext } from './UserContext'


const App = () => {
  const [categories, setCategories] = useState([])
  const [quizzes, setQuizzes] = useState([])
  const [questions, setQuestions] = useState(null)
  const [answers, setAnswers] = useState(null) 
  const [user, setUser] = useState(null)

  //set up UserContext
  const value = useMemo(() => ({ user, setUser }), [user, setUser])

  //fetch all quizzes, categories and questions using one-call API
  useEffect(() => {
    async function fetchAPI () {
      const data = await getDataTest('onecall/')
      setQuizzes(data.quizzes)
      setCategories(data.categories)
      setQuestions(data.questions)
    }
    fetchAPI()
  }, [])

  //this function gets points sent from TakeAQuiz component (child to parent)
  function getAnswers(data) {
    setAnswers(data)
  }
  
  // HOC for ShowQuestion to access quizId in the URL and to fetch a quiz
  const TakeAQuizWrapper = () => {
    const { quizId } = useParams()
    const [quiz, setQuiz] = useState(null)

    useEffect(() => {
      async function getQuiz() {
        const res = await fetch(`https://quiz-app-server.up.railway.app/quizzes/${quizId}`)
        const data = await res.json()
        setQuiz(data)
      }
      getQuiz()
    }, [quizId])

    return quiz ? <TakeAQuiz quiz={quiz} onChange={getAnswers} /> : <Loading />
  }

  

  const EditQuestionWrapper = () => {
    const { quizId } = useParams()
    const [quiz, setQuiz] = useState('')
    
    useEffect(() => {
      async function getQuiz() {
        const res = await fetch(`https://quiz-app-server.up.railway.app/quizzes/${quizId}`)
        const data = await res.json()
        setQuiz(data)
      }
      getQuiz()
    }, [quizId])

    return quiz ? <EditQuestions quiz={quiz} questions={questions} setQuestions={setQuestions} /> : <Loading />
  }

  return (
    <>
      <UserContext.Provider value={value}>
      <NavBar />
        <Routes>
          <Route path='/' element={<Home quizzes={quizzes}/>} />
          <Route path='/quizzes' element={<AllQuizzes quizzes={quizzes} questions={questions} setQuizzes={setQuizzes} setQuestions={setQuestions} />} />
          <Route path='/categories' element={<Categories categories={categories}/>} />
          <Route path='/categories/:categoryName' element={<CategoryQuizzes categories={categories} quizzes={quizzes}/>} />
          <Route path='/quizzes/:quizId' element={<TakeAQuizWrapper />} />
          <Route path='/make-a-quiz' element={<QuizForm quizzes={quizzes} categories={categories} setQuizzes={setQuizzes} />} />
          <Route path='/result/:quizId' element={<Result answers={answers} />} />
          <Route path='/edit-a-quiz/:quizId' element={<EditAQuiz categories={categories} />} />
          <Route path='/edit-a-quiz/:quizId/questions' element={<EditQuestionWrapper />} />
          <Route path='/add-a-category' element={<CategoryForm categories={categories} setCategories={setCategories} />} />
          <Route path='/add-questions/:quizId' element={<QuestionsForm questions={questions} quizzes={quizzes} setQuestions={setQuestions} />} />
          <Route path='/edit-a-quiz' element={<EditQuizzes />} />
          <Route path='/user' element={<UserProfile />} />
          <Route path='/auth/login' element={<LogIn />} />
          <Route path='/auth/register' element={<Register />} />
          <Route path='*' element={<h4>Page not found</h4>} />
        </Routes>
        </UserContext.Provider>
      <Footer />
    </>
  )
}

export default App