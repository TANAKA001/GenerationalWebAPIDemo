import React, { useState } from "react";
import LoginLayout from "../layouts/Login/Login";
import InputText from "../components/InputText/InputText";

const Login = () => {
  const [email, setEmail] = useState<string | number>("");
  const [password, setPassword] = useState<string | number>("");

  return (
    <LoginLayout>
      <div className='login'>
        <h1>Welcome Back</h1>
        <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>
        <form>
          <InputText type={"email"} label={"Email"} value={email} onValueChange={setEmail} />
          <InputText type={"password"} label={"Password"} value={password} onValueChange={setPassword} />
        </form>
      </div>
    </LoginLayout>
  );
};

export default Login;
