import Sk_CategoryCard from "./Sk_CategoryCard";

export const CategoriesListSkeleton = () => (
  <div className="flex flex-col gap-2">
    <div className="flex justify-between items-baseline md:mt-0 mt-6">
      <div className="text-2xl font-bold">Categories</div>
      <div className="text-blue-500 hover:underline cursor-pointer">
        See all
      </div>
    </div>

    <div className="flex scroll-pl-10 snap-x snap-mandatory p-1 pb-4 gap-4 overflow-x-scroll">
      {[...Array(5)].map((_, i) => (
        <Sk_CategoryCard key={i} />
      ))}
    </div>
  </div>
);
