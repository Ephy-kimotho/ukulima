/* eslint-disable react/prop-types */
import { Formik, Form } from "formik";
import { addCategoryModalSchema } from "../../../schemas";
import Input from "../common/Input";
import Button from "../common/Button";
//import Image from "../common/Image";

function AddCategoryModal({ showForm, closeModal, heading, categoryValues }) {
  const initialValues = categoryValues || {
    name: "",
    /*  productimage: null, */
  };

  // TODO: write a function to submit form values
  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <div
      className={`${
        showForm ? "flex" : "hidden"
      } absolute inset-0 z-30 bg-night bg-opacity-80 py-16  justify-center items-start `}
    >
      <Formik
        initialValues={initialValues}
        validationSchema={addCategoryModalSchema}
        onSubmit={handleSubmit}
      >
        <Form className="bg-white pt-5 pb-10 px-10  rounded-3xl w-11/12 md:w-4/5">
          {/* Header */}
          <h2 className="text-[#1E2025] capitalize mt-3 mb-6 font-bold font-poppins text-2xl md:text-3xl">
            {heading}
          </h2>
          {/* Form fields */}

          <Input
            type="text"
            name="name"
            label="Category Name"
            placeholder="i.e seeds"
            className="mb-4"
          />
         {/*  <Image /> */}

          {/* Form action buttons */}
          <div className="flex gap-2 flex-col md:flex-row justify-around pt-10">
            <Button
              category="delete"
              className="w-full md:w-48"
              action={closeModal}
            >
              Cancel
            </Button>
            <Button category="add" type="submit" className="w-full md:w-48">
              Save
            </Button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default AddCategoryModal;
