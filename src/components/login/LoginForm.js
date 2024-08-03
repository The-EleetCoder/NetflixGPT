import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import FormikField from "./FormikField";

const LoginForm = () => {
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
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Form className="w-3/12 h-fit min-w-[25rem] p-12 bg-[#111111da] self-center mx-auto flex flex-col rounded-md">
          {/* heading */}
          <div className="text-white font-bold text-3xl mb-[2rem]">
            {isLoginForm ? "Sign In" : "Sign Up"}
          </div>

          {/* input fields */}
          {/* username */}
          {!isLoginForm && (
            <FormikField
              name="username"
              type="text"
              placeholder="Username"
              errors={errors}
              touched={touched}
            />
          )}
          {/* email */}
          <FormikField
            name="email"
            type="text"
            placeholder="Email"
            errors={errors}
            touched={touched}
          />
          {/* password */}
          <FormikField
            name="password"
            type="password"
            placeholder="Password"
            errors={errors}
            touched={touched}
          />

          {/* submit button */}
          <button
            className=" bg-[#D9232E] p-2 my-2 mt-[2rem] rounded-sm"
            type="submit"
          >
            {isLoginForm ? "Sign In" : "Sign Up"}
          </button>

          {/* remember Me */}
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
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot.{" "}
              <span className=" text-blue-500 cursor-pointer">Learn more.</span>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
