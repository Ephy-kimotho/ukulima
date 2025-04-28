import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { getCategories } from "../../redux/categories/categoriesActions";
import { CategoryCardSkeletonWrapper } from "../../skeletons";
import CategoryCard from "../common/CategoryCard";

function FeaturedProducts() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  // Get items, and  isLoading from the categories state
  const { items, isLoading } = categories;

  // Get product categories from the items object
  const productCategories = items?.categories || [];

  return (
    <section className="py-10 bg-[#F0F0F0]">
      <div className="text-center  w-full">
        <h3 className="font-quciksand text-mint font-bold text-[32px] md:text-4xl">
          Our Featured products
        </h3>
        <div className="w-[220px] md:w-[280x] mt-1  h-1 mx-auto  rounded bg-mint"></div>
      </div>

      {isLoading ? (
        <CategoryCardSkeletonWrapper />
      ) : (
        <div className="mt-8 w-[90%] mx-auto grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {productCategories?.map((category, idx) => (
            <Link
              key={idx}
              to={`/products?category=${encodeURI(category.name)}`}
            >
              <CategoryCard {...category} />
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}

export default FeaturedProducts;
