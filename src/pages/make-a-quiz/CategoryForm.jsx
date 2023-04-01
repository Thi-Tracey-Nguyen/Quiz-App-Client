import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { postData, postDataWithObj } from '../../utils/fetch-API'
import './make-quiz.css'

const AddCategory = ({ categories, setCategories }) => {
  const [name, setName] = useState('')

  const nav = useNavigate()

  async function getParams(e) {
    e.preventDefault()
    submitCategory(name)
  }

  // Function to post a category to the DB
  const submitCategory = async (name) => {
    // Add a new category
    const newCategory = {
      name: name
    }
    // Post new category to the API
    const res = await postDataWithObj(newCategory, 'categories/', 'POST')
    console.log(res)
    const data = await res.json()
    if (!res.ok) {
      throw new Error(res.message)
    }
    if (res.status === 409) {
      alert('Category already exists. Please choose another name.')
    } else if (res.status === 201) {
      // Update categories state
      setCategories([...categories, data])
      nav('/make-a-quiz')
    }
    
  }

  return (
    <div className='home-make-quiz'>
      <h2>Add a new Category</h2>
      <form onSubmit={getParams} className='cat-form'>
        <div className='cat-name-form  d-flex flex-column'>
          <label>Category name:</label>
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='buttons'>
          <button className='random'>
            <Link to='/make-a-quiz' className='fw-normal'>Quit</Link>
          </button>
          <button className='random'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default AddCategory
