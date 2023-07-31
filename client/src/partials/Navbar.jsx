import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Navbar({ logged, onLogOut }) {
  const user = localStorage.getItem("user-info");
  const userInfo = JSON.parse(user)
  
  return (
    <>
      <nav className="navbar bg-body-tertiary py-3 mb-4">
        <div className="container-fluid">
          <Link className="navbar-brand ms-3 fs-2" to="/">Landing</Link>
          {logged ? 
            <div>
              <label className="text-primary fs-5">Hello, {userInfo.username}!</label>
              <button className="btn btn-md btn-primary mx-3" onClick={onLogOut}>Log Out</button>
            </div>
            :
            <Link className="d-flex me-3 fs-5" to="/login">Log In</Link>
          }
        </div>
      </nav>
    </>
  );
}
