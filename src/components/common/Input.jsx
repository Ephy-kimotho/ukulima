/* eslint-disable react/prop-types */
import { useField } from "formik";

function Input({ type, togglePassword, moreStyles, icon: Icon, ...props }) {
  const [field, meta] = useField(props);
  return (
    <div className="mb-4">
      <div
        className={`${moreStyles}  py-2  pl-2 rounded-lg flex items-center gap-2  ${
          meta.touched && meta.error && "border-red-500 border-opacity-80"
        }`}
      >
        {Icon && (
          <Icon
            size={20}
            color="#06945d"
            onClick={() => togglePassword()}
            className={props.name === "password" && "cursor-pointer"}
          />
        )}
        <input
          type={type}
          {...field}
          {...props}
          className={`border-none bg-transparent placeholder:text-emerald placeholder:text-opacity-65 outline-none py-1 text-lg`}
        />
      </div>
      {meta.touched && meta.error && (
        <p className="text-red-500 ml-4 font-semibold">{meta.error}</p>
      )}
    </div>
  );
}

export default Input;
