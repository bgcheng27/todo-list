import React, { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

import Navbar from './partials/Navbar'

import Todo from './pages/Todo'
import Landing from './pages/Landing'
import Login from './pages/Login'
import PrivateRoutes from './util/PrivateRoutes'

export default function App() {
  const [isLogged, setLogged] = useState(false)

  useEffect(() => {
    let user = localStorage.getItem("user-info");
    let userInfo = JSON.parse(user);
    setLogged(() => {
      return userInfo ? true : false
    })
  })

  let navigate = useNavigate();

  const logOut = async () => {
    await fetch("http://localhost:3000/users/logout", {
      method: "POST"
    })
    localStorage.clear();
    setLogged(false);
    navigate("/");
  }


  return (
    <>
      <Navbar logged={isLogged} onLogOut={logOut} />
      <Routes>
        <Route element={<PrivateRoutes logged={isLogged} />}>
          <Route path="/todo" element={<Todo />} />
        </Route>
        <Route path="/" element={<Landing logged={isLogged} />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  )
}