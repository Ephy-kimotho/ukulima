import { useSearchParams } from "react-router-dom";
import { useMemo, useEffect } from "react";
import { BASE_URL } from "../../constants";
import { ascendingSort, descendingSort } from "../../utils";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../redux/products/productActions";
import useAxios from "../../hooks/useAxios";
import ProductListing from "./ProductListing";
import ProductCardSkeletonWrapper from "../../skeletons/ProductCardSkeleton";

function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { data: categories } = useAxios(`${BASE_URL}/categories`);
  const { isLoading, products } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

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
    if (!products) return [];

    let updatedProducts = products.slice();

    if (category) {
      updatedProducts = updatedProducts.filter(
        (product) => product.category === category
      );
    }

    if (sortMethod === "ascending") {
      updatedProducts = ascendingSort(updatedProducts);
    } else if (sortMethod === "descending") {
      updatedProducts = descendingSort(updatedProducts);
    }

    return updatedProducts;
  }, [products, category, sortMethod]);

  return (
    <section className="bg-amber-50 min-h-screen pt-6 pb-20">
      <div className="text-center">
        <h2 className="font-montserrat text-mint font-bold  text-3xl md:text-5xl">
          Explore our Products
        </h2>
        <p className="font-poppins text-night font-medium text-base md:text-xl">
          Click a product to view details
        </p>
      </div>

      <div className="flex flex-col items-center gap-4 md:gap-0 md:flex-row md:justify-between max-w-[90%] mx-auto my-10">
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
            {categories?.map((category, idx) => (
              <option key={idx} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

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

      {isLoading ? (
        <ProductCardSkeletonWrapper />
      ) : (
        <ProductListing results={filteredProducts || []} />
      )}
    </section>
  );
}

export default Products;
