/* eslint-disable react/prop-types */
import { useField } from "formik";

function Input({ type, label, className, placeholder, ...props }) {
  const [field, meta] = useField(props);
  return (
    <div className={`${className}  w-full`}>
      <label
        htmlFor={props.name}
        className="capitalize text-night font-semibold tracking-wide md:text-lg"
      >
        {label}:
      </label>
      <div
        className={`w-full border focus-within:border-blue-400 ${
          meta.error && meta.touched ? "border-red-400" : "border-night"
        } rounded`}
      >
        <input
          type={type}
          placeholder={placeholder}
          {...field}
          {...props}
          className="text-base outline-none border-none w-full py-2 pl-3 placeholder:text-[#1E2021]  rounded placeholder:italic  placeholder:text-opacity-70"
        />
      </div>
      {meta.touched && meta.error && (
        <p className="text-red-400 text-sm pl-3">{meta.error}</p>
      )}
    </div>
  );
}

export default Input;
