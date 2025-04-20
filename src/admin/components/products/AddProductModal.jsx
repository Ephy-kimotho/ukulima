/* eslint-disable react/prop-types */
import { Formik, Form } from "formik";
import { BASE_URL } from "../../../constants";
import { addProductModalSchema } from "../../../schemas";
import useAxios from "../../../hooks/useAxios";
import Input from "../common/Input";
import Select from "../common/Select";
import Textarea from "../common/Textarea";
//import Image from "../common/Image";
import Button from "../common/Button";

function AddProductModal({ showForm, closeModal, heading, productValues }) {
  const { data: options } = useAxios(`${BASE_URL}/categories`);

  const initialValues = productValues || {
    name: "",
    price: null,
    stock: null,
    category: "",
    description: "",
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
        validationSchema={addProductModalSchema}
        onSubmit={handleSubmit}
      >
        <Form className="bg-white pt-5 pb-10 px-10  rounded-3xl w-11/12 md:w-4/5">
          {/* Header */}
          <h2 className="text-[#1E2025] capitalize mt-3 mb-6 font-bold font-poppins text-2xl md:text-3xl">
            {heading}
          </h2>

          {/* Form fields */}
          <div className="flex flex-col md:flex-row gap-3 mb-3">
            <Input
              type="text"
              label="Product name"
              name="name"
              placeholder="i.e Panga"
            />
            <Input
              type="number"
              label="price"
              name="price"
              placeholder="i.e 200"
            />
          </div>

          <Input
            type="number"
            name="stock"
            label="Stock"
            placeholder="i.e 21"
            className="mb-4"
          />

          <Select name="category" label="Select category" options={options} />

          <Textarea
            name="description"
            label="Product description"
            placeholder="write something about the product..."
          />

          {/*  <Image name="productimage" /> */}

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

export default AddProductModal;
