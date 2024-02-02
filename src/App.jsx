import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [books, setBooks] = useState([])

  useEffect(() => {
    axios.get("https://reactnd-books-api.udacity.com/books", { headers: { 'Authorization': 'whatever-you-want' } })
      .then((res) => {
        console.log(res);
        setBooks(res.data.books)
      }, [])
      .catch((err) => console.log(err))
  }, [])
  return (
    <div>
      {books.map((el, index) => {
        return <div id='playground'>
          <div className='title' key={index}>{el.title}</div>

          <div className='img_desc'>
            <div><img src={`${el.imageLinks.smallThumbnail}`} alt="" className='img'/></div>
            <div className='desc'>{el.description}</div>
          </div>

          <div className='subtitle'>{el.authors.map(el=> <span>{el}</span>)}</div>
          
          <hr></hr>
        </div>
      })}
    </div>
  )
}

export default App