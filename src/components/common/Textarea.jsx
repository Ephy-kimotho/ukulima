/* eslint-disable react/prop-types */
import { useField } from "formik";

function Textarea({ placeholder, ...props }) {
  const [field, meta] = useField(props);
  return (
    <div className="mb-4">
      <div
        className={`bg-white border-2 border-moldGreen border-opacity-50  py-2  pl-2 rounded-lg flex items-center gap-2  ${
          meta.touched && meta.error && "border-red-500 border-opacity-80"
        }`}
      >
        <textarea
          {...field}
          {...props}
          className="border-none bg-transparent placeholder:text-emerald placeholder:text-opacity-65 outline-none py-1 text-lg w-full text-night px-3 min-h-44 "
          placeholder={placeholder}
        />
      </div>
      {meta.touched && meta.error && (
        <p className="text-red-500 ml-4 font-semibold">{meta.error}</p>
      )}
    </div>
  );
}

export default Textarea;
