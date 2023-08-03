import React from "react";

import FormTemplate from "../components/form/FormTemplate";

export default function Register({ setUser }) {
  return (
    <>
      <FormTemplate setUser={setUser} isLogin={false}/>
    </>
  );
}
