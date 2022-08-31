import React from "react";
import "./Login.style.scss";

type Props = {
  children?: React.ReactNode;
};

const LoginLayout = ({ children }: Props) => {
  return (
    <div className='login-layout'>
      <div className={"login-col left"}></div>
      <div className={"login-col"}>{children}</div>
    </div>
  );
};

export default LoginLayout;
