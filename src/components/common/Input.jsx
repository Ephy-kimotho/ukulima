/* eslint-disable react/prop-types */
import { useField } from "formik";

function Input({ type, togglePassword, icon: Icon, ...props }) {
  const [field, meta] = useField(props);
  return (
    <div className="mb-4">
      <div
        className={`bg-moldGreen bg-opacity-20 py-2  pl-2 rounded-lg flex items-center gap-2 border-2 border-moldGreen border-opacity-30 ${
          meta.touched && meta.error && "border-red-400 border-opacity-80"
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
          className="border-none bg-transparent placeholder:text-[#06945D] placeholder:text-opacity-65 outline-none py-1 text-lg"
        />
      </div>
      {meta.touched && meta.error && (
        <p className="text-red-400 ml-4 font-semibold">{meta.error}</p>
      )}
    </div>
  );
}

export default Input;
