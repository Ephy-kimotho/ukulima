/* eslint-disable react/prop-types */
import { useField } from "formik";

function Select({ label, options, ...props }) {
  const [field, meta] = useField(props);
  return (
    <div className="md:flex-1 md:w-max">
      <label
        htmlFor={props.name}
        className="capitalize text-night font-semibold md:text-lg"
      >
        {label}:
      </label>
      <div
        className={` w-full  border focus-within:border-blue-400 ${
          meta.error && meta.touched ? "border-red-400" : "border-night"
        } rounded`}
      >
        <select
          {...field}
          {...props}
          className="outline-none text-[#1E2021] rounded bg-white w-full py-2 px-3"
        >
          <option value="" disabled>
            Choose a category
          </option>
          {options?.map((option) => (
            <option key={option.id} value={option.id}>
              {option.name}
            </option>
          ))}
        </select>
      </div>
      {meta.touched && meta.error && (
        <p className="text-red-400 text-sm pl-3">{meta.error}</p>
      )}
    </div>
  );
}

export default Select;
