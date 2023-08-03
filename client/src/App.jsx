import React, { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

import Navbar from './partials/Navbar'

import Todo from './pages/Todo'
import Landing from './pages/Landing'
import Login from './pages/Login'
import PrivateRoutes from './util/PrivateRoutes'

export default function App() {
  const [user, setUser] = useState(() => {
    let user = localStorage.getItem("user-info")
    if (user === null) return null

    return JSON.parse(user)
  })

  let navigate = useNavigate();

  const logOut = async () => {
    await fetch("http://localhost:3000/users/logout", {
      method: "POST"
    })
    localStorage.clear();
    setUser(null);
    navigate("/");
  }

  return (
    <>
      <Navbar user={user} onLogOut={logOut} />
      <Routes>
        <Route path="/" element={ <Landing user={user} /> } />
        <Route element={ <PrivateRoutes user={user} redirect="/login" /> }>
          <Route path="/todo" element={ <Todo user={user } />} />
        </Route>
        <Route element={ <PrivateRoutes user={!user} redirect="/" /> }>
          <Route path="/login" element={ <Login setUser={setUser} />} />
        </Route>
      </Routes>
    </>
  )
}