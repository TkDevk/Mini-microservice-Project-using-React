//import { useState } from 'react'
import './css/App.css'
import Navbar from './features/components/NavBar'
import PostList from './features/components/PostList'

function App() {


  return (
    <section className='blog-body-container'>
    
      <Navbar/>
      <section className='body-post-list'>
         <main className='body-post-show-list'>
        <PostList />
        </main>
      </section>
    </section>
  )
}

export default App
