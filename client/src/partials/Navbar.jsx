import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
      <nav>
        <div className="container">
          <div className="row">
            <div className="col">
              <Link to="/">Landing</Link>
            </div>
            <div className="col">
              <Link to="/todo">Todo</Link>
            </div>
            <div className="col">
              <Link to="/login">Login</Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
