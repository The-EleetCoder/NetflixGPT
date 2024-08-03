import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Header from "./Header";

const Login = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);

  const handleClick = () => {
    setIsLoginForm(!isLoginForm);
  };

  const validationSchema = Yup.object().shape({
    username: !isLoginForm
      ? Yup.string().required("Username is required")
      : null,
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className="bg-custom-background w-full min-h-[100vh] h-full">
      <div className="bg-[#00000049] w-full min-h-[100vh] h-full flex text-[#ffffffc6]">
        {/* header */}
        <Header />

        {/* form */}
        <Formik
          initialValues={{ username: "", email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form className="w-3/12 h-fit min-w-[25rem] p-12 bg-[#111111da] self-center mx-auto flex flex-col rounded-md">
              {/* sign in heading */}
              <div className="text-white font-bold text-3xl mb-[2rem]">
                {isLoginForm ? "Sign In" : "Sign Up"}
              </div>

              {/* input */}
              {!isLoginForm && (
                <div>
                  <Field
                    name="username"
                    type="text"
                    placeholder="Username"
                    className={`p-2 px-4 my-2 w-full bg-[#121212] border-[#4c4c4c] border-[1px] focus:border-[#a0a0a0] focus:outline-none rounded-sm ${
                      errors.username && touched.username
                        ? "border-[#D9232E]"
                        : ""
                    }`}
                  />
                  <ErrorMessage
                    name="username"
                    component="div"
                    className="text-[#D9232E] text-sm mt-[-0.4rem] mb-2 text-right"
                  />
                </div>
              )}
              <div>
                <Field
                  name="email"
                  type="text"
                  placeholder="Email"
                  className={`p-2 px-4 my-2 w-full bg-[#121212] border-[#4c4c4c] border-[1px] focus:border-[#a0a0a0] focus:outline-none rounded-sm ${
                    errors.email && touched.email ? "border-[#D9232E]" : ""
                  }`}
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-[#D9232E] text-sm mt-[-0.4rem] mb-2 text-right"
                />
              </div>
              <div>
                <Field
                  name="password"
                  type="password"
                  placeholder="Password"
                  className={`p-2 px-4 my-2 w-full bg-[#121212] border-[#4c4c4c] border-[1px] focus:border-[#a0a0a0] focus:outline-none rounded-sm ${
                    errors.password && touched.password
                      ? "border-[#D9232E]"
                      : ""
                  }`}
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-[#D9232E] text-sm mt-[-0.4rem] mb-2 text-right"
                />
              </div>

              {/* sign in button */}
              <button
                className=" bg-[#D9232E] p-2 my-2 mt-[2rem] rounded-sm"
                type="submit"
              >
                {isLoginForm ? "Sign In" : "Sign Up"}
              </button>

              {/* Remember me */}
              <div className="flex items-center gap-1 text-sm h-[1rem]">
                <Field
                  type="checkbox"
                  name="rememberMe"
                  className="cursor-pointer"
                />
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
                  This page is protected by Google reCAPTCHA to ensure you're
                  not a bot.{" "}
                  <span className=" text-blue-500 cursor-pointer">
                    Learn more.
                  </span>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
