/* eslint-disable react/prop-types */
import { useField } from "formik";

function Textarea({ label, placeholder, ...props }) {
  const [field, meta] = useField(props);
  return (
    <div className="mb-5">
        <label htmlFor={props.name} className="capitalize text-night font-semibold md:text-lg">
        {label}:
      </label>
      <div
        className={` w-full  border focus-within:border-blue-400 ${
          meta.error && meta.touched ? "border-red-400" : "border-night"
        } rounded mb-1`}
      >
        <textarea
          placeholder={placeholder}
          {...field}
          {...props}
          className="text-base outline-none w-full py-2 px-3 placeholder:text-[#1E2021]  rounded placeholder:text-opacity-70 placeholder:italic  min-h-32"
        />
      </div>
      {meta.touched && meta.error && (
        <p className="text-red-400 text-sm pl-3">{meta.error}</p>
      )}
    </div>
  );
}

export default Textarea;
