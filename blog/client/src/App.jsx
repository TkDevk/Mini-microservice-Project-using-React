//import { useState } from 'react'
import './css/App.css'
import PostCreate from './features/PostCreate'

function App() {


  return (
    <section className='create-post-container'>
    <h1 className='create-post-title'>Create Post</h1>
      <PostCreate />
    </section>
  )
}

export default App
