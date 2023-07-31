import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Navbar() {
  const user = localStorage.getItem("user-info");
  const userInfo = JSON.parse(user)
  const [isLogged, setLogged] = useState();

  useEffect(() => {
    setLogged(() => {
      return userInfo ? true : false
    })
  })

  let navigate = useNavigate();

  const logOut = () => {
    localStorage.clear();
    setLogged(false);
    navigate("/");
  }

  return (
    <>
      <nav className="navbar bg-body-tertiary py-3 mb-4">
        <div className="container-fluid">
          <Link className="navbar-brand ms-3 fs-2" to="/">Landing</Link>
          {isLogged ? 
            <div>
              <label className="text-primary fs-5">Hello, {userInfo.username}!</label>
              <button className="btn btn-md btn-primary mx-3" onClick={logOut}>Log Out</button>
            </div>
            :
            <Link className="d-flex me-3 fs-5" to="/login">Log In</Link>
          }
        </div>
      </nav>
    </>
  );
}
