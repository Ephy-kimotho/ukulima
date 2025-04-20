/* eslint-disable react/prop-types */
import { useField } from "formik";

function Image({ ...props }) {
  const [field, meta, helpers] = useField(props);

  const handleChange = (event) => {
    const file = event.currentTarget.files[0];
    helpers.setValue(file);
  };

  return (
    <div className="mb-5">
      <div
        className={`w-full border border-dashed focus-within:border-blue-400 ${
          meta.touched && meta.error ? "border-red-400" : "border-night"
        } rounded py-4 flex flex-col gap-2 mb-1`}
      >
        <label
          htmlFor={props.name}
          className="text-[#1E2021] lg:w-2/12 mx-auto"
        >
          Upload an image
        </label>

        <input
          type="file"
          accept="image/*"
          {...field}
          onChange={handleChange}
          className=" w-4/5 lg:w-4/12 mx-auto"
        />
      </div>
      {meta.touched && meta.error && (
        <p className="text-red-400 text-sm pl-3">{meta.error}</p>
      )}
    </div>
  );
}

export default Image;
