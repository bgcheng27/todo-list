import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Navbar({ user, onLogOut }) {
  return (
    <>
      <nav className="navbar bg-body-tertiary py-3 mb-4">
        <div className="container-fluid">
          <Link className="navbar-brand ms-3 fs-2" to="/">Landing</Link>
          {user ? 
            <div>
              <label className="text-primary fs-5">Hello, {user.username}!</label>
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
