import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

import Navbar from './partials/Navbar'

import Todo from './pages/Todo'
import Landing from './pages/Landing'
import Login from './pages/Login'

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />}/>
        <Route path="/todo" element={<Todo />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<h1>Logged Out</h1>} />
      </Routes>
    </>
  )
}