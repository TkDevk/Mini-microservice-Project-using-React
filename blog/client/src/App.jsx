//import { useState } from 'react'
import './css/App.css'
import PostCreate from './features/components/PostCreate'
import PostList from './features/components/PostList'

function App() {


  return (
    <section className='blog-body-container'>
    <h1 className='create-post-title'>Create Post</h1>
      <PostCreate />
      <section className='body-post-list'>
         <h1 className='post-list-title'>Posts</h1>
         <main className='body-post-show-list'>
        <PostList />
        </main>
      </section>
    </section>
  )
}

export default App
