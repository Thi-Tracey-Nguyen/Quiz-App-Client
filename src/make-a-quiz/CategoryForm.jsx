import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const AddCategory = ({ categories, setCategories }) => {
  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  
  const nav = useNavigate()

  async function getParams(e) {
    e.preventDefault()
    submitCategory(name, image)
  }

  // Function to post a category to the DB
  const submitCategory = async (name, image) => {
    // Add a new category
    const newCategory = {
      name: name,
      image: image
    }
    // Post new category to the API
    const createdCategory = await fetch('https://quiz-app-server-production-09e8.up.railway.app/categories', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newCategory)
    })
    const data = await createdCategory.json()
    // Update categories state
    setCategories([...categories, data])
    nav('/make-a-quiz')
  }

  return (
    <>
      <h2>Add a new Category</h2>

        <form onSubmit={getParams} className='container'>
          <div className='cat-name-form'>
            <label>Category name:
              <input 
                type='text' 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
              />
            </label>
          </div>
          <div className='cat-image-form'>
            <label>Image:
              <input  
                type='text'
                value={image} 
                onChange={(e) => setImage(e.target.value)}
              /> 
            </label>
          </div>
          <button>
            Submit
          </button>
        </form>
      <button>
        <Link to='/make-a-quiz'>Quit</Link>
      </button>
    </>
  )
}

export default AddCategory