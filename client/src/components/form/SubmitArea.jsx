import React from "react";

export default function SubmitArea({ isLogin, switchForm}) {
  return (
    <div className="submit-area">
      <span className="form-change" onClick={switchForm}>
        {isLogin ? "Create a new account" : "Already registered? Login"}
      </span>
      <button type="submit">Submit</button>
    </div>
  );
}
