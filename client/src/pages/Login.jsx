import React, { useState } from "react";

import FormTemplate from "../components/form/FormTemplate";

export default function Login() {
  const [isLogin, setLogin] = useState(true);

  return (
    <>
      <FormTemplate />
    </>
  );
}
