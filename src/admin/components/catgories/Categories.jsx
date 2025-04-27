import { useState, useEffect } from "react";
import { CategoryCardSkeletonWrapper } from "../../../skeletons";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../../redux/categories/categoriesActions";
import { DEV_URL } from "../../../constants";
import toast from "react-hot-toast";
import CategoryCard from "./CategoryCard";
import Button from "../common/Button";
import AddCategoryModal from "./AddCategoryModal";
import useAuth from "../../../hooks/useAuth";
import axios from "axios";

function Categories() {
  // Fetch categories from the store
  const storedCategories = useSelector((state) => state.categories);

  // Initialize the dispatch function to dispatch actions to the Redux store
  const dispatch = useDispatch();

  // Get the token from Auth provider
  const { token } = useAuth();

  // Fetch categories when the component mounts
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  // State to manage the visibility of the form and editing state
  const [showForm, setShowForm] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Get all the categories from the response
  const categories = storedCategories?.items?.categories || [];

  // Function to toggle form visibility
  const toggleVisibility = () => setShowForm(!showForm);

  // Function to delete category
  const deleteCategory = async (id) => {
    try {
      const { data } = await axios.delete(`${DEV_URL}/staff/categories/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // show success message incase prodcut is deleted successfully
      toast.success(data.msg);

      // Dispatch action to get newly updated categories
      dispatch(getCategories());
    } catch (error) {
      console.error("Error deleteing category: ", error);
      toast.error("Error deleteing category");
    }
  };

  // Function to edit category
  const editCategory = (category) => {
    setSelectedCategory({
      name: category.name,
      id: category.id,
      file: undefined,
    });
    setIsEditing(true);
    toggleVisibility();
  };

  return (
    <section className="min-h-screen shadow-lg px-4 pt-28 md:p-4 md:pb-10 relative">
      {showForm &&
        (isEditing ? (
          <AddCategoryModal
            showForm={showForm}
            isEditing={isEditing}
            categoryValues={selectedCategory}
            closeModal={() => {
              setSelectedCategory(null);
              setIsEditing(false);
              toggleVisibility();
            }}
          />
        ) : (
          <AddCategoryModal
            showForm={showForm}
            isEditing={isEditing}
            closeModal={toggleVisibility}
          />
        ))}

      {/* Add category button */}
      <div className="bg-white rounded-lg shadow-md min-h-screen pb-10">
        <div className="flex  pt-6 pr-6  flex-col md:flex-row md:justify-end">
          <Button
            category="add"
            action={toggleVisibility}
            className="w-full md:w-64 active:scale-95"
          >
            Add category
          </Button>
        </div>

        {/* Category Listing */}
        {storedCategories?.isLoading ? (
          <CategoryCardSkeletonWrapper />
        ) : (
          <div className="mt-8 w-11/12 mx-auto grid gap-5 justify-items-center md:grid-cols-2  xl:grid-cols-3">
            {categories?.map((cat) => (
              <CategoryCard
                key={cat.id}
                image_url={cat.image_url}
                name={cat.name}
                onEdit={() => editCategory(cat)}
                onDelete={() => deleteCategory(cat.id)}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Categories;
