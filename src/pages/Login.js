import React from "react";
import Header from "../components/Header";
import LoginForm from "../components/login/LoginForm";

const Login = () => {
  return (
    <div className="bg-custom-background w-full min-h-[100vh] h-full">
      <div className="bg-[#00000049] w-full min-h-[100vh] h-full flex text-[#ffffffc6]">
        <Header />
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
