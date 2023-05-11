import { getCategoriesBySubdomain } from "@/lib/GetData";
import ScrollableCategoriesListWrapper from "./ScrollableCategoriesListWrapper";

type PageProps = {
  restaurantId: string;
};

export default function CategoriesList({ restaurantId }: PageProps) {
  const Categories = getCategoriesBySubdomain(restaurantId);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-baseline justify-between mt-6 md:mt-0">
        <div className="text-2xl font-bold">Categories</div>
        {/* <div className="text-blue-500 cursor-pointer hover:underline">
          See all
        </div> */}
      </div>

      <ScrollableCategoriesListWrapper
        categories={Categories}
        restaurantId={restaurantId}
      />
    </div>
  );
}
