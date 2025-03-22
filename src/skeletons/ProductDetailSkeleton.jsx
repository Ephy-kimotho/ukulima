import Skeleton from "../components/common/Skeleton";

function ProductDetailSkeleton() {
  return (
    <div className="flex flex-col md:flex-row mt-6 md:justify-around gap-6 animate-beat">
      <div className="bg-gray-400 md:w-2/5 h-[450px]  p-5 rounded-lg">
        <Skeleton type="image" className="h-full rounded-md" />
      </div>
      <div className="bg-gray-400 h-[450px] p-6 md:p-8 gap-4 lg:gap-12 flex flex-1 flex-col md:justify-center rounded-lg">
        <Skeleton type="text" className="h-8" />
        <Skeleton type="text" className="h-8" />
        <Skeleton type="text" className="h-8" />
        <Skeleton type="text" className="h-8" />
        <Skeleton type="text" className="h-8" />
      </div>
    </div>
  );
}

export default ProductDetailSkeleton;
