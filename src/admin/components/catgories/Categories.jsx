import { useState } from "react";
import useAxios from "../../../hooks/useAxios";
import CategoryCard from "./CategoryCard";
import Button from "../common/Button";
import AddCategoryModal from "./AddCategoryModal";
import { BASE_URL } from "../../../constants";
import { CategoryCardSkeletonWrapper } from "../../../skeletons";

function Categories() {
  const { data: categories, isLoading } = useAxios(`${BASE_URL}/categories`);

  const [showForm, setShowForm] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Function to toggle form visibility
  const toggleVisibility = () => setShowForm(!showForm);

  // Function to delete category
  const deleteCategory = (id) => {
    console.log(`Deleted item with id ${id}`);
  };

  // Function to edit category
  const editCategory = (category) => {
    console.log(`Editing item with id ${category.id}`);
    setSelectedCategory(category);
    setIsEditing(true);
    toggleVisibility();
  };

  return (
    <section className="min-h-screen  shadow-lg px-4 pt-28 md:p-4 md:pb-10 relative">
      {showForm &&
        (isEditing ? (
          <AddCategoryModal
            showForm={showForm}
            heading="Edit category"
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
            heading="Add new category"
            closeModal={toggleVisibility}
          />
        ))}

      <div className="bg-white rounded-lg shadow-md min-h-screen ">
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
        {isLoading ? (
          <CategoryCardSkeletonWrapper />
        ) : (
          <div className="mt-8 w-11/12 mx-auto grid justify-items-center md:grid-cols-2  xl:grid-cols-3">
            {categories?.map((category) => (
              <CategoryCard
                key={category.id}
                image={category.image}
                name={category.name}
                onEdit={() => editCategory(category)}
                onDelete={() => deleteCategory(category.id)}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Categories;
