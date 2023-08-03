import React, { useState } from "react";
import { useNavigate } from "react-router-dom"

import FormInput from './FormInput'
import SubmitArea from "./SubmitArea";

export default function FormTemplate({ setUser, isLogin }) {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  let navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;

    setInputs((prevValue) => {
      if (name === "username") {
        return { ...prevValue, username: value }
      } else if (name === "email") {
        return { ...prevValue, email: value }
      } else if (name === "password") {
        return { ...prevValue, password: value }
      } else if (name === "confirmPassword") {
        return { ...prevValue, confirmPassword: value }
      }
    })
  }

  const switchForm = (event) => {
    event.preventDefault();
    // setLogin((prev) => !prev);
    isLogin ? navigate("/register") : navigate("/login");
  };

  async function auth(endpoint, fields) {
    const response = await fetch(`http://localhost:3000/users${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(fields)
    })
    const result = await response.json();
    localStorage.setItem("user-info", JSON.stringify(result))
    setUser(result)
    navigate("/");
  }

  const register = (event) => {
    event.preventDefault();
    const { username, email, password, confirmPassword } = inputs;
    auth("/register", { username, email, password, confirmPassword });
  }

  const login = (event) => {
    event.preventDefault();
    const { username, password } = inputs;
    auth("/login", { username, password });
  }

  return (
    <div className="form">
      <h1 className="form-title">{isLogin ? "Log In" : "Register"}</h1>
      <form onSubmit={isLogin ? login : register}>
        <FormInput onChange={handleChange} label="Username" inputType="text" name="username" value={inputs.username}/>
        { !isLogin && <FormInput onChange={handleChange} label="Email" inputType="email" name="email" value={inputs.email}/> }
        <FormInput onChange={handleChange} label="Password" inputType="password" name="password" value={inputs.password}/>
        { !isLogin && <FormInput onChange={handleChange} label="Confirm Password" inputType="password" name="confirmPassword" value={inputs.confirmPassword}/> }
        <SubmitArea isLogin={isLogin} switchForm={switchForm} />
      </form>
    </div>
  );
}
