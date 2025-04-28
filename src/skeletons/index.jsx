import Skeleton from "../components/common/Skeleton";

function ProductCardSkeleton() {
  return (
    <article className="max-w-sm p-4 bg-gray-400 h-[410px] rounded-xl shadow-md text-night animate-beat">
      <Skeleton type="image" className="h-56" />
      <div className="">
        <Skeleton type="title" className="mb-6 mt-3" />
        <Skeleton type="text" className="mb-2" />
        <Skeleton type="text" />
      </div>
    </article>
  );
}

function CategoryCardSkeleton() {
  return (
    <article className="max-w-sm p-4 bg-gray-400 h-[250px] rounded-xl shadow-md text-night animate-beat">
      <Skeleton type="image" className="w-32 h-32 mx-auto rounded-full" />

      <Skeleton type="text" className="h-5 my-4" />

      <div className="grid gap-4 grid-cols-2">
        <Skeleton type="title" className="h-6 mb-4" />
        <Skeleton type="title" className="h-6 mb-4" />
      </div>
    </article>
  );
}

function DashboardCardSkeleton() {
  return (
    <article className="max-w-sm p-4 bg-gray-400 h-[190px] rounded-xl shadow-md text-night animate-beat">
      <Skeleton type="text" className="h-5 w-2/3 mx-auto" />

      <Skeleton type="image" className="w-20 h-20 mx-auto rounded-full my-4" />

      <Skeleton type="title" className="h-5  w-2/3 mx-auto" />
    </article>
  );
}

export function CategoryCardSkeletonWrapper() {
  return (
    <div className="mt-8 w-11/12 mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      <CategoryCardSkeleton />
      <CategoryCardSkeleton />
      <CategoryCardSkeleton />
    </div>
  );
}

export function DashboardCardSkeletonWrapper() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-2 gap-4">
      <DashboardCardSkeleton />
      <DashboardCardSkeleton />
      <DashboardCardSkeleton />
      <DashboardCardSkeleton />
    </div>
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
