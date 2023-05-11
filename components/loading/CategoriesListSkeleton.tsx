import Sk_CategoryCard from "./Sk_CategoryCard";

export const CategoriesListSkeleton = () => (
  <div className="flex flex-col gap-2">
    <div className="flex items-baseline justify-between mt-6 md:mt-0">
      <div className="text-2xl font-bold">Categories</div>
      {/* <div className="text-blue-500 cursor-pointer hover:underline">
        See all
      </div> */}
    </div>

    <div className="flex gap-4 p-1 pb-4 overflow-x-scroll scroll-pl-10 snap-x snap-mandatory">
      {[...Array(5)].map((_, i) => (
        <Sk_CategoryCard key={i} />
      ))}
    </div>
  </div>
);
