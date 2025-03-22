/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";

function ProductListing({ results }) {
  return (
    <div className="w-11/12  mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {results.map((item, idx) => (
        <Link key={idx} to={`/products/${item.id}`}>
          <ProductCard {...item} />
        </Link>
      ))}
    </div>
  );
}

export default ProductListing;
