import ProductListing from "./ProductListing";
import useAxios from "../../hooks/useAxios";
import { BASE_URL } from "../../constants";

function Products() {
  const { data, isLoading, error } = useAxios(`${BASE_URL}/products`);
  const { data: categories } = useAxios(`${BASE_URL}/categories`);

  if (error) {
    console.error(error);
  }

  return (
    <section className="bg-white min-h-screen pt-6 pb-20">
      <div className="text-center">
        <h2 className="font-montserrat text-mint font-bold  text-3xl md:text-5xl">
          Explore our Products
        </h2>
        <p className="font-poppins text-night font-medium text-base md:text-xl">
          Click a product to view details
        </p>
      </div>

      {isLoading ? (
        <div className="h-screen grid place-items-center">
          <p className="text-3xl text-night font-nunito font-bold">
            Loading products...
          </p>
        </div>
      ) : (
        <div>
          <div className="flex flex-col items-center gap-4 md:gap-0 md:flex-row md:justify-between max-w-[90%] mx-auto my-10">
            <div className="bg-[#F0F0F0] w-full md:w-max border border-black rounded-lg p-2 flex items-center gap-2">
              <label
                htmlFor="filter-select"
                className="text-base text-night/50"
              >
                Filter by:
              </label>
              <select
                name="filter-select"
                id="filter-select"
                className="text-night cursor-pointer flex-1 md:flex-none  outline-none"
              >
                <option value="" selected>
                  -- choose category --
                </option>
                {categories?.map((category, idx) => (
                  <option key={idx} value={category.name}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="bg-lightGrey w-full md:w-max  border border-black rounded-lg p-2 flex items-center gap-2">
              <label
                htmlFor="filter-select"
                className="text-base text-night/50"
              >
                Sort by price:
              </label>
              <select
                name="filter-select"
                id="filter-select"
                className="text-night flex-1 cursor-pointer outline-none"
              >
                <option value="" disabled selected>
                  -- &nbsp; choose &nbsp; --
                </option>
                <option value="ascending">Ascending</option>
                <option value="descending">Descending</option>
              </select>
            </div>
          </div>

          <ProductListing results={data || []} />
        </div>
      )}
    </section>
  );
}

export default Products;
