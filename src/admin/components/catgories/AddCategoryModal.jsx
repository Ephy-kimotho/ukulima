/* eslint-disable react/prop-types */
import { Formik, Form } from "formik";
import { DEV_URL } from "../../../constants";
import { addCategoryModalSchema } from "../../../schemas";
import { useDispatch } from "react-redux";
import { getCategories } from "../../../redux/categories/categoriesActions";
import toast from "react-hot-toast";
import Input from "../common/Input";
import Button from "../common/Button";
import Image from "../common/Image";
import useAuth from "../../../hooks/useAuth";
import axios from "axios";

function AddCategoryModal({ showForm, closeModal, isEditing, categoryValues }) {
  // Get the token from the  auth provider
  const { token } = useAuth();

  // Initialize the dispatch function to dispatch actions to the Redux store
  const dispatch = useDispatch();

  // define initial values for the form data
  const initialValues = categoryValues || {
    name: "",
    file: undefined,
  };

  // Function to add new category
  const addNewCategory = async (values, actions) => {
    // create a new Form data object
    const formData = new FormData();

    // append the form values to the form data
    formData.append("name", values.name);
    formData.append("file", values.file);

    // try to upload the category
    try {
      await axios.post(`${DEV_URL}/staff/categories`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      // Reset the form
      actions.resetForm();

      // dispatch the action to get the updated categories
      dispatch(getCategories());

      // show success message and close the modal
      toast.success("Category added successfully");
      closeModal();
    } catch (error) {
      // show error message
      toast.error("Failed to add category");
      console.error("Error adding category:", error);
    }
  };

  // Function to update existing category
  const updateCategory = async (values, actions) => {
    try {
      const { data } = await axios.put(
        `${DEV_URL}/staff/categories/${values.id}`,
        {
          name: values.name,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Reset the form
      actions.resetForm();

      console.log("Category updated sucessfully: ", data);

      // show success message incase update is successful
      toast.success(data.msg);

      // Get the newly updated categories and display them
      dispatch(getCategories());

      // close the modla
      closeModal();
    } catch (error) {
      console.error("Failed to update category: ", error);
      toast.error("Failed to update category.");
    }
  };

  // This function will call appropriate method based on editing status
  const handleSubmit = async (values, actions) => {
    if (isEditing) {
      await updateCategory(values, actions);
    } else {
      await addNewCategory(values, actions);
    }
  };

  return (
    <div
      className={`${
        showForm ? "flex" : "hidden"
      } absolute inset-0 z-30 bg-night bg-opacity-80 py-16  justify-center items-start `}
    >
      <Formik
        initialValues={initialValues}
        validationSchema={addCategoryModalSchema(isEditing)}
        onSubmit={handleSubmit}
      >
        <Form className="bg-white pt-5 pb-10 px-10  rounded-3xl w-11/12 md:w-4/5">
          {/* Header */}
          <h2 className="text-[#1E2025] capitalize mt-3 mb-6 font-bold font-poppins text-2xl md:text-3xl">
            {isEditing ? "Edit category" : "Add new category"}
          </h2>
          {/* Form fields */}

          <Input
            type="text"
            name="name"
            label="Category Name"
            placeholder="i.e seeds"
            className="mb-4"
          />
          {!isEditing && <Image name="file" />}

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
