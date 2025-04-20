import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { BASE_URL } from "../../../constants";
import ProductCard from "../common/ProductCart";
import AddProductModal from "./AddProductModal";
import Button from "../common/Button";
import useAxios from "../../../hooks/useAxios";
import ProductCardSkeletonWrapper from "../../../skeletons";


function AdminProducts() {
  const { data: categories } = useAxios(`${BASE_URL}/categories`);
  const { data: products, isLoading } = useAxios(`${BASE_URL}/products`);

  const [productValues, setProductValues] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  // Get the search parameters if they exists
  const category = searchParams.get("category") || "";

  // Function to handle category change and update URL
  const handleCategoryChange = (category) => {
    const newParams = new URLSearchParams(searchParams.toString());
    if (category) {
      newParams.set("category", category);
    } else {
      newParams.delete("category");
    }
    setSearchParams(newParams);
  };

  // Filter the products by category
  const filteredProducts = useMemo(() => {
    let filteredProducts = products;

    if (category) {
      filteredProducts = filteredProducts?.filter(
        (p) => p.category === category
      );
    }

    return filteredProducts;
  }, [products, category]);

  // Function to toggle modal visibility
  const toggleVisibility = () => setShowModal(!showModal);

  // Function to delete an item using its id
  const deleteItem = (id) => {
    console.log(`Deleted item with id ${id}.`);
  };

  // Function to edit an item
  const editItem = (product) => {
    // show modal with editing status
    setProductValues(product);
    setIsEditing(true);
    toggleVisibility();
  };

  return (
    <section className="bg-[#fafafa] min-h-screen rounded-md shadow-lg px-4 pt-28 md:pt-2 md:pb-10 relative">
      {/* Add Product Modal */}
      {showModal &&
        (isEditing ? (
          <AddProductModal
            showForm={showModal}
            closeModal={() => {
              toggleVisibility();
              setIsEditing(false);
              setProductValues(null);
            }}
            heading="Edit product"
            productValues={productValues}
          />
        ) : (
          <AddProductModal
            showForm={showModal}
            closeModal={toggleVisibility}
            heading="Add new product"
          />
        ))}

      {/* Select and Add Product button */}
      <div className="flex flex-col items-center gap-4 md:gap-0 md:flex-row md:justify-between max-w-[90%] mx-auto text-white my-10">
        <div className="bg-blue-500 w-full md:w-max  rounded-lg p-2 flex items-center gap-2">
          <label
            htmlFor="filter-select"
            className="text-base text-white font-bold"
          >
            Filter by:
          </label>
          <select
            name="filter-select"
            value={category}
            onChange={(e) => handleCategoryChange(e.target.value)}
            className="bg-blue-500  cursor-pointer flex-1 md:flex-none  outline-none"
          >
            <option value="" className="text-white">
              -- choose category --
            </option>
            {categories?.map((category, idx) => (
              <option key={idx} value={category.name} className="text-white">
                {category.name}
              </option>
            ))}
          </select>
        </div>

        <Button
          action={toggleVisibility}
          category="add"
          className="px-12 bg-blue-600 w-full md:w-max active:scale-95"
        >
          Add product
        </Button>
      </div>

      {/* Product Listing */}
      {isLoading ? (
        <ProductCardSkeletonWrapper />
      ) : (
        <div className="w-11/12 mx-auto grid gap-5 md:grid-cols-2  xl:grid-cols-3">
          {filteredProducts?.map((product) => (
            <ProductCard
              key={product.id}
              onDelete={() => deleteItem(product.id)}
              onEdit={() => editItem(product)}
              product={product}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default AdminProducts;
