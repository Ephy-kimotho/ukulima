/* eslint-disable react/prop-types */
import { useField } from "formik";

function Image({ name }) {
  // Use the useField hook to get the field's meta and helpers
  // This will give us access to the field's value, error, and touched state
  // We can also use the helpers to set the field's value  and to set the field's error state
  const [, meta, helpers] = useField(name);

  // When the input file changes, set the value to the file
  // This will be used to upload the file to the server
  const handleChange = (event) => {
    const file = event.currentTarget.files[0];
    helpers.setValue(file);
  };

  return (
    <div className="my-5">
      <div
        className={`w-full border border-dashed focus-within:border-blue-400 ${
          meta.touched && meta.error ? "border-red-400" : "border-night"
        } rounded py-4 flex flex-col gap-2 mb-1`}
      >
        <label htmlFor={name} className="text-[#1E2021] lg:w-2/12 mx-auto">
          Upload an image
        </label>

        <input
          type="file"
          name={name}
          id={name}
          accept="image/*"
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
