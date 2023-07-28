import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [isLogged, setLogged] = useState(true);

  return (
    <>
      <nav className="navbar bg-body-tertiary py-3 mb-4">
        <div className="container-fluid">
          <Link className="navbar-brand ms-3 fs-2" to={ isLogged ? "/todo" : "/" }>Landing</Link>
          <Link className="d-flex me-3 fs-5" to="/login">Login</Link>
        </div>
      </nav>
    </>
  );
}
