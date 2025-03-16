import Skeleton from "../components/common/Skeleton";

function ProductCardSkeleton() {
  return (
    <article className="max-w-sm p-4 bg-gray-400 h-[450px] rounded-xl shadow-md text-night animate-beat">
      <Skeleton type="image" />
      <div className="">
        <Skeleton type="title" className="mb-6 mt-3" />
        <Skeleton type="text" className="mb-2" />
        <Skeleton type="text" />
      </div>
    </article>
  );
}

function ProductCardSkeletonWrapper() {
  return (
    <div className="w-11/12 mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      <ProductCardSkeleton />
      <ProductCardSkeleton />
      <ProductCardSkeleton />
      <ProductCardSkeleton />
      <ProductCardSkeleton />
      <ProductCardSkeleton />
    </div>
  );
}

export default ProductCardSkeletonWrapper;
