import { useState } from 'react'

import './App.css'
import { Route, Routes } from 'react-router-dom'
import Chat from './pages/chat/Chat'
import ProfileUpdate from './pages/profileupdate/ProfileUpdate'
import Login from './pages/login/login'

function App() {


  return (
    <>
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/profileupdate' element={<ProfileUpdate/>} />
          <Route path='/chat' element={<Chat />} />
        </Routes>
    </>
  )
}

export default App
