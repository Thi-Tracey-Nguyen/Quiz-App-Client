import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react"
import userEvent from '@testing-library/user-event'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { expect } from 'vitest'
import App from "./App"
import RandomCat from './categories/RandomCat'
import RandomQuiz from './categories/RandomQuiz'

describe("App Component", () => {
    let container
  
    beforeEach(function () {   
    container =  render(
      <BrowserRouter>
        <App />
      </BrowserRouter>    
    ).container
    })
    
    it("Shows the Quiz Entries heading", () => {
    expect(container.querySelector("h1")).toBeDefined()
    expect(container.querySelector("h1")).toHaveTextContent('The Quiz App')
    expect(container.querySelector("h2")).toBeDefined()
    expect(container.querySelector("h2")).toHaveTextContent('Test your knowledge and have fun!')
    expect(container.querySelector("h4")).toBeDefined()
    expect(container.querySelector("h4")).toHaveTextContent('Featured Quizzes')

  })
  // All Quizzes
  it("Shows All quizzes", async () => {
     await userEvent.click(screen.getByText('All Quizzes'))
     expect(container.querySelector("h1")).toBeDefined()
     expect(container.querySelector("h1")).toHaveTextContent('All Quizzes')   
 
   })
   // Categories
   it("Shows Categories", async () => {
     await userEvent.click(screen.getByText('Categories'))
     expect(container.querySelector("h2")).toBeDefined()
     expect(container.querySelector("h2")).toHaveTextContent('Categories')
 
   })   
   // Make a quiz
   it("Shows Make a quiz", async () => {
     await userEvent.click(screen.getByText('Make a quiz'))
     expect(container.querySelector("div")).toBeDefined()
     expect(container.querySelector("div")).toHaveClass
     expect(container.querySelector("label")).toBeDefined()
     expect(container.querySelector("label")).toHaveTextContent('Quiz title')       
 
 
   })     
   // Edit a quiz
   it("Shows Make a quiz", async () => {
     await userEvent.click(screen.getByText('Edit a quiz'))     
     expect(container.querySelector("h1")).toBeDefined()
     expect(container.querySelector("h1")).toHaveTextContent('Choose a Quiz to edit or delete')

   })  
   
   // Random Category Quiz
   it("Shows Random Categories", () => {
    const { container } = render(
       <BrowserRouter>
            <RandomCat />  
       </BrowserRouter>    
     )
     expect(container.querySelector("p")).toBeDefined()
   })    

   // Random Quiz
   it("Shows Random Quiz", () => {
    const { container } = render(
       <BrowserRouter>
            <RandomQuiz />  
       </BrowserRouter>    
     )
     expect(container.querySelector("p")).toBeDefined()     
   })       
})