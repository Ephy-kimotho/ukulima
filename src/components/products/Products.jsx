import { useSearchParams } from "react-router-dom";
import { useMemo, useEffect } from "react";
import { DEV_URL } from "../../constants";
import { ascendingSort, descendingSort } from "../../utils";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../redux/products/productActions";
import useAxios from "../../hooks/useAxios";
import Button from "../common/Button";
import ProductListing from "./ProductListing";
import ProductCardSkeletonWrapper from "../../skeletons";

function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { data } = useAxios(`${DEV_URL}/categories`);
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  // Get the current page from the URL search params or default to 1
  const currentPage = parseInt(searchParams.get("page")) || 1;

  // Fetch all products when the component mounts and when current page changes
  useEffect(() => {
    dispatch(getProducts(currentPage));
  }, [dispatch, currentPage]);

  // Get the search parameters if they exists
  const category = searchParams.get("category") || "";
  const sortMethod = searchParams.get("sortMethod") || "";

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

  // Function to handle sort filter change and update the URL
  const handleSortFilterChange = (sortFilter) => {
    const newParams = new URLSearchParams(searchParams.toString());
    if (sortFilter) {
      newParams.set("sortMethod", sortFilter);
    } else {
      newParams.delete("sortMethod");
    }
    setSearchParams(newParams);
  };

  // Filter products based on category and price if applicable
  const filteredProducts = useMemo(() => {
    // if there are no items then return an empty array
    if (!products.items) return [];

    let updatedProducts = products?.items.slice();

    // If there is a category then
    if (category) {
      // filter the products by category
      updatedProducts = updatedProducts.filter(
        (product) => product.categoryName === category
      );
    }

    // if there is a sort method then sort based on the sort method
    if (sortMethod === "ascending") {
      updatedProducts = ascendingSort(updatedProducts);
    } else if (sortMethod === "descending") {
      updatedProducts = descendingSort(updatedProducts);
    }

    return updatedProducts;
  }, [products, category, sortMethod]);

  // Function to go to the nextPage
  const goToNextPage = () => {
    if (products.has_next) {
      const newParams = new URLSearchParams(searchParams.toString());
      newParams.set("page", currentPage + 1);
      setSearchParams(newParams);
    }
  };

  // Function to go to the previous page
  const goToPreviousPage = () => {
    if (products.has_prev) {
      const newParams = new URLSearchParams(searchParams.toString());
      newParams.set("page", currentPage - 1);
      setSearchParams(newParams);
    }
  };

  return (
    <section className="bg-amber-50 min-h-screen pt-6 ">
      <div className="text-center">
        {/* Introduction header and support text */}
        <h2 className="font-montserrat text-mint font-bold text-3xl md:text-5xl">
          Discover a Variety of Products
        </h2>
        <p className="font-poppins text-night mt-3 font-medium text-base max-w-lg mx-auto md:text-xl">
          Browse through our collection and use the filters to refine your
          search for the perfect product.
        </p>
      </div>

      {/* Filtering and sorting section */}
      <div className="flex flex-col items-center gap-4 md:gap-0 md:flex-row md:justify-between max-w-[90%] mx-auto my-10">
        {/* Filtering section */}
        <div className="bg-[#F0F0F0] w-full md:w-max border border-black rounded-lg p-2 flex items-center gap-2">
          <label htmlFor="filter-select" className="text-base text-night/50">
            Filter by:
          </label>
          <select
            name="filter-select"
            value={category}
            onChange={(e) => handleCategoryChange(e.target.value)}
            className="text-night cursor-pointer flex-1 md:flex-none  outline-none"
          >
            <option value="">-- choose category --</option>
            {data?.categories?.map((category, idx) => (
              <option key={idx} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        {/* Sorting section */}
        <div className="bg-lightGrey w-full md:w-max  border border-black rounded-lg p-2 flex items-center gap-2">
          <label htmlFor="filter-select" className="text-base text-night/50">
            Sort by price:
          </label>
          <select
            name="filter-select"
            value={sortMethod}
            onChange={(e) => handleSortFilterChange(e.target.value)}
            className="text-night flex-1 cursor-pointer outline-none"
          >
            <option value="">-- &nbsp; choose &nbsp; --</option>
            <option value="ascending">Ascending</option>
            <option value="descending">Descending</option>
          </select>
        </div>
      </div>

      {/* Product listing section */}
      {products?.isLoading ? (
        <ProductCardSkeletonWrapper />
      ) : (
        <ProductListing
          products={filteredProducts || []}
          params={searchParams.toString()}
        />
      )}
      {/* Pagination buttons section */}
      <div className="w-11/12 mt-8  mx-auto py-4 flex flex-col gap-5 md:gap-0 md:flex-row md:justify-between">
        <Button
          action={goToPreviousPage}
          disabled={!products.has_prev}
          moreStyles="w-full md:w-36 rounded-md active:scale-95 bg-mint hover:bg-emerald hover:font-bold transition-all ease-linear duration-100"
        >
          Previous
        </Button>
        <Button
          action={goToNextPage}
          disabled={!products.has_next}
          moreStyles="w-full md:w-36 rounded-md active:scale-95 bg-mint hover:bg-emerald hover:font-bold transition-all ease-in duration-100"
        >
          Next
        </Button>
      </div>
    </section>
  );
}

export default Products;
