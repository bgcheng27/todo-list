import React, { useState } from "react";

import '../../../public/form-styles.css'
import FormInput from './FormInput'
import SubmitArea from "./SubmitArea";

export default function FormTemplate() {
  const [isLogin, setLogin] = useState(true);

  const switchForm = (event) => {
    event.preventDefault();
    setLogin((prev) => !prev);
  };

  return (
    <div className="form">
      <h1 className="form-title">{isLogin ? "Log In" : "Register"}</h1>
      <form>
        <FormInput label="Username" inputType="text" name="username"/>
        { !isLogin && <FormInput label="Email" inputType="email" name="email" /> }
        <FormInput label="Password" inputType="password" name="password" />
        { !isLogin && <FormInput label="Confirm Password" inputType="password" name="confirm" /> }
        <SubmitArea isLogin={isLogin} switchForm={switchForm} />
      </form>
    </div>
  );
}
