import React from "react";
import { Field, ErrorMessage } from "formik";

const FormikField = ({ name, type, placeholder, errors, touched }) => {
  return (
    <div>
      <Field
        name={name}
        type={type}
        placeholder={placeholder}
        className={`p-2 px-4 my-2 w-full bg-[#121212] border-[#4c4c4c] border-[1px] focus:border-[#a0a0a0] focus:outline-none rounded-sm ${
          errors[name] && touched[name] ? "border-[#D9232E]" : ""
        }`}
      />
      <ErrorMessage
        name={name}
        component="div"
        className="text-[#D9232E] text-sm mt-[-0.4rem] mb-2 text-right"
      />
    </div>
  );
};

export default FormikField;
