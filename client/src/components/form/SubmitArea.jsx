import React from "react";

export default function SubmitArea({ isLogin, switchForm}) {
  return (
    <div className="submit-area">
      <span className="form-change" onClick={switchForm}>
        {isLogin ? "Create a new account" : "Already registered? Login"}
      </span>
      <button className="btn btn-primary mx-2" type="submit">Submit</button>
    </div>
  );
}
