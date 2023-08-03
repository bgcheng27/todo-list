import React from "react";
import { Link } from "react-router-dom";

import Todo from './Todo'

export default function Landing({ user }) {
  return (
    <>
      { user ? 
      <Todo user={user}/>
      : 
      <h1 className="m-4 text-center">Landing</h1> }
    </>
  );
}
