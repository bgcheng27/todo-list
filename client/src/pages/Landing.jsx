import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Landing() {
  const [isLogged, setLogged] = useState(false);

  useEffect(() => {
    let user = localStorage.getItem("user-info")
    setLogged(() => {
      return user ? true : false
    })
  })

  return (
    <>
      { isLogged ? <Link className="fs-2 m-4" to="/todo">My List</Link> : <h1 className="m-4">Landing</h1> }
    </>
  );
}
