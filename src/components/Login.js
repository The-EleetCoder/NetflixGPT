import React, { useRef, useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);

  const username = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username?.current?.value);
    console.log(email?.current?.value);
    console.log(password?.current?.value);
  };

  const handleClick = () => {
    setIsLoginForm(!isLoginForm);
  };

  return (
    <div className="bg-custom-background w-full min-h-[100vh] h-full">
      <div className="bg-[#00000049] w-full min-h-[100vh] h-full flex text-[#ffffffc6]">
        {/* header */}
        <Header />

        {/* form */}
        <form
          onSubmit={handleSubmit}
          className="w-3/12 h-fit min-w-[25rem] p-12 bg-[#111111da] self-center mx-auto flex flex-col rounded-md"
        >
          {/* sign in heading */}
          <div className="text-white font-bold text-3xl mb-[2rem]">
            {isLoginForm ? "Sign In" : "Sign Up"}
          </div>

          {/* input */}
          {!isLoginForm && (
            <input
              ref={username}
              type="text"
              placeholder="Username"
              className="p-2 px-4 my-2 w-full bg-[#121212] border-[#4c4c4c] border-[1px] focus:border-[#D9232E] focus:outline-none rounded-sm"
            />
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email"
            className="p-2 px-4 my-2 w-full bg-[#121212] border-[#4c4c4c] border-[1px] focus:border-[#D9232E] focus:outline-none rounded-sm"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-2 px-4 my-2 w-full bg-[#121212] border-[#4c4c4c] border-[1px] focus:border-[#D9232E] focus:outline-none rounded-sm"
          />

          {/* sign in button */}
          <button className=" bg-[#D9232E] p-2 my-2 mt-[2rem] rounded-sm">
            {isLoginForm ? "Sign In" : "Sign Up"}
          </button>

          {/* Remember me */}
          <div className="flex items-center gap-1 text-sm h-[1rem]">
            <input type="checkbox" className="cursor-pointer" />
            <label className="mb-1">Remember me</label>
          </div>

          {/* footer */}
          <div className="mt-10">
            <div className="">
              {isLoginForm ? "New to Netflix?" : "Already a user?"}
              <span
                onClick={handleClick}
                className="font-semibold text-white cursor-pointer"
              >
                {isLoginForm ? " Sign Up now." : " Sign in now."}
              </span>
            </div>
            <div className="text-[13px] mt-4">
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot.{" "}
              <span className=" text-blue-500 cursor-pointer">Learn more.</span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
