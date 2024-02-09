//import { useState } from 'react'
import './css/App.css'
import Navbar from './features/components/NavBar'
import PostList from './features/components/PostList'
import { Routes, Route } from 'react-router-dom'
import PostCreated from './features/components/PostCreated'
import PostProvider from './features/context/posts/PostProvider.jsx'
import HomePost from './features/components/HomePost.jsx'
import ThemeProvider from './features/context/theme/ThemeProvider'

function App() {
  


  return (
    <>
    
      <ThemeProvider>
        <main className='blog-body-container'>
          <Navbar>
            <PostList/>
          </Navbar>
          <main className='body-post-show-list'>
            <PostProvider >
              <Routes>
                <Route path='/rules' element={<HomePost/>}/>
                <Route path='/:postId' element={<PostCreated />} />
                {/*Route takes to the element so is not necesary to place the component in my home component*/}
                <Route path='/' element={<PostList />} />
                {/*Will render the component as soon as its path meet the required path*/}
              </Routes>
            </PostProvider>
          </main>
        </main>
      </ThemeProvider>
    </>
  )
}

export default App
