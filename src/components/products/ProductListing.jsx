/* eslint-disable react/prop-types */
import ProductCard from "./ProductCard";

function ProductListing({ products, params }) {
  if (products.length === 0) {
    return (
      <div className="w-11/12 mx-auto">
        <h3 className="text-center font-poppins text-red-500 font-bold text-3xl">
          No products found
        </h3>
      </div>
    );
  }

  return (
    <div className="w-11/12  mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {products?.map((product, idx) => (
        <ProductCard key={idx} {...product} params={params} />
      ))}
    </div>
  );
}

export default ProductListing;
