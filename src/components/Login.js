import React from "react";
import Header from "./Header";

const Login = () => {
  return (
    <div className="bg-custom-background w-full min-h-[100vh] h-full flex text-[#ffffffc6]">
      <Header />

      {/* form */}
      <form className="w-3/12 h-fit min-w-[25rem] p-12 bg-[#111111d8] self-center mx-auto flex flex-col rounded-md">
        {/* sign in heading */}
        <div className="text-white font-bold text-3xl mb-[2rem]">Sign In</div>

        {/* input */}
        <input
          type="text"
          placeholder="email address"
          className="p-2 px-4 my-2 w-full bg-[#121212] border-[#3e3e3e] border-[1px] focus:border-[#D9232E] focus:outline-none rounded-sm"
        />
        <input
          type="password"
          placeholder="password"
          className="p-2 px-4 my-2 w-full bg-[#121212] border-[#3e3e3e] border-[1px] focus:border-[#D9232E] focus:outline-none rounded-sm"
        />

        {/* sign in button */}
        <button className=" bg-[#D9232E] p-2 my-2 mt-[2rem] rounded-sm">
          Sign in
        </button>

        {/* Remember me */}
        <div className="flex items-center gap-1 text-sm h-[1rem]">
          <input type="checkbox" className="" />
          <label className="mb-1">Remember me</label>
        </div>

        {/* footer */}
        <div className="mt-10">
          <div className="">
            New to Netflix?{" "}
            <span className="font-semibold text-white">Sign up now.</span>
          </div>
          <div className="text-[13px] mt-4">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <span className=" text-blue-500">Learn more.</span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
