import React from "react";
import { Link } from "react-router-dom";

export default function Landing({ user }) {
  return (
    <>
      { user ? <Link className="fs-2 m-4" to="/todo">My List</Link> : <h1 className="m-4">Landing</h1> }
    </>
  );
}
