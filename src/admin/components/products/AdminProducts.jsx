import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { DEV_URL } from "../../../constants";
import { getProducts } from "../../../redux/products/productActions";
import useAuth from "../../../hooks/useAuth";
import axios from "axios";
import toast from "react-hot-toast";
import ProductCard from "../common/ProductCart";
import AddProductModal from "./AddProductModal";
import Button from "../common/Button";
import useAxios from "../../../hooks/useAxios";
import ProductCardSkeletonWrapper from "../../../skeletons";

function AdminProducts() {
  // Fetch categories from the API
  const { data } = useAxios(`${DEV_URL}/categories`);

  // Get the products from the Redux store
  const storedProducts = useSelector((state) => state.products);

  // Initialize the Redux dispatch function
  const dispatch = useDispatch();

  // Get the access token from the Auth provider
  const { token } = useAuth();

  // State variables for managing product values, modal visibility, and editing status
  const [productValues, setProductValues] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  // Get the categories and products from the response data
  const categories = data?.categories;
  const products = storedProducts?.items;

  // Get the search parameters if they exists
  const category = searchParams.get("category") || "";
  const currentPage = parseInt(searchParams.get("page")) || 1;

  // Load products when the component mounts or when the current page changes
  useEffect(() => {
    dispatch(getProducts(currentPage));
  }, [dispatch, currentPage]);

  // Set category in the URL search params when it changes
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
        (p) => p.categoryName === category
      );
    }

    return filteredProducts;
  }, [products, category]);

  // Function to toggle modal visibility
  const toggleVisibility = () => setShowModal(!showModal);

  // Function to go to the nextPage
  const goToNextPage = () => {
    if (storedProducts.has_next) {
      const newParams = new URLSearchParams(searchParams.toString());
      newParams.set("page", currentPage + 1);
      setSearchParams(newParams);
    }
  };

  // Function to go to the previous page
  const goToPreviousPage = () => {
    if (storedProducts.has_prev) {
      const newParams = new URLSearchParams(searchParams.toString());
      newParams.set("page", currentPage - 1);
      setSearchParams(newParams);
    }
  };

  // Function to delete an item using its id
  const deleteItem = async (id) => {
    try {
      const { data } = await axios.delete(`${DEV_URL}/staff/products/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // show success message
      toast.success(data.msg);

      // Dispatch action to update products in redux store
      dispatch(getProducts(currentPage));
    } catch (error) {
      console.error("Error deleting item: ", error);
      toast.error("Delete failed, try again.");
    }
  };

  // Function to edit an item
  const editItem = (product) => {
    // set values for the item to edit and show the modal
    setProductValues({
      productName: product.productName,
      id: product.productsID,
      price: product.price,
      quantity: product.quantity,
      productDescription: product.productDescription,
      categoryId: "",
      file: undefined,
    });
    setIsEditing(true);
    toggleVisibility();
  };

  return (
    <section className="bg-[#fafafa] min-h-screen rounded-md shadow-lg px-4 pt-28 md:pt-2 md:pb-10">
      {/* Modal to add a product or edit a product */}
      {showModal &&
        (isEditing ? (
          <AddProductModal
            showForm={showModal}
            closeModal={() => {
              toggleVisibility();
              setIsEditing(false);
              setProductValues(null);
            }}
            categories={categories}
            isEditing={isEditing}
            productValues={productValues}
          />
        ) : (
          <AddProductModal
            showForm={showModal}
            closeModal={toggleVisibility}
            categories={categories}
            isEditing={isEditing}
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
            {categories?.map((category) => (
              <option
                key={category.id}
                value={category.name}
                className="text-white"
              >
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
      {storedProducts.isLoading ? (
        <ProductCardSkeletonWrapper />
      ) : (
        <div className="w-11/12 mx-auto grid gap-5 md:grid-cols-2  xl:grid-cols-3">
          {filteredProducts?.map((product) => (
            <ProductCard
              key={product.productsID}
              product={product}
              onDelete={() => deleteItem(product.productsID)}
              onEdit={() => editItem(product)}
            />
          ))}
        </div>
      )}

      {/* Pagination */}
      <div className="w-11/12 my-8  mx-auto py-4 flex flex-col gap-5 md:gap-0 md:flex-row md:justify-between">
        <Button
          action={goToPreviousPage}
          disabled={!storedProducts?.has_prev}
          category="add"
          className="w-36 active:scale-95"
        >
          Previous
        </Button>
        <Button
          action={goToNextPage}
          disabled={!storedProducts?.has_next}
          category="add"
          className="w-36 active:scale-95"
        >
          Next
        </Button>
      </div>
    </section>
  );
}

export default AdminProducts;
