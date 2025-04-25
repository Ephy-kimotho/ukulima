/* eslint-disable react/prop-types */
import { useSearchParams } from "react-router-dom";
import { Formik, Form } from "formik";
import { DEV_URL } from "../../../constants";
import { addProductModalSchema } from "../../../schemas";
import { useDispatch } from "react-redux";
import { getProducts } from "../../../redux/products/productActions";
import toast from "react-hot-toast";
import Input from "../common/Input";
import Select from "../common/Select";
import Textarea from "../common/Textarea";
import Image from "../common/Image";
import Button from "../common/Button";
import useAuth from "../../../hooks/useAuth";
import axios from "axios";

function AddProductModal({
  showForm,
  closeModal,
  heading,
  productValues,
  categories,
}) {
  const { token } = useAuth();
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  // Get the current page from url parameters
  const currentPage = parseInt(searchParams.get("page")) || 1;

  // Set initial values for the form
  const initialValues = productValues || {
    productName: "",
    price: "",
    quantity: "",
    categoryId: "",
    productDescription: "",
    file: undefined,
  };

  //Function to submit form values
  const handleSubmit = async (values, actions) => {
    // create a new FormData object
    const formData = new FormData();

    // append the form values to the FormData object
    formData.append("productName", values.productName);
    formData.append("price", values.price);
    formData.append("quantity", values.quantity);
    formData.append("categoryId", values.categoryId);
    formData.append("productDescription", values.productDescription);
    formData.append("file", values.file);

    try {
      await axios.post(`${DEV_URL}/staff/products`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      // show success message incase upload is successful
      toast.success("Product uploaded successfully!");

      // Reset form values
      actions.resetForm();

      // dispatch get products action
      dispatch(getProducts(currentPage));

      closeModal();
    } catch (error) {
      console.error("Error uploading product:", error);

      // show error message incase upload fails
      toast.error("Failed to upload product, please try again.");
    }
  };

  return (
    <div
      className={`${
        showForm ? "flex" : "hidden"
      } absolute  inset-0 z-40 bg-night bg-opacity-80  justify-center items-start md:pt-16`}
    >
      <Formik
        initialValues={initialValues}
        validationSchema={addProductModalSchema}
        onSubmit={handleSubmit}
      >
        <Form className="bg-white pt-5 pb-5 px-5  md:pb-7 md:px-7 rounded-2xl w-11/12 md:w-4/5">
          {/* Header */}
          <h2 className="text-[#1E2025] capitalize  font-bold font-poppins text-2xl md:text-3xl mb-4">
            {heading}
          </h2>

          {/* Product Name and price Form fields */}
          <div className="flex flex-col gap-3 mb-3  md:flex-row ">
            <Input
              type="text"
              label="Product name"
              name="productName"
              placeholder="i.e Panga"
            />
            <Input
              type="number"
              label="Price"
              name="price"
              placeholder="i.e 200"
            />
          </div>

          {/* Product quantity and category Form fields */}
          <div className="flex flex-col gap-3 mb-3   md:flex-row md:items-center">
            <Input
              type="number"
              label="Quantity"
              name="quantity"
              placeholder="i.e 21"
              className="flex-1"
            />

            <Select
              name="categoryId"
              label="Select category"
              options={categories}
            />
          </div>

          <Textarea
            label="Product description"
            name="productDescription"
            placeholder="write something about the product..."
          />

          <Image name="file" />

          {/* Form action buttons */}
          <div className="flex gap-2 pt-4 flex-col md:flex-row justify-around">
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
