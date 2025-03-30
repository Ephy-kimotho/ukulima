/* eslint-disable react/prop-types */
import ProductCard from "./ProductCard";

function ProductListing({ results }) {
  return (
    <div className="w-11/12  mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {results.map((item, idx) => (
        <ProductCard key={idx} {...item} />
      ))}
    </div>
  );
}

export default ProductListing;
